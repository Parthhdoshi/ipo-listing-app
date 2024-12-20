import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "./components/Navbar";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Ventura",
  description: "Ventura app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        <NextTopLoader color="#f97316" showSpinner={false} />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
