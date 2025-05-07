"use client";

import { useState } from "react";
import { PDFUploader, PDFRenderer } from "@/components/";
import {
  Container,
  Typography,
  Paper,
  Divider,
  AppBar,
  Toolbar,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function PDFEditorPage() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <PictureAsPdfIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            PDF File Editor
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Upload Your PDF
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Drag and drop your PDF file or click to select one. The first page
            will be rendered below.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <PDFUploader onUpload={setPdfFile} />
        </Paper>

        {pdfFile && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Preview:
            </Typography>
            <PDFRenderer file={pdfFile} />
          </Paper>
        )}
      </Container>
    </>
  );
}
