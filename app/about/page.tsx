import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCallButton } from "@/components/floating-call-button"
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
    description: (
      <span className="flex items-center gap-2">
        Member of <img src="/images/lawon.png" alt="Law Society of Ontario" className="h-5 w-auto inline-block" />
      </span>
    ),
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
      <FloatingCallButton />

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
                    BSc, BA (Hons), MA, LLM
                  </p>
                  <p className="text-sm text-secondary font-medium mb-3">
                    Notary Public | Licensed Paralegal
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Member of</span>
                    <img src="/images/lawon.png" alt="Law Society of Ontario" className="h-8 w-auto" />
                  </div>
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
                Satheesan Kumarasamy at Prudential Legal Services has gained his experience and knowledge through many years 
                of education, hard work, and hands-on experience working in one of Durham Region&apos;s 
                most reputed and established law office, the Allyce Law Office.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am a licensed paralegal through the Law Society of Ontario. I founded Prudential Legal Services in September 2010, 
                which is a fully licensed firm that offers its clients knowledgeable and qualified legal advice and representation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                After receiving the Bachelor of Science in Biology (Natural Science) and Bachelor of Arts in Political Science with Honours, 
                I entered the Master of Arts in Integrated Studies degree program with specialization in Political Science, then furthered 
                my studies to acquire a Paralegal - Advocate Diploma in the academic year of 2009-2010.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                After acquiring my diploma, I also obtained an Alternate Dispute Resolution Certificate (ADR) making my proficiency in 
                assisting in matters of mediation and conflict resolution. I wrote the LSO exam in August 2010 and successfully passed 
                the first time. I began my PhD studies in the US in Criminal Justice with a specialization in Law and Justice Administration. 
                Further, I commenced my LLM with the specialization in Constitutional Law at Osgoode Hall Law School in 2000 and completed it in 2022.
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
                <div className="group bg-card p-6 rounded-xl border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">{credential.title}</h3>
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
                <div className="group bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl border border-primary-foreground/20 h-full hover:bg-primary-foreground/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2 group-hover:text-white transition-colors">{value.title}</h3>
                  <p className="text-sm text-primary-foreground/70 group-hover:text-primary-foreground/90 transition-colors">{value.description}</p>
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
