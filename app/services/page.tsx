import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Car, 
  HardHat, 
  TrafficCone, 
  Building2, 
  Home, 
  FileText,
  Scale,
  ShieldCheck,
  AlertTriangle,
  CheckCircle
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal Services | Prudential Legal Services",
  description: "Comprehensive legal services including motor vehicle accidents, WSIB claims, traffic violations, small claims court, landlord tenant matters, and criminal pardons.",
}

const services = [
  {
    id: "mva",
    icon: Car,
    title: "Motor Vehicle Accident Claims (SABS)",
    shortDesc: "Expert representation for all types of motor vehicle accident claims.",
    description: `Motor vehicle accidents, bicycle accidents, pedestrian - car accidents, and any other type of motor vehicle accidents can have long lasting and devastating financial, social, emotional, and psychological consequences for the injured person and their family. If you have been injured in a motor vehicle accident, you should obtain legal advice and understand your legal rights and interests.

Motor Vehicle Accidents (MVAs) are some of the most costly and traumatic events to the average Ontarian. After an MVA, there are important legal rights and obligations anyone involved should be aware of. If this is your first MVA, it is important you contact our office to assist you with the legal process.`,
    highlight: "We provide all these services on a contingent basis, meaning you will only pay when you get paid.",
    image: "/images/mv.webp",
  },
  {
    id: "wsib",
    icon: HardHat,
    title: "WSIB / Disability",
    shortDesc: "Comprehensive support for workplace injury claims and disability benefits.",
    description: `Work related injuries can be some of the most important cases the firm deals with, as these cases often affect the way people earn a living, either as an employer or injured worker. Prudential Legal Services has developed a comprehensive program for both the employer and the employee in WSIB injury case management.

We represent employers and injured workers at tribunals; negotiate for clients at mediation or arbitration, file WSIB claims, and educate businesses on how to effectively and efficiently manage WSIB claims.`,
    benefits: [
      "Benefit for Loss of Earnings (LOE)",
      "Benefit for Non-Economic Loss (NEL)",
      "Loss of Retirement Income (LRI) Benefit",
      "Benefit for Future Economic Loss (FEL)",
      "Health Care Benefits",
      "Health Care Equipment and Supplies",
      "Labour Market Re-entry",
    ],
    image: "/images/services-bg.jpg",
  },
  {
    id: "provincial",
    icon: Scale,
    title: "Provincial Offences",
    shortDesc: "Defense against charges under various provincial acts and regulations.",
    description: "Prudential Legal Services is able to represent individuals and corporations who are charged under various provincial acts. Charges under these Acts can be expensive and lead to lengthy amounts of time in court. Having an experienced representative assist you can cause you less stress and lead to a better outcome.",
    acts: [
      "Highway Traffic Act",
      "Compulsory Automobile Insurance Act",
      "Liquor License Act",
      "Trespass to Property Act",
      "Environmental Protection Act",
      "Occupational Health and Safety Act",
      "Blind Persons Rights Act",
      "Municipal By-Laws",
    ],
    image: "/images/courthouse.jpg",
  },
  {
    id: "traffic",
    icon: TrafficCone,
    title: "Traffic Violations",
    shortDesc: "Professional defense against speeding tickets, red light violations, and more.",
    description: `We understand that fighting a traffic ticket can be time consuming, frustrating, and confusing.

Prudential Legal Services treats every individual traffic violation case as unique and provides expert and professional services to assist you in relieving those stresses. While traffic violations such as speeding tickets, going through red lights, or improper turns may not lead to imprisonment, paying the fine is the equivalent to admitting guilt.

This can result in demerit points on your driving record and your insurance company will be notified. It is in your best interest for the long run to fight your traffic ticket.`,
    image: "/images/traffic.jpg",
  },
  {
    id: "slip-fall",
    icon: AlertTriangle,
    title: "Slip & Falls",
    shortDesc: "Legal representation for slip and fall injury claims.",
    description: `One of the most neglected legal fields in Ontario is Slip and Fall cases. Many Ontarians do not realize or exercise the legal rights awarded to them by the judicial system.

The manager of an establishment or building has a legal obligation to maintain a safe environment. The harm that could occur in these situations should not be underestimated.

Easily prevented Slip and Falls can leave a victim unable to work or with a permanent injury. That's why Prudential Legal Services has created services to help clients determine liability, file claims with third parties, and negotiate quick settlements, or even represent a client in court, if need be.`,
    highlight: "As there are very strict timelines and regulations on slip and fall claims, I urge you to contact us immediately after the fall to get legal advice.",
    image: "/images/slip.webp",
  },
  {
    id: "small-claims",
    icon: FileText,
    title: "Small Claims Court",
    shortDesc: "Representation for claims up to $25,000 in Small Claims Court matters.",
    description: `Prudential Legal Services specializes also in Small Claims Court matters for the payment of money or recovery of possession of personal property where the amount claimed is $25,000 or less.

Procedures and documents can be confusing and time consuming for someone who does not have experience in Small Claims Court. Prudential Legal Services works with clients to develop solutions at reasonable rates.`,
    image: "/images/smallclaims.jpg",
  },
  {
    id: "landlord-tenant",
    icon: Home,
    title: "Landlord & Tenant",
    shortDesc: "Expert advice and representation at the Ontario Landlord and Tenant Board.",
    description: `Prudential Legal Services offers its expert legal advice in all types of Landlord and Tenant matters including representation at the Ontario Landlord and Tenant Board.

We will work with you for everything from filing applications, mediating settlements, and obtaining judgments.

We highly recommend that you consult with a knowledgeable and experienced representative before presenting your case to the Board in order to ensure that you are familiarized with all the processes involved.`,
    image: "/images/landlord.jpg",
  },
  {
    id: "pardons",
    icon: ShieldCheck,
    title: "Criminal Pardons",
    shortDesc: "Assistance with Criminal Pardon applications to clear your record.",
    description: `A criminal record can become an obstacle in one's life in regards to employment opportunities, promotions, adoption, travelling, education, and child custody.

Prudential Legal Services assists those who have completed their sentence including fines, restitution and/or compensation, and are looking for a Criminal Pardon in order to clear their criminal record.

Applying for a Criminal Pardon can be time consuming and confusing if you are unfamiliar with the processes and documentation.

We will take away all the burden and confusion by completing and obtaining all documents necessary to obtain a clear Criminal Pardon.`,
    image: "/images/criminal.jpg",
  },
  {
    id: "criminal",
    icon: Scale,
    title: "Criminal Code Offences (Summary Conviction)",
    shortDesc: "Representation for minor criminal code offences.",
    description: "Prudential Legal Services can also represent minor criminal code offences with a maximum penalty of a $2,000 fine or imprisonment to a maximum of 6 months, or both.",
    offences: [
      "Indecent acts, public nudity, prostitution",
      "Causing disturbance, vagrancy, cruelty to animals",
      "Assault, possession of a weapon, mischief regarding property",
      "Theft under $5,000 or possession of stolen property under $5,000",
      "Fraud, forgery, making false statements",
    ],
    image: "/images/hehe.webp",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-bg.jpg"
            alt="Legal services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive Legal Services
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              We offer a wide range of legal services to individuals and businesses throughout 
              the GTA, Peel, York, Durham, and surrounding areas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Quick Nav */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-30 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20 transition-colors whitespace-nowrap"
              >
                <service.icon className="w-4 h-4" />
                {service.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-40"
              >
                <AnimatedSection delay={100}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-[350px]"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-secondary-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <div className="prose prose-muted max-w-none mb-6">
                      {service.description.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {service.highlight && (
                      <div className="p-4 bg-secondary/10 border-l-4 border-secondary rounded-r-lg mb-6">
                        <p className="text-foreground font-medium">{service.highlight}</p>
                      </div>
                    )}

                    {service.benefits && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-foreground mb-3">Benefits Include:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.acts && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-foreground mb-3">Acts We Cover:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.acts.map((act) => (
                            <li key={act} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.offences && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-foreground mb-3">Offences Include:</h3>
                        <ul className="space-y-2">
                          {service.offences.map((offence) => (
                            <li key={offence} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                              {offence}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button asChild>
                      <Link href="/book-consultation">
                        Get Help With {service.title.split(" ")[0]}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-muted-foreground text-center max-w-4xl mx-auto">
            All preceding information is for general information only and should not be construed as 
            comprehensive, complete, or as a substitute to legal advice. Please contact a legal 
            professional for a consultation to be aware of your complete legal rights and obligations.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Contact us today for a free consultation and let us help you navigate your legal matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/book-consultation">
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
