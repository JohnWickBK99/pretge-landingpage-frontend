"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

type Dictionary = {
  badge: string
  title: string
  subtitle: string
  reviews: string
  buttons: {
    explore_features: string
    start_trading: string
  }
}

export default function HeroSection({ dictionary }: { dictionary: Dictionary }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className={`py-16 px-4 bg-transparent transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="flex -space-x-2 mr-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
            <div className="w-10 h-10 bg-gray-400 rounded-full border-2 border-white"></div>
            <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-white"></div>
            <div className="w-10 h-10 bg-gray-600 rounded-full border-2 border-white"></div>
            <div className="w-10 h-10 bg-gray-700 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold mr-1">5.0</span>
            <span className="text-sm text-gray-600">{dictionary.reviews}</span>
          </div>
        </div>

        <Badge variant="secondary" className="mb-8 bg-gray-200 text-gray-700 hover:bg-gray-200">
          {dictionary.badge}
        </Badge>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">{dictionary.title}</h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">{dictionary.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
          >
            {dictionary.buttons.explore_features}
          </Button>
          <Button size="lg" className="px-8 py-3 text-lg bg-black hover:bg-gray-800 text-white">
            {dictionary.buttons.start_trading}
          </Button>
        </div>
      </div>
    </section>
  )
}
