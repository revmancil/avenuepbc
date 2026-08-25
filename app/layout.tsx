import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

export const dynamic = "force-dynamic";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE AVENUE | Avenue Progressive Baptist Church – South Dallas, TX",
  description:
    "Welcome to THE AVENUE – Avenue Progressive Baptist Church in South Dallas, TX. Join us for Sunday Worship at 11:15 AM. A warm, Christ-centered community since 1961.",
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  keywords: [
    "Avenue Progressive Baptist Church",
    "THE AVENUE",
    "South Dallas church",
    "Dallas Baptist church",
    "church near Dallas TX",
    "South Dallas Baptist church",
    "Dr. Mancil Carroll III",
  ],
  openGraph: {
    title: "THE AVENUE | Avenue Progressive Baptist Church",
    description:
      "A warm, Christ-centered church family in South Dallas since 1961. Sunday Worship at 11:15 AM.",
    siteName: "Avenue Progressive Baptist Church",
    images: [
      {
        url: "/og-image.png?v=2",
        width: 1376,
        height: 768,
        alt: "THE AVENUE – Avenue Progressive Baptist Church, South Dallas TX",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE AVENUE | Avenue Progressive Baptist Church",
    description:
      "A warm, Christ-centered church family in South Dallas since 1961. Sunday Worship at 11:15 AM.",
    images: ["/og-image.png?v=2"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
