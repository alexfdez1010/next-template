import type { Metadata } from "next";
import { Providers } from "./Providers";

import './globals.css';
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Next AI Template",
  description: "Next AI Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="text-foreground bg-background"
    >
      <body className="h-min-screen w-full">
        <Providers>
          <Header />
          <main className="flex flex-col items-center justify-start w-full">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
