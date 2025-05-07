import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Typography, Paper, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import toast from "react-hot-toast";

export function PDFUploader({ onUpload }: { onUpload: (file: File) => void }) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) {
        toast.error("Please upload a valid PDF file");
        return;
      }
      const file = acceptedFiles[0];
      toast.success(`Uploaded: ${file.name}`);
      onUpload(file);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [] },
    multiple: false,
    maxFiles: 1,
  });

  return (
    <Paper
      {...getRootProps()}
      elevation={3}
      sx={{
        p: 4,
        textAlign: "center",
        border: "2px dashed #1976d2",
        color: "#1976d2",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": { backgroundColor: "#f0f4ff" },
      }}
    >
      <input {...getInputProps()} />
      <Box display="flex" flexDirection="column" alignItems="center">
        <CloudUploadIcon fontSize="large" color="primary" />
        <Typography variant="h6" mt={1}>
          {isDragActive ? "Drop your PDF here..." : "Drag & drop a PDF here"}
        </Typography>
        <Typography variant="body2" mt={1} mb={2}>
          or click to select a file
        </Typography>
        <Button variant="contained" startIcon={<InsertDriveFileIcon />}>
          Upload PDF
        </Button>
      </Box>
    </Paper>
  );
}
