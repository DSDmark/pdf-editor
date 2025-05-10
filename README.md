# 📄 PDF Previewer

A lightweight, frontend-only PDF preview tool built using **Next.js**, **TypeScript**, and **Material UI** (MUI). This project enables real-time rendering and pagination of HTML content into PDF-style previews directly in the browser—without relying on `html2pdf.js` or any backend services.

---

## 🚀 Features

- ✅ Built with Next.js 15 and TypeScript
- 🎨 Fully styled using Material UI (v7)
- 📄 Live PDF-style preview using `<iframe srcDoc>` technique
- 🔁 Multi-page rendering support with page previews (Page 1, Page 2...)
- 🧠 Redux + Redux Persist for state management
- 🔥 Toast-based feedback via `react-hot-toast`
- 📦 Uses `pdfjs-dist` for rendering and `pdf-lib` for potential editing

---

## 🧠 Use Cases

### Practical Example:
> A report editor where users can preview reports page-by-page while editing content in real time—ideal for resumes, invoices, and multi-language templates.

### Theoretical Example:
> A document system for an enterprise app that needs client-side PDF previews with editable templates and Redux-powered state handling.

---

## 🛠️ Tech Stack

| Tech           | Description |
|----------------|-------------|
| Next.js        | React framework for server-side rendering and routing |
| TypeScript     | Typed JavaScript for safer development |
| MUI            | Material Design UI library |
| Redux Toolkit  | State management with minimal boilerplate |
| pdfjs-dist     | PDF viewer engine |
| pdf-lib        | PDF manipulation (optional/future) |
| react-dropzone | File upload (PDF files) |
| react-hot-toast| Elegant toast notifications |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/DSDmark/pdf-previewer.git
cd pdf-previewer

# Install dependencies
yarn install

# Start development server
yarn run dev
```
