"use client"

import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

type TestimonialItem = {
  text: string
  author: string
  role: string
}

type Dictionary = {
  section_title: string
  title: string
  reviews_summary: string
  items: TestimonialItem[]
  buttons: {
    see_pricing: string
    start_trading: string
  }
}

export default function Testimonials({ dictionary }: { dictionary: Dictionary }) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1)
      else if (window.innerWidth < 1024) setItemsPerPage(2)
      else setItemsPerPage(3)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("testimonials-section")
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

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= (dictionary.items?.length || 0) - itemsPerPage + 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? (dictionary.items?.length || 0) - itemsPerPage : prev - 1))
  }

  const translateXValue = -(currentIndex * (100 / itemsPerPage))

  return (
    <section
      id="testimonials-section"
      className={`py-20 px-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">{dictionary.section_title}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{dictionary.title}</h2>
          <div className="flex items-center justify-center mb-8">
            <div className="flex -space-x-2 mr-4">
              {['cat','dog','fox'].map((seed, i) => (
                <img
                  key={i}
                  src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                />
              ))}
            </div>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold mr-1">5.0</span>
              <span className="text-sm text-gray-600">{dictionary.reviews_summary}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateXValue}%)` }}
            >
              {(dictionary.items || []).map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 p-4" style={{ width: `${100 / itemsPerPage}%` }}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed flex-grow">"{testimonial.text}"</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(testimonial.author || `user${index+1}`)}`}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full mr-4 bg-gray-200 border-2 border-white"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-gray-500 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-10"
            onClick={handlePrev}
            disabled={(dictionary.items?.length || 0) <= itemsPerPage}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-10"
            onClick={handleNext}
            disabled={(dictionary.items?.length || 0) <= itemsPerPage}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
            >
              {dictionary.buttons.see_pricing}
            </Button> */}
            <Button size="lg" className="px-8 py-3 text-lg bg-black hover:bg-gray-800 text-white">
              {dictionary.buttons.start_trading}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
