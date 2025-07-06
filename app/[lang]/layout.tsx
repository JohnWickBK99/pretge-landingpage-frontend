import type React from "react"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"
import { i18n, type Locale } from "@/i18n-config"
import "../globals.css"

const fontSans = localFont({
  src: [
    {
      path: "../../public/fonts/CocomatPro-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/CocomatPro-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/CocomatPro-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/CocomatPro-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/CocomatPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CocomatPro-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/CocomatPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CocomatPro-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/CocomatPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CocomatPro-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/CocomatPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CocomatPro-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/CocomatPro-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/CocomatPro-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/CocomatPro-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/CocomatPro-HeavyItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/CocomatPro-Black.woff2",
      weight: "950",
      style: "normal",
    },
    {
      path: "../../public/fonts/CocomatPro-BlackItalic.woff2",
      weight: "950",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} className={cn(fontSans.variable)}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
