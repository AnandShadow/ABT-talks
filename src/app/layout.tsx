import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppStateProvider } from "@/lib/AppStateContext";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center min-h-screen`}
      >
        <AppStateProvider>
          <main className="w-full max-w-[390px] min-h-screen border-x border-white/[0.05] relative shadow-2xl shadow-black/50 overflow-hidden before:absolute before:top-[-200px] before:left-1/2 before:-translate-x-1/2 before:w-[600px] before:h-[600px] before:bg-white/[0.05] before:blur-[100px] before:rounded-full before:pointer-events-none before:-z-10">
            {children}
          </main>
        </AppStateProvider>
      </body>
    </html>
  );
}
