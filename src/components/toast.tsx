import { useMaxToasts } from "@/hooks";
import React from "react";
import { Toaster } from "react-hot-toast";

export function ToasterWithMax({
  max = 1,
  ...props
}: React.ComponentProps<typeof Toaster> & {
  max?: number;
}) {
  useMaxToasts(max);

  return <Toaster {...props} />;
}
