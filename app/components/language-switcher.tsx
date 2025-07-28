"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { i18n, type Locale } from "@/i18n-config"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  const languageNames: Record<Locale, string> = {
    en: "English",
    zh: "中文",
    id: "Bahasa Indonesia",
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link href={redirectedPathName(locale)}>{languageNames[locale]}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
