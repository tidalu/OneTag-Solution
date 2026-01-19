"use client";

import "./globals.css";
import "aos/dist/aos.css";

import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";
import { ThemeProvider } from "@/src/contexts/theme-context";
import { LanguageProvider } from "@/src/contexts/language-context";
import PreferenceModalWrapper from "@/src/components/preference-modal-wrapper";
import ScrollToTop from "../components/scrollToTop";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <link rel="icon" href="/onetag.ico" />
      </Head>

      <ThemeProvider>
        <LanguageProvider>
          <Navbar />
          <ScrollToTop />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <PreferenceModalWrapper />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}
