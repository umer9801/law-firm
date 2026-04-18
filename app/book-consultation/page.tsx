"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  CheckCircle,
  ArrowRight,
  Send,
  Scale
} from "lucide-react"

const services = [
  "Motor Vehicle Accident Claims",
  "WSIB / Disability",
  "Provincial Offences",
  "Traffic Violations",
  "Slip & Falls",
  "Small Claims Court",
  "Landlord & Tenant",
  "Criminal Pardons",
  "Criminal Code Offences",
  "Services for Lawyers",
  "Other",
]

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
]

const benefits = [
  "Free initial consultation to discuss your case",
  "No obligation - just honest legal advice",
  "Flexible scheduling to fit your availability",
  "Confidential and professional environment",
]

export default function BookConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      description: formData.get('description'),
      date: formData.get('date'),
      time: formData.get('time'),
      additional: formData.get('additional'),
    }

    try {
      const response = await fetch('/api/consultation', {
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

        <section className="pt-32 pb-20 lg:pb-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <AnimatedSection>
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Consultation Request Received!
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Thank you for reaching out to Prudential Legal Services. We have received 
                  your consultation request and will contact you within 24 hours to confirm 
                  your appointment.
                </p>
                <div className="bg-muted p-6 rounded-xl mb-8">
                  <p className="text-foreground font-medium mb-2">
                    Need immediate assistance?
                  </p>
                  <a href="tel:4167237387" className="text-secondary hover:underline font-semibold">
                    Call us at (416) 723-7387
                  </a>
                </div>
                <Button asChild>
                  <Link href="/">
                    Return to Home
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </AnimatedSection>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/consultation.jpg"
            alt="Book a consultation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              Book Consultation
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Schedule Your <br />Free Consultation
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Take the first step towards resolving your legal matters. Book a free 
              consultation with our experienced paralegal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit} delay={index * 100}>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                  Consultation Form
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Book Your Appointment
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Please fill out the form below with your details and preferred appointment 
                  time. We&apos;ll confirm your consultation within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="p-6 bg-muted rounded-xl">
                    <h3 className="font-semibold text-foreground mb-4">Personal Information</h3>
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
                          className="h-12 bg-background"
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
                          className="h-12 bg-background"
                        />
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
                          className="h-12 bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(416) 123-4567"
                          required
                          className="h-12 bg-background"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Case Information */}
                  <div className="p-6 bg-muted rounded-xl">
                    <h3 className="font-semibold text-foreground mb-4">Case Information</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-foreground">
                          Type of Legal Matter *
                        </label>
                        <Select required name="service">
                          <SelectTrigger className="h-12 bg-background">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="description" className="text-sm font-medium text-foreground">
                          Brief Description of Your Case *
                        </label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Please provide a brief overview of your legal matter..."
                          required
                          rows={4}
                          className="resize-none bg-background"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="p-6 bg-muted rounded-xl">
                    <h3 className="font-semibold text-foreground mb-4">Preferred Appointment</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium text-foreground">
                          Preferred Date *
                        </label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          required
                          className="h-12 bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="time" className="text-sm font-medium text-foreground">
                          Preferred Time *
                        </label>
                        <Select required name="time">
                          <SelectTrigger className="h-12 bg-background">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time.toLowerCase().replace(/\s+/g, "-")}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * We will contact you to confirm your appointment time. Office hours are 
                      Monday to Friday, 9:00 AM to 5:00 PM.
                    </p>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-2">
                    <label htmlFor="additional" className="text-sm font-medium text-foreground">
                      Additional Information (Optional)
                    </label>
                    <Textarea
                      id="additional"
                      name="additional"
                      placeholder="Any other details you'd like us to know..."
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                    <Calendar className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="right" className="sticky top-28">
                <div className="space-y-6">
                  {/* Contact Card */}
                  <div className="bg-primary p-8 rounded-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                        <Scale className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-primary-foreground">
                          Prudential Legal
                        </h3>
                        <p className="text-xs text-primary-foreground/70">Licensed Paralegal Services</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <a href="tel:4167237387" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        <Phone className="w-5 h-5" />
                        <span>(416) 723-7387</span>
                      </a>
                      <a href="mailto:info@prudentiallegal.ca" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>info@prudentiallegal.ca</span>
                      </a>
                      <div className="flex items-start gap-3 text-primary-foreground/80">
                        <MapPin className="w-5 h-5 mt-0.5" />
                        <span>120 Traders Blvd East, Unit 202<br />Mississauga, ON L4Z 2H7</span>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <a href="tel:4167237387">
                        Call Now
                        <Phone className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>

                  {/* Hours Card */}
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-secondary" />
                      <h3 className="font-semibold text-foreground">Office Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="text-foreground">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="text-foreground">By Appointment</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="text-foreground">Closed</span>
                      </div>
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="bg-muted p-6 rounded-xl">
                    <h3 className="font-semibold text-foreground mb-4">What to Expect</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Confirmation call within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>30-45 minute initial consultation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Clear explanation of your options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Transparent fee discussion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
