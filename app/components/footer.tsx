"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, X, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

type Dictionary = {
  description: string;
  copyright: string;
  buttons: {
    start_trading: string;
  };
};

const SOCIAL_LINKS = {
  twitter: "https://x.com/pretgemarket",
  gitbook: "https://pretgemarket.gitbook.io/pre-tge-market/"
};

export default function Footer({ dictionary }: { dictionary: Dictionary }) {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer
      id="footer-section"
      className="bg-transparent py-6 px-4 font-sans border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <Image
            src="/images/pre-tge-logo.png"
            alt="Pre-TGE Logo"
            width={150}
            height={40}
            className="object-contain"
          />
          
          <div className="text-gray-500 text-sm">
            {dictionary.copyright}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSocialClick(SOCIAL_LINKS.gitbook)}
              className="cursor-pointer p-1 rounded hover:bg-gray-100 transition-colors duration-200"
              aria-label="View our documentation on GitBook"
            >
              <BookOpen className="w-[18px] h-[18px] text-gray-900" />
            </button>
            <button
              onClick={() => handleSocialClick(SOCIAL_LINKS.twitter)}
              className="cursor-pointer p-1 rounded hover:bg-gray-100 transition-colors duration-200"
              aria-label="Follow us on X (Twitter)"
            >
              <Image
                src="/images/X_logo.svg"
                alt="X Logo"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
