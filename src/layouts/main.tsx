import { ToasterWithMax } from "@/components";
import React from "react";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayout) => {
  return (
    <>
      {children}
      <ToasterWithMax
        position="top-center"
        max={1}
        toastOptions={{ style: { maxWidth: "calc(44.33vw)" } }}
      />
    </>
  );
};
