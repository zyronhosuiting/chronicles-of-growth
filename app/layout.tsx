import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/home/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const sourceHanSerifCN = localFont({
  src: "./fonts/SourceHanSerifCN.otf",
  variable: "--font-source-han-serif-cn",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Zyron Chronicles",
  description: 'A fantasy series by "Zyron"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceHanSerifCN.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
