import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function PDFUploader({ onUpload }: { onUpload: (file: File) => void }) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onUpload(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/pdf": [] },
  });

  return (
    <div {...getRootProps()} className="border-dashed border-2 p-4 text-center">
      <input {...getInputProps()} />
      <p>Drag & drop PDF here, or click to upload</p>
    </div>
  );
}
