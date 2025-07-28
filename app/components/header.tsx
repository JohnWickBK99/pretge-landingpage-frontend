"use client";

import type React from "react";
import { useEffect, useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./language-switcher";
import type { Locale } from "@/i18n-config";

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: {
    nav: {
      solution: string;
      testimonial: string;
      compare: string;
      faq: string;
      blogs: string;
    };
    buttons: { buy_coin: string; sell_coin: string };
  };
}) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id); // Set active section immediately on click
    }
  };

  useEffect(() => {
    const sections = [
      "features-section",
      "testimonials-section",
      "pricing-section",
      "faq-section",
    ];
    const observers = new Map<string, IntersectionObserver>();

    // Get header height dynamically for rootMargin calculation
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 80; // Default to 80px if header not found

    const options = {
      root: null, // Use the viewport as the root
      // Trigger when the section's top is just below the header
      // -99% bottom margin ensures only the top-most section is considered
      rootMargin: `-${headerHeight}px 0px -99% 0px`,
      threshold: 0, // Trigger as soon as any part of the target enters the rootMargin
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the first intersecting entry (which will be the one at the top of the viewport)
      const intersectingEntry = entries.find((entry) => entry.isIntersecting);
      if (intersectingEntry) {
        setActiveSection(intersectingEntry.target.id);
      } else {
        // If no section is intersecting (e.g., at the very top of the page before first section)
        // or if scrolling quickly between sections, ensure a default or previous state.
        // For simplicity, we can default to the first section if at the very top.
        if (window.scrollY < headerHeight + 50 && sections.length > 0) {
          setActiveSection(sections[0]);
        }
      }
    };

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(section);
        observers.set(id, observer);
      }
    });

    // Initial check on mount to set the correct active section
    const initialCheck = () => {
      const currentScrollY = window.scrollY;
      let currentActiveId: string | null = null;
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Calculate distance from the section's top to the bottom of the header
          const distance = Math.abs(rect.top - headerHeight);
          if (distance < minDistance) {
            minDistance = distance;
            currentActiveId = id;
          }
        }
      });
      setActiveSection(currentActiveId);
    };

    // Run initial check after a small delay to ensure all elements are rendered and positioned
    const timeoutId = setTimeout(initialCheck, 100);

    // Cleanup function for useEffect
    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect()); // Disconnect all observers
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Helper function to get dynamic class names for navigation links
  const getLinkClasses = (sectionId: string) => {
    const baseClasses = "relative pb-1 transition-all duration-300"; // Base classes for all links, including padding for the border
    const activeClasses = "text-gray-900 border-b-2 border-gray-900"; // Classes for active state (no font-bold)
    const inactiveClasses =
      "text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 border-b-2 border-transparent"; // Classes for inactive state

    return `${baseClasses} ${
      activeSection === sectionId ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full py-4 px-4 bg-gray-50/80 backdrop-blur-lg border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 w-[256px]">
          <Image
            src="/images/pre-tge-logo.png"
            alt="Pre-TGE Logo"
            width={150}
            height={40}
          />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features-section"
            onClick={(e) => handleScrollToSection(e, "features-section")}
            className={getLinkClasses("features-section")}
          >
            {dictionary.nav.solution}
          </a>
          {/* <a
            href="#testimonials-section"
            onClick={(e) => handleScrollToSection(e, "testimonials-section")}
            className={getLinkClasses("testimonials-section")}
          >
            {dictionary.nav.testimonial}
          </a> */}
          <a
            href="#pricing-section"
            onClick={(e) => handleScrollToSection(e, "pricing-section")}
            className={getLinkClasses("pricing-section")}
          >
            {dictionary.nav.compare}
          </a>
          <a
            href="#faq-section"
            onClick={(e) => handleScrollToSection(e, "faq-section")}
            className={getLinkClasses("faq-section")}
          >
            {dictionary.nav.faq}
          </a>
          <a href={`/blogs`} className={getLinkClasses("blogs-section")}>
            {dictionary.nav.blogs}
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button onClick={() => window.open("https://app.pretgemarket.xyz", "_blank")} className="bg-black hover:bg-gray-800 text-white">
            {dictionary.buttons.buy_coin}
          </Button>
          <Button
            onClick={() => window.open("https://seller.pretgemarket.xyz", "_blank")}
            variant="outline"
            className="border-black text-black hover:bg-gray-100 bg-transparent"
          >
            {dictionary.buttons.sell_coin}
          </Button>
          <LanguageSwitcher lang={lang} />
        </div>
      </div>
    </header>
  );
}
