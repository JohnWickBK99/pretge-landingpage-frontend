"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

type Dictionary = {
  title: string
  subtitle: string
  free_text: string
  buttons: {
    buy_coin: string
    sell_coin: string
  }
}

export default function FinalCTA({ dictionary }: { dictionary: Dictionary }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("final-cta-section")
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true)
          window.removeEventListener("scroll", handleScroll)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="final-cta-section"
      className={`py-20 px-4 bg-transparent transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{dictionary.title}</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">{dictionary.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-xl">
            {dictionary.buttons.buy_coin}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-black text-black hover:bg-gray-100 px-12 py-4 text-xl bg-transparent"
          >
            {dictionary.buttons.sell_coin}
          </Button>
        </div>

        <p className="text-sm text-gray-500">{dictionary.free_text}</p>
      </div>
    </section>
  )
}
