"use client";

import { Toaster } from "@/components/ui/sonner";
import { AppProps } from "@/types";
import { ThemeProvider } from "./theme-provider";

export default function AppProVider(props: AppProps) {
  const { children } = props;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Toaster />
      {children}
    </ThemeProvider>
  );
}
