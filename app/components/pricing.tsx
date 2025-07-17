"use client"

import { Check, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

type Dictionary = {
  title: string
  subtitle: string
  other_platforms: string
  other_desc: string
  fee_other: string
  how_other: string
  perf_other: string
  custom_other: string
  exp_other: string
  platform_pre_tge: string
  pre_tge_desc: string
  fee_pre_tge: string
  how_pre_tge: string
  perf_pre_tge: string
  custom_pre_tge: string
  exp_pre_tge: string
  start_button: string
  unavailable_button: string
}

export default function Pricing({ dictionary }: { dictionary: Dictionary }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("pricing-section")
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

  const comparisonData = [
    {
      platform: dictionary.other_platforms,
      description: dictionary.other_desc,
      features: [
        { text: dictionary.fee_other, isAdvantage: false },
        { text: dictionary.how_other, isAdvantage: false },
        { text: dictionary.perf_other, isAdvantage: false },
        { text: dictionary.custom_other, isAdvantage: false },
        { text: dictionary.exp_other, isAdvantage: false },
      ],
      isFeatured: false,
    },
    {
      platform: dictionary.platform_pre_tge,
      description: dictionary.pre_tge_desc,
      features: [
        { text: dictionary.fee_pre_tge, isAdvantage: true },
        { text: dictionary.how_pre_tge, isAdvantage: true },
        { text: dictionary.perf_pre_tge, isAdvantage: true },
        { text: dictionary.custom_pre_tge, isAdvantage: true },
        { text: dictionary.exp_pre_tge, isAdvantage: true },
      ],
      isFeatured: true,
    },
  ]

  return (
    <section
      id="pricing-section"
      className={`py-20 px-4 bg-transparent transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">The Comparison</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{dictionary.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{dictionary.subtitle}</p>
        </div>

        <div className="relative flex flex-col lg:flex-row justify-center items-center max-w-4xl mx-auto">
          {comparisonData.map((plan, index) => (
            <div
              key={index}
              className={`w-full lg:w-1/2 p-8 flex flex-col justify-between rounded-3xl transition-all duration-300 ${
                plan.isFeatured
                  ? "bg-[#000]/90 backdrop-blur-xl text-white shadow-2xl z-10 lg:-ml-8 lg:-translate-y-4 border border-white/10"
                  : "bg-white/60 backdrop-blur-xl text-gray-900 border border-gray-200/50 shadow-lg z-0"
              }`}
              style={{ minHeight: "480px" }}
            >
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${plan.isFeatured ? "text-white" : "text-gray-800"}`}>
                  {plan.platform}
                </h3>
                <p className={`mb-8 text-base leading-relaxed ${plan.isFeatured ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.isAdvantage ? (
                        <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-[#38bdf8]" />
                      ) : (
                        <X className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-red-400" />
                      )}
                      <span className={`text-sm ${plan.isFeatured ? "text-gray-300" : "text-gray-700"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
          
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
