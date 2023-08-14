"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>Please Wait...</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
