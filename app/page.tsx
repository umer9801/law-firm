import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { 
  Scale, 
  Shield, 
  Users, 
  Award, 
  Phone, 
  ArrowRight,
  CheckCircle,
  Car,
  Gavel,
  Building2,
  FileText,
  Home as HomeIcon
} from "lucide-react"

const services = [
  {
    title: "Motor Vehicle Accidents",
    description: "Expert representation for all types of motor vehicle accident claims including SABS benefits.",
    image: "/images/mv.webp",
    href: "/services#mva",
  },
  {
    title: "WSIB / Disability",
    description: "Comprehensive support for workplace injury claims and disability benefits.",
    image: "/images/services-bg.jpg",
    href: "/services#wsib",
  },
  {
    title: "Traffic Violations",
    description: "Professional defense against speeding tickets, red light violations, and more.",
    image: "/images/traffic.jpg",
    href: "/services#traffic",
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
  {
    title: "Provincial Offences",
    description: "Defense against charges under the Highway Traffic Act and other provincial laws.",
    image: "/images/courthouse.jpg",
    href: "/services#provincial",
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
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Professional legal office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <AnimatedSection delay={100}>
              <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
                Licensed Paralegal Services in Ontario
              </span>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Trusted Legal <br />
                <span className="text-secondary">Representation</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
                Prudential Legal Services is a fully licensed firm offering knowledgeable 
                and qualified legal advice and representation at reasonable rates.
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

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
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-2xl -z-0" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-0" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
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
                {[
                  "Member of the Law Society of Ontario",
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
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
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
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
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
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
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
      <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Get the Legal Help <br />You Deserve Today
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <p className="text-lg text-primary-foreground/80 mb-8">
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
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <a href="tel:4167237387">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (416) 723-7387
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
