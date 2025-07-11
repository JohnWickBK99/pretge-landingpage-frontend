import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layouts/header"
import { Footer } from "@/components/layouts/footer"
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Secure Pre-TGE Token Trading with Escrow Protection",
    template: "%s | PreTGE",
  },
  description:
    "A secure and transparent platform for Pre-TGE token trading with escrow protection. Ensuring safe transactions between buyers and sellers before token listing.",
  generator: "Next.js",
  applicationName: "PreTGE Landing & Blog Platform",
  authors: [{ name: "PreTGE Team" }],
  keywords: [
    "pre-TGE",
    "token trading",
    "escrow",
    "secure trading",
    "blockchain",
    "crypto",
    "escrow protection",
    "PreTGE",
    "safe token trading",
    "decentralized trading",
  ],
  creator: "PreTGE Team",
  publisher: "PreTGE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Secure Pre-TGE Token Trading with Escrow Protection",
    description:
      "A secure and transparent platform for Pre-TGE token trading with escrow protection.",
    images: [
      {
        url: "/thumnails.png",
        width: 1200,
        height: 630,
        alt: "PreTGE Escrow Token Trading Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Pre-TGE Token Trading with Escrow Protection",
    description:
      "A secure and transparent platform for Pre-TGE token trading with escrow protection.",
    images: [
      {
        url: "/thumnails.png",
        alt: "PreTGE Escrow Token Trading Thumbnail",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        async
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
