"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { image: "/images/ad1.jpg", alt: "Featured 1" },
  { image: "/images/ad2.png", alt: "Featured 2" },
  { image: "/images/ad3.png", alt: "Featured 3" },
  { image: "/images/ad4.png", alt: "Featured 4" },
  { image: "/images/ad5.jpg", alt: "Featured 5" },
  { image: "/images/ad6.jpg", alt: "Featured 6" },
]

export function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(timer)
  }, [isPaused])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Resume after 5 seconds
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/services#traffic" className="block group">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted">
          <div className="relative w-full aspect-[4/3]">
            {/* Images */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.preventDefault()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-slate-800" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              goToNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-slate-800" />
          </button>

          {/* Click to view overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Click to View Traffic Services
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                goToSlide(index)
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-secondary w-8"
                  : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Link>
    </div>
  )
}
