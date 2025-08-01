import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { i18n } from "@/i18n-config"

import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  const defaultLocale = i18n.defaultLocale

  return matchLocale(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Không redirect nếu là /blogs hoặc /blogs/[slug]
  if (pathname === "/blogs" || pathname.startsWith("/blogs/")) {
    return
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    const targetLocale = i18n.defaultLocale // Always use 'en' as the default

    // Redirect to the URL with the determined locale
    return NextResponse.redirect(
      new URL(`/${targetLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url),
    )  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
}
