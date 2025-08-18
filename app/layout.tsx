"use client"

import { SessionProvider } from "next-auth/react";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-50"
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
