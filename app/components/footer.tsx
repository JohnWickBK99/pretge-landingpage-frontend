"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

type Dictionary = {
  description: string
  copyright: string
  buttons: {
    start_trading: string
  }
}

export default function Footer({ dictionary }: { dictionary: Dictionary }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("footer-section")
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
    <footer
      id="footer-section"
      className={`bg-transparent py-16 px-4 font-sans transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Image src="/images/pre-tge-logo.png" alt="Pre-TGE Logo" width={150} height={40} className="mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl">{dictionary.description}</p>
        </div>

        <div className="mb-16">
          <Button size="lg" className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-4 text-base font-medium">
            {dictionary.buttons.start_trading}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="text-gray-500 text-sm">{dictionary.copyright}</div>
      </div>
    </footer>
  )
}
