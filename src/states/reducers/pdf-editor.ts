// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { PDFDocumentProxy } from "pdfjs-dist";

// interface PageState {
//   data: string | ArrayBuffer;
// }
// interface PdfState {
//   pages: PageState[];
//   currentPage: number;
//   history: PdfState[];
//   future: PdfState[];
// }

// const initialState: PdfState = {
//   pages: [],
//   currentPage: 0,
//   history: [],
//   future: [],
// };

// const pdfSlice = createSlice({
//   name: "pdf",
//   initialState,
//   reducers: {
//     loadDocument(state, action: PayloadAction<string>) {
//       // load via pdf.js, split into pages...
//     },
//     addPage(state) {
//       /* ... */
//     },
//     removePage(state, action: PayloadAction<number>) {
//       /* ... */
//     },
//     reorderPages(state, action: PayloadAction<{ from: number; to: number }>) {
//       /* ... */
//     },
//     undo(state) {
//       /* snapshot restore */
//     },
//     redo(state) {
//       /* snapshot restore */
//     },
//   },
// });

// export const { loadDocument, addPage, removePage, reorderPages, undo, redo } =
//   pdfSlice.actions;
// export default pdfSlice.reducer;
