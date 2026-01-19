// import { metadata } from "./metadata";
// export { metadata };

// "use client"

// import type React from "react"
// // import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import { Navbar } from "@/src/components/navbar"
// import { Footer } from "@/src/components/footer"
// import { AccessibilityToolbar } from "@/src/components/accessibility-toolbar"
// import { LanguageProvider, useLanguage } from "@/src/contexts/language-context"
// import { ThemeProvider } from "@/src/contexts/theme-context"
// import "aos/dist/aos.css";
// import PreferenceModalWrapper from "@/src/components/preference-modal-wrapper"
// import ScrollToTop from "../components/scrollToTop"
// import Head from "next/head"
// import { DynamicHead } from "../components/DynamicHead"

// const inter = Inter({
//   subsets: ["latin", "cyrillic"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-inter",
// })

// // export const metadata: Metadata = {
// //   title: "OneTag Smart Solutions - Smart Retail Technology",
// //   description: "Bluetooth and Wi-Fi powered smart price tags for modern retail stores",
// // }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={inter.variable} suppressHydrationWarning>
//       <Head>
//         <link rel="icon" href="/onetag.ico" />
//       </Head>
//       <body className="font-sans antialiased tran sition-colors dura tion-300">
//         <ThemeProvider>
//           <LanguageProvider>
//             {/* <DynamicHead /> */}
//             <Navbar />
//             <ScrollToTop />
//             <main className="min-h-screen">{children}</main>
//             <Footer />
//             <PreferenceModalWrapper />

//           </LanguageProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

import { metadata } from "./metadata";
export { metadata };

import ClientLayout from "./layout.client";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}