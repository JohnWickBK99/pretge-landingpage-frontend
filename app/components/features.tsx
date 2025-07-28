"use client"

import { Button } from "@/components/ui/button"
import { BarChart3, ShoppingCart, Shield } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

type Dictionary = {
  section_title: string
  title: string
  subtitle: string
  seller_title: string
  seller_desc: string
  seller_sub_desc: string
  buyer_title: string
  buyer_desc: string
  buyer_sub_desc: string
  security_title: string
  security_desc: string
  security_sub_desc: string
  buttons: {
    sell_coin: string
    buy_coin: string
  }
}

export default function Features({ dictionary }: { dictionary: Dictionary }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("features-section")
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
      id="features-section"
      className={`py-20 px-4 bg-transparent transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">
            {dictionary.section_title}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dictionary.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="flex-1">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-gray-200/50">
              <div className="w-full h-64 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/seller-illustration.png"
                  alt="Hand-drawn illustration of a seller dashboard"
                  className="object-cover p-4 rounded-lg border border-gray-200/50"
                  width={512}
                  height={512}
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-8 h-8 text-gray-900 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                {dictionary.seller_title}
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {dictionary.seller_desc}
            </p>
            <p className="text-sm text-gray-500">
              {dictionary.seller_sub_desc}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
          <div className="flex-1">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-gray-200/50">
              <div className="w-full h-64 rounded-lg relative overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/buyer-illustration.png"
                  alt="Hand-drawn illustration of a buyer marketplace"
                  width={512}
                  height={512}
                  className="object-contain p-4 rounded-lg border border-gray-200/50"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <ShoppingCart className="w-8 h-8 text-gray-900 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                {dictionary.buyer_title}
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {dictionary.buyer_desc}
            </p>
            <p className="text-sm text-gray-500">{dictionary.buyer_sub_desc}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          {/* <div className="flex-1">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <div className="w-full h-64 rounded-lg relative overflow-hidden">
                <Image
                  src="/images/security-illustration.png"
                  alt="Hand-drawn illustration of a security shield"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div> */}
          <div className="flex-1 flex flex-col items-center justify-center bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-gray-900 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                {dictionary.security_title}
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
              {dictionary.security_desc}
            </p>
            <p className="text-sm text-gray-500 w-1/2 mx-auto text-center">
              {dictionary.security_sub_desc}
            </p>
            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() =>
                    window.open("https://app.pretgemarket.xyz", "_blank")
                  }
                  size="lg"
                  className="px-8 py-3 text-lg bg-black hover:bg-gray-800 text-white"
                >
                  {dictionary.buttons.buy_coin}
                </Button>
                <Button
                  onClick={() =>
                    window.open("https://seller.pretgemarket.xyz", "_blank")
                  }
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                >
                  {dictionary.buttons.sell_coin}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
