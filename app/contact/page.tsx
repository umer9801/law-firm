"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCallButton } from "@/components/floating-call-button"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Send
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(416) 723-7387",
    href: "tel:4167237387",
  },
  {
    icon: Phone,
    title: "Fax",
    content: "(1-866) 930-3888",
    href: "tel:18669303888",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@prudentiallegalservices.com",
    href: "mailto:info@prudentiallegalservices.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "9300 Goreway Drive, Suite 205\nBrampton, ON L6P 4N1",
    href: "https://maps.google.com/?q=9300+Goreway+Drive+Suite+205+Brampton+ON+L6P+4N1",
  },
]

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 5:00 PM" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <FloatingCallButton />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Message Sent Successfully
              </h1>
              <p className="text-muted-foreground mb-8">
                Thank you for contacting us. We will get back to you within 24 hours.
              </p>
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingCallButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Contact Prudential Legal Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              We&apos;re here to help with your legal needs. Reach out to us today for a 
              consultation or any questions you may have.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 100}>
                <a
                  href={info.href}
                  target={info.title === "Address" ? "_blank" : undefined}
                  rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-6 bg-muted rounded-xl hover:bg-muted/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">{info.title}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                Send a Message
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Contact Form
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible. 
                For urgent matters, please call us directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(416) 123-4567"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please describe your legal matter..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </AnimatedSection>

            {/* Map & Hours */}
            <AnimatedSection direction="right">
              <div className="space-y-8">
                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] lg:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.8!2d-79.7!3d43.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9300%20Goreway%20Dr%2C%20Brampton%2C%20ON%20L6P%204N1!5e0!3m2!1sen!2sca!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prudential Legal Services Location"
                  />
                </div>

                {/* Office Hours */}
                <div className="bg-card p-8 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                        <span className="text-foreground font-medium">{item.day}</span>
                        <span className="text-muted-foreground">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-primary p-8 rounded-2xl">
                  <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    For urgent legal matters, call us directly. We&apos;re here to help.
                  </p>
                  <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <a href="tel:4167237387">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (416) 723-7387
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Prefer to Schedule a Consultation?
            </h2>
            <p className="text-muted-foreground mb-6">
              Book a convenient time to discuss your legal matters in detail.
            </p>
            <Button asChild size="lg">
              <Link href="/book-consultation">
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
