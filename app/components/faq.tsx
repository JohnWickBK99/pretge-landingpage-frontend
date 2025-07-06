"use client"

import { useState, useEffect } from "react"
import { Plus, Minus } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
}

type Dictionary = {
  section_title: string
  title: string
  subtitle: string
  items: FaqItem[]
}

export default function FAQ({ dictionary }: { dictionary: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("faq-section")
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
      id="faq-section"
      className={`py-20 px-4 bg-transparent transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">{dictionary.section_title}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{dictionary.title}</h2>
          <p className="text-xl text-gray-600">{dictionary.subtitle}</p>
        </div>

        <div className="space-y-4">
          {(dictionary.items || []).map((faq, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-sm border border-gray-200/50">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors rounded-2xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
