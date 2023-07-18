import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-providers";
import "./globals.css";
import { ToastProvier } from "@/providers/ToastProvier";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developers' CMS",
  description: "Developers' CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvier />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
