"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Phone } from "lucide-react"

const heroSlides = [
  {
    title: "Trusted Legal Representation",
    subtitle: "The Confidence and Experience of a Legal Advocate",
    description: "Prudential Legal Services is a fully licensed firm offering knowledgeable and qualified legal advice and representation at reasonable rates.",
    image: "/images/hero-bg.jpg",
    slogan: "When Justice Matters, Experience Counts",
  },
  {
    title: "Comprehensive Legal Services",
    subtitle: "Professional Paralegal Services in Ontario",
    description: "From SABS claims to traffic violations, we provide expert representation across all practice areas.",
    image: "/images/courthouse.jpg",
    slogan: "Your Voice in the Courtroom, Your Shield Against Injustice",
  },
  {
    title: "Your Legal Rights Matter",
    subtitle: "Experienced Advocacy When You Need It Most",
    description: "With years of experience and extensive education, we fight for the best outcomes for our clients.",
    image: "/images/consultation.jpg",
    slogan: "Fighting for Your Rights, Protecting Your Future",
  },
  {
    title: "Affordable Legal Solutions",
    subtitle: "Quality Representation at Reasonable Rates",
    description: "Professional legal services that don't break the bank. We believe everyone deserves access to justice.",
    image: "/images/services-bg.jpg",
    slogan: "Where Legal Excellence Meets Compassionate Service",
  },
]

interface HeroCarouselProps {
  onSloganChange?: (slogan: string) => void
}

export function HeroCarousel({ onSloganChange }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (onSloganChange) {
      onSloganChange(heroSlides[currentSlide].slogan)
    }
  }, [currentSlide, onSloganChange])

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-20">
      {/* Background Images */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt="Professional legal office"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        </div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          <AnimatedSection key={currentSlide} delay={100}>
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              Licensed Paralegal Services in Ontario
            </span>
          </AnimatedSection>

          <AnimatedSection key={`title-${currentSlide}`} delay={200}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              {slide.title}
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-semibold mb-6">
              {slide.subtitle}
            </p>
          </AnimatedSection>

          <AnimatedSection key={`desc-${currentSlide}`} delay={300}>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              {slide.description}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/book-consultation">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
              <a href="tel:4167237387" className="flex items-center gap-3 text-primary-foreground hover:text-secondary transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="block text-sm opacity-80">Call Us Now</span>
                  <span className="font-semibold">(416) 723-7387</span>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-secondary w-8"
                : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
