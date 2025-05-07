// pages/pdf-editor.tsx
import { useState } from "react";
import { PDFUploader, PDFRenderer } from "@/components/";

export default function PDFEditorPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">PDF File Editor</h1>
      <PDFUploader onUpload={setPdfFile} />
      {pdfFile && <PDFRenderer file={pdfFile} />}
    </div>
  );
}
