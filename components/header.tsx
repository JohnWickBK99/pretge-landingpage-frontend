import Image from "next/image"
import { Button } from "@/components/ui/button"
import LanguageSwitcher from "./language-switcher"
import type { Locale } from "@/i18n-config"

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: {
    nav: { features: string; pricing: string; faq: string }
    buttons: { buy_coin: string; sell_coin: string }
  }
}) {
  return (
    <header className="sticky top-0 z-50 w-full py-4 px-4 bg-gray-50/80 backdrop-blur-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/blogs">
          <Image
            src="/images/pre-tge-logo.png"
            alt="Pre-TGE Logo"
            width={150}
            height={40}
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            {dictionary.nav.features}
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            {dictionary.nav.pricing}
          </a>
          <a
            href="#faq"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            {dictionary.nav.faq}
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="bg-black hover:bg-gray-800 text-white">
            {dictionary.buttons.buy_coin}
          </Button>
          <Button
            variant="outline"
            className="border-black text-black hover:bg-gray-100 bg-transparent"
          >
            {dictionary.buttons.sell_coin}
          </Button>
          <LanguageSwitcher lang={lang} />
        </div>
      </div>
    </header>
  );
}
