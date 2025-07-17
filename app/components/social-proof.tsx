"use client"

import { useEffect, useState } from "react"

export default function SocialProof() {
  const originalPartners = ["JUPITER", "BLAST", "HYPER LIQUID", "WLFI", "PRETGE", "SOLANA", "ETHEREUM", "POLYGON", "AVAX", "FANTOM", "ARBITRUM", "OPTIMISM", "BASE", "POLYGON", "AVAX", "FANTOM", "ARBITRUM", "OPTIMISM", "BASE"]
  // Create multiple copies for seamless infinite scroll
  const partners = [...originalPartners, ...originalPartners, ...originalPartners]
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("social-proof-section")
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
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
        
        {/* First row - Left to Right */}
        <div className="relative w-full overflow-hidden mb-8">
          <div className="flex animate-scroll-right-to-left whitespace-nowrap">
            {partners.map((partner, index) => (
              <div 
                key={`row1-${index}`} 
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300 font-semibold text-lg mx-8 md:mx-16 flex-shrink-0 cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Second row - Right to Left (opposite direction) */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-left-to-right whitespace-nowrap">
            {partners.reverse().map((partner, index) => (
              <div 
                key={`row2-${index}`} 
                className="text-gray-500 hover:text-gray-300 transition-colors duration-300 font-medium text-base mx-6 md:mx-12 flex-shrink-0 cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
