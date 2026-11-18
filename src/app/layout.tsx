import type { Metadata, Viewport } from "next";
import { Michroma, Rajdhani, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const michroma = Michroma({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const rajdhani = Rajdhani({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-hud",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DHEERAJ VISHWAKARMA // Unity Game Developer",
  description:
    "Unity game developer & technical artist focused on rendering, shaders, and shipping complete titles from concept to release. Unity Junior Programmer certified. Portfolio of Dheeraj Vishwakarma (stellar009).",
  keywords: [
    "Unity Game Developer",
    "Technical Artist",
    "URP",
    "Shaders",
    "Dheeraj Vishwakarma",
    "stellar009",
    "Game Development",
    "Portfolio",
  ],
  authors: [{ name: "Dheeraj Vishwakarma" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "DHEERAJ VISHWAKARMA // Unity Game Developer",
    description:
      "Building polished, high-performance games. Unity 6 · URP · Shaders. Shipped titles, game jams, and technical art.",
    siteName: "STELLAR009 PORTFOLIO",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080909",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${michroma.variable} ${rajdhani.variable} ${shareTechMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
