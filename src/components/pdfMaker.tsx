import { Box } from "@mui/material";
import { useEffect, useRef } from "react";

export function PDFRenderer({ file }: { file: File }) {
  const canvasRef = useRef(null);
  const renderTaskRef: any = useRef(null);

  useEffect(() => {
    if (!file) return;
    let isMounted = true;
    import("pdfjs-dist").then((pdfjsLib) => {
      if (!isMounted) return;

      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).href;

      const reader: any = new FileReader();
      reader.onload = async () => {
        if (!isMounted) return;

        const bytes = new Uint8Array(reader.result);
        const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
        const page = await pdf.getPage(1);
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        const canvas: any = canvasRef.current;
        if (!canvas) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        renderTaskRef.current = page.render({
          canvasContext: context,
          viewport,
        });

        try {
          await renderTaskRef.current.promise;
          renderTaskRef.current = null;
        } catch (error: any) {
          if (error.name === "RenderingCancelledException") {
            console.log("Rendering was cancelled");
          } else {
            console.error("Rendering error:", error);
          }
        }
      };
      reader.readAsArrayBuffer(file);
    });

    return () => {
      isMounted = false;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [file]);

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        border: "1px solid #ccc",
        borderRadius: 2,
        p: 1,
        backgroundColor: "#fafafa",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", maxWidth: "100%", height: "auto" }}
      />
    </Box>
  );
}
