import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/i18n-config"
import Header from "@/app/components/header"
import HeroSection from "@/app/components/hero-section"
import SocialProof from "@/app/components/social-proof"
import Features from "@/app/components/features"
import Testimonials from "@/app/components/testimonials"
import Pricing from "@/app/components/pricing"
import FAQ from "@/app/components/faq"
import FinalCTA from "@/app/components/final-cta"
import Footer from "@/app/components/footer"
import Background from "@/app/components/background"

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="relative min-h-screen">
      <Background />
      <div className="relative z-10">
        <Header lang={lang} dictionary={{ nav: dictionary.nav, buttons: dictionary.buttons }} />
        <main>
          <HeroSection dictionary={{ ...dictionary.hero, buttons: dictionary.buttons }} />
          <SocialProof />
          <Features dictionary={{ ...dictionary.features, buttons: dictionary.buttons }} />
          {/* <Testimonials dictionary={{ ...dictionary.testimonials, buttons: dictionary.buttons }} /> */}
          <Pricing dictionary={dictionary.pricing} />
          <FAQ dictionary={dictionary.faq} />
          <FinalCTA dictionary={{ ...dictionary.final_cta, buttons: dictionary.buttons }} />
        </main>
        <Footer dictionary={{ ...dictionary.footer, buttons: dictionary.buttons }} />
      </div>
    </div>
  )
}
