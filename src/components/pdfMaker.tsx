import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";
import { PDFDocument, rgb } from "pdf-lib";

export async function addTextToPDF(file: File) {
  const bytes = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(bytes);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  firstPage.drawText("Hello, edited PDF!", {
    x: 50,
    y: 700,
    size: 24,
    color: rgb(0, 0.53, 0.71),
  });

  const modifiedPdfBytes = await pdfDoc.save();
  const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
  return URL.createObjectURL(blob);
}

export function PDFRenderer({ file }: { file: any }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const typedarray = new Uint8Array(reader.result as ArrayBuffer);
      const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
      const page = await pdf.getPage(1);

      const canvas: any = canvasRef.current;
      const context = canvas.getContext("2d");
      const viewport = page.getViewport({ scale: 1.5 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;
      page.render({ canvasContext: context, viewport });
    };
    reader.readAsArrayBuffer(file);
  }, [file]);

  return <canvas ref={canvasRef} />;
}
