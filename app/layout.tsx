import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import { ToastContainer, toast } from 'react-toastify';

export const metadata: Metadata = {
  title: "TinyTales - AI",
  description: "AI short stories generator for Kids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
