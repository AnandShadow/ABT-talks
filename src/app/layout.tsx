import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABTalks 60-Day Challenge",
  description: "60 Days. Prove your potential.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white flex justify-center min-h-screen`}
      >
        <main className="w-full max-w-[390px] min-h-screen bg-black border-x border-zinc-900 relative shadow-2xl shadow-zinc-900/20">
          {children}
        </main>
      </body>
    </html>
  );
}
