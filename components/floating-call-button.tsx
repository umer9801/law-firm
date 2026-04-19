"use client"

import { Phone } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <a
      href="tel:4167237387"
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-secondary text-secondary-foreground px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 group ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
      aria-label="Call Now"
    >
      <div className="relative">
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      </div>
      <span className="font-semibold hidden sm:inline">Call Now</span>
    </a>
  )
}
