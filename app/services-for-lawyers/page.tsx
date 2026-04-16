import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  FileText, 
  Users, 
  Globe, 
  Building2,
  Gavel,
  Home,
  Scale,
  CheckCircle,
  MapPin,
  Clock,
  Banknote
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services for Lawyers | Prudential Legal Services",
  description: "Agent services for lawyers in GTA, Peel, York, Durham. Court filing, document processing, client referrals, translation services, and more.",
}

const services = [
  {
    icon: Gavel,
    title: "Court Attendance",
    description: "We attend court houses as your agent for various matters, saving you time and travel expenses.",
  },
  {
    icon: FileText,
    title: "Document Filing",
    description: "Assist with filing Family, Civil, or Criminal documents at court houses in Durham, Peel, and GTA.",
  },
  {
    icon: Users,
    title: "Client Referrals",
    description: "We refer clients to specialized lawyers and help with translation and interviewing clients.",
  },
  {
    icon: Globe,
    title: "Translation Services",
    description: "Assist with translating documents and interviewing clients in multiple languages.",
  },
]

const practiceAreas = [
  { icon: Globe, title: "Immigration", available: true },
  { icon: Users, title: "Family Law", available: true },
  { icon: Gavel, title: "Criminal Law", available: true },
  { icon: Home, title: "Real Estate & Wills", available: true },
]

const benefits = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Offices located in Durham and Peel regions, only minutes away from Court Houses in Durham, Peel, and GTA.",
  },
  {
    icon: Clock,
    title: "Time Savings",
    description: "Save time by having us handle court appearances and document filings on your behalf.",
  },
  {
    icon: Banknote,
    title: "Minimal Fees",
    description: "We charge lawyers a minimal fee to attend as your Agent, making our services cost-effective.",
  },
  {
    icon: CheckCircle,
    title: "Reliable Service",
    description: "Professional and dependable agent services you can count on for your clients.",
  },
]

export default function ServicesForLawyersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/courthouse.jpg"
            alt="Services for lawyers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              For Legal Professionals
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Services for Lawyers
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Prudential Legal Services is specifically designed to assist lawyers in GTA, 
              Peel, York, Durham, and surrounding areas with agent services and more.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/services-bg.jpg"
                  alt="Professional legal services"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                Partner With Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Legal Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since our offices are located in Durham and Peel regions and only minutes away 
                from Court Houses in Durham, Peel, and GTA, we charge lawyers a minimal fee to 
                attend as your Agent.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Further, since we can attend court houses, we can assist lawyers with filing any 
                Family, Civil, or Criminal documents. You will be able to save time and money by 
                contacting Prudential Legal Services to take care of any filing that you might have.
              </p>

              <div className="p-6 bg-muted rounded-xl">
                <p className="text-foreground font-medium">
                  If you wish to avail the services of a prominent lawyer, G. D. Wiseman, who is 
                  specialized in Immigration, please contact our office.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Agent Services
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide a comprehensive range of agent services to help lawyers manage their 
              caseload more efficiently.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                Why Choose Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits of Working With Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Partner with Prudential Legal Services and enjoy the convenience of having a 
                reliable agent to handle your court appearances and document filings.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <AnimatedSection key={benefit.title} delay={index * 100}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/consultation.jpg"
                    alt="Legal consultation"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-secondary/20 rounded-2xl -z-0" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              Referral Network
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Practice Areas for Referrals
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              We also assist lawyers in the following matters such as referring clients, 
              with translation and interviewing clients.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {practiceAreas.map((area, index) => (
              <AnimatedSection key={area.title} delay={index * 100}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">{area.title}</h3>
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">
                    Referrals Available
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-xl border border-primary-foreground/20 max-w-2xl mx-auto">
              <p className="text-primary-foreground mb-4">
                Lawyers specializing in other areas are welcome to contact us. We will be 
                working with only one lawyer for each area of practice.
              </p>
              <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/contact">
                  Contact Us to Partner
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Contact Prudential Legal Services today to discuss how we can assist you with 
              agent services, document filing, and more. Save time and money while providing 
              excellent service to your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:4167237387">Call (416) 723-7387</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
