import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Users,
  CheckCircle,
  Target,
  Heart,
  Scale
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Prudential Legal Services",
  description: "Learn about Satheesan Kumarasamy and Prudential Legal Services. Licensed paralegal with extensive education and experience serving clients in Ontario.",
}

const credentials = [
  {
    icon: GraduationCap,
    title: "Bachelor of Science",
    description: "Biology (Natural Science)",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Arts",
    description: "Political Science with Honours",
  },
  {
    icon: GraduationCap,
    title: "Master of Arts",
    description: "Integrated Studies - Political Science Specialization",
  },
  {
    icon: Award,
    title: "Paralegal Advocate Diploma",
    description: "Licensed Paralegal Training",
  },
  {
    icon: Award,
    title: "ADR Certificate",
    description: "Alternate Dispute Resolution",
  },
  {
    icon: Scale,
    title: "Law Society Member",
    description: "Member of the Law Society of Ontario",
  },
]

const values = [
  {
    icon: Target,
    title: "Professional Excellence",
    description: "We maintain the highest standards of professional conduct and legal expertise in all our services.",
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    description: "Every client receives personalized attention and tailored solutions for their unique legal needs.",
  },
  {
    icon: Heart,
    title: "Commitment to Justice",
    description: "We are dedicated to ensuring our clients receive fair treatment and the best possible outcomes.",
  },
  {
    icon: Scale,
    title: "Affordable Access",
    description: "Professional legal services at reasonable rates, making justice accessible to everyone.",
  },
]

const timeline = [
  {
    year: "Education",
    title: "Academic Foundation",
    description: "Completed Bachelor of Science in Biology, Bachelor of Arts in Political Science with Honours, and Master of Arts in Integrated Studies.",
  },
  {
    year: "Training",
    title: "Legal Education",
    description: "Obtained Paralegal Advocate Diploma and Alternate Dispute Resolution Certificate (ADR).",
  },
  {
    year: "Experience",
    title: "Professional Development",
    description: "Gained extensive hands-on experience at the Allyce Law Office, one of Durham Region's most reputed and established law offices.",
  },
  {
    year: "Present",
    title: "Prudential Legal Services",
    description: "Established Prudential Legal Services to provide professional, affordable legal representation to individuals and businesses.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Prudential Legal Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Dedicated to Your <br />Legal Success
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Prudential Legal Services is a fully licensed firm that offers its clients 
              knowledgeable and qualified legal advice and representation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main About Section */}
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
                    className="object-cover w-full h-[600px]"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-2xl -z-0" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-0" />

                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-card p-6 rounded-xl shadow-xl z-20">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    Satheesan Kumarasamy
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    BSc, BA (Hons), MA
                  </p>
                  <p className="text-sm text-secondary font-medium">
                    Licensed Paralegal - Member of the Law Society of Ontario
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experience & Education Combined
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Prudential Legal Services has gained its experience and knowledge through many years 
                of education, hard work, and hands-on experience working in one of Durham Region&apos;s 
                most reputed and established law office, the Allyce Law Office.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Having received a Bachelor of Science - Biology (Natural Science) and Bachelor of 
                Arts in Political Science with Honours, and Master of Arts in Integrated Studies 
                degrees with specialization in Political Science, Satheesan Kumarasamy then furthered 
                his studies to obtain a Paralegal - Advocate Diploma.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Acquiring his diploma, Kumarasamy was also able to obtain an Alternate Dispute 
                Resolution Certificate (ADR) making him proficient in assisting in matters of mediation.
              </p>

              <div className="p-6 bg-muted rounded-xl">
                <p className="text-foreground font-medium italic">
                  &quot;Along with providing clients with professional services, Prudential Legal Services 
                  strives to assist small businesses by providing them with reliable legal representation 
                  in all of their on-going matters. We know that running your own business can be time 
                  consuming so let us take care of all your legal matters.&quot;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Credentials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Education & Certifications
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A strong foundation of education and professional certifications ensures 
              the highest quality of legal representation.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <AnimatedSection key={credential.title} delay={index * 100}>
                <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{credential.title}</h3>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Excellence
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 150}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background md:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              What Drives Us
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              Our commitment to these core values ensures that every client receives 
              the exceptional service they deserve.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20 h-full">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/consultation.jpg"
                  alt="Legal consultation"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Discuss <br />Your Legal Needs?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you&apos;re facing a traffic violation, workplace injury, or any other legal 
                matter, we&apos;re here to help. Book a consultation today and let us guide you 
                through the legal process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/book-consultation">
                    Book Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">View Our Services</Link>
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
