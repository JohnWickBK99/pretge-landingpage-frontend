"use client"

import { useEffect, useState } from "react"

export default function SocialProof() {
  const partners = ["JUPITER", "BLAST", "HYPER LIQUID", "WLFI", "JUPITER", "BLAST", "HYPER LIQUID", "WLFI"] // Duplicate for continuous scroll effect
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("social-proof-section")
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          // Adjust 0.8 to control when it appears
          setIsVisible(true)
          window.removeEventListener("scroll", handleScroll)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount in case it's already in view

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="social-proof-section"
      className={`py-16 px-4 overflow-hidden transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 mb-8 text-sm uppercase tracking-wider">Trusted by Top Ecosystems</p>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-left-to-right whitespace-nowrap">
            {" "}
            {/* Apply animation here */}
            {partners.map((partner, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg mx-8 md:mx-16 flex-shrink-0">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
