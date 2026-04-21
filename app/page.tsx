"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { ServiceCard } from "@/components/service-card"
import { HeroCarousel } from "@/components/hero-carousel"
import { FloatingCallButton } from "@/components/floating-call-button"
import { Button } from "@/components/ui/button"
import { 
  Scale, 
  Shield, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle
} from "lucide-react"

const services = [
  {
    title: "SABS",
    description: "Expert representation for all types of motor vehicle accident claims including SABS benefits.",
    image: "/images/mv.webp",
    href: "/services#sabs",
  },
  {
    title: "Provincial Offences",
    description: "Defense against charges under the Highway Traffic Act and other provincial laws.",
    image: "/images/courthouse.jpg",
    href: "/services#provincial",
  },
  {
    title: "Traffic Violations",
    description: "Professional defense against speeding tickets, red light violations, and more.",
    image: "/images/traffic.jpg",
    href: "/services#traffic",
  },
  {
    title: "Slip & Falls",
    description: "Legal representation for slip and fall injury claims with strict timelines.",
    image: "/images/slip.webp",
    href: "/services#slip-fall",
  },
  {
    title: "Small Claims Court",
    description: "Representation for claims up to $25,000 in Small Claims Court matters.",
    image: "/images/smallclaims.jpg",
    href: "/services#small-claims",
  },
  {
    title: "Landlord & Tenant",
    description: "Expert advice and representation at the Ontario Landlord and Tenant Board.",
    image: "/images/landlord.jpg",
    href: "/services#landlord-tenant",
  },
]

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "1000+", label: "Cases Handled" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
]

const features = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "Member of the Law Society of Ontario with extensive legal training and credentials.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Dedicated to providing personalized attention and achieving the best outcomes for our clients.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful case resolutions across all practice areas.",
  },
  {
    icon: Scale,
    title: "Fair Pricing",
    description: "Professional legal services at reasonable rates with transparent fee structures.",
  },
]

export default function HomePage() {
  const [currentSlogan, setCurrentSlogan] = useState("When Justice Matters, Experience Counts")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCallButton />

      {/* Hero Section with Carousel */}
      <HeroCarousel onSloganChange={setCurrentSlogan} />

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100} className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-stone-50">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection key={currentSlogan} className="text-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Scale className="w-10 h-10 md:w-12 md:h-12 text-amber-700 flex-shrink-0" />
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground italic leading-tight">
                "{currentSlogan}"
              </h2>
              <Scale className="w-10 h-10 md:w-12 md:h-12 text-amber-700 flex-shrink-0" />
            </div>
            <p className="text-muted-foreground text-lg md:text-xl">
              Don't wait to protect your rights. I am ready to provide you with the legal representation you deserve.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/owner.png"
                    alt="Satheesan Kumarasamy"
                    width={600}
                    height={700}
                    className="object-cover object-top w-full h-[500px]"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-2xl -z-0" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-0" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-6 shadow-md">
                About Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experienced Legal <br />Professional at Your Service
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a Bachelor of Science in Biology, Bachelor of Arts in Political Science with Honours, 
                and Master of Arts in Integrated Studies with specialization in Political Science, 
                Satheesan Kumarasamy brings a unique analytical perspective to legal matters.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Furthering his studies with a Paralegal Advocate Diploma and Alternate Dispute Resolution 
                Certificate (ADR), Kumarasamy is proficient in mediation and dedicated to achieving the 
                best outcomes for clients.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="flex items-center gap-2">
                    Licensed by <img src="/images/lawon.png" alt="Law Society of Ontario" className="h-6 w-auto" />
                  </span>
                </li>
                {[
                  "Alternate Dispute Resolution Certified",
                  "Years of hands-on legal experience",
                  "Dedicated to affordable legal services",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-6 shadow-md">
              Our Services
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Comprehensive Legal Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer a wide range of legal services to individuals and businesses throughout 
              the GTA, Peel, York, Durham, and surrounding areas.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-6 shadow-md">
                Why Choose Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Dedicated to Achieving <br />the Best Results
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We know that running your own business can be time consuming so let us take care 
                of all your legal matters. Our commitment is to provide professional services 
                while ensuring you receive the personal attention your case deserves.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <AnimatedSection key={feature.title} delay={index * 100}>
                    <div className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/consultation.jpg"
                  alt="Legal consultation"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-primary-foreground text-lg font-medium mb-2">
                    Ready to discuss your case?
                  </p>
                  <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link href="/book-consultation">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Get the Legal Help <br />You Deserve Today
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="text-lg text-white/80 mb-8">
                Don&apos;t navigate the legal system alone. Our experienced team is ready to 
                provide the professional representation you need.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="/book-consultation">
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
                  <a href="tel:4167237387">
                    Call (416) 723-7387
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-bold mb-6 shadow-md">
              Watch Our Introduction
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Learn More About Our Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Watch this video to understand how we can help you with your legal matters.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
                <video
                  controls
                  className="w-full h-full"
                  poster="/images/video-poster.jpg"
                >
                  <source src="/video 1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
