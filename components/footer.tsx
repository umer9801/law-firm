import Link from "next/link"
import { Scale, Phone, Mail, MapPin, Clock } from "lucide-react"

const services = [
  { name: "Motor Vehicle Accidents", href: "/services#mva" },
  { name: "WSIB / Disability", href: "/services#wsib" },
  { name: "Traffic Violations", href: "/services#traffic" },
  { name: "Small Claims", href: "/services#small-claims" },
  { name: "Landlord & Tenant", href: "/services#landlord-tenant" },
  { name: "Criminal Pardons", href: "/services#pardons" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "For Lawyers", href: "/services-for-lawyers" },
  { name: "Contact", href: "/contact" },
  { name: "Book Consultation", href: "/book-consultation" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex items-center justify-center">
                <img src="/images/logo.png" alt="Prudential Legal Services" className="w-full h-full object-contain" />
              </div>
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              A fully licensed firm offering knowledgeable and qualified legal advice and representation at reasonable rates.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 opacity-60" />
              <span className="opacity-80">Mon - Fri: 9:00 AM - 5:00 PM</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:4167237387" className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>(416) 723-7387</span>
                </a>
              </li>
              <li>
                <a href="tel:9052320213" className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Fax: (905) 232-0213</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@prudentiallegal.ca" className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>info@prudentiallegal.ca</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm opacity-80">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>120 Traders Blvd East, Unit 202<br />Mississauga, ON L4Z 2H7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Prudential Legal Services. All Rights Reserved.
            </p>
            <p className="text-xs opacity-60 text-center md:text-right max-w-xl">
              Member of the Law Society of Ontario. Licensed Paralegal.
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs opacity-60">
              Designed by <a href="http://www.solvixcore.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity underline">Solvix Core</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
