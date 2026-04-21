import Link from "next/link"
import { Scale, Phone, Mail, MapPin, Clock, Heart } from "lucide-react"

const services = [
  { name: "SABS", href: "/services#sabs" },
  { name: "Provincial Offences", href: "/services#provincial" },
  { name: "Traffic Violations", href: "/services#traffic" },
  { name: "Slip & Falls", href: "/services#slip-fall" },
  { name: "Small Claims", href: "/services#small-claims" },
  { name: "Landlord & Tenant", href: "/services#landlord-tenant" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "For Lawyers", href: "/services-for-lawyers" },
  { name: "Contact Us", href: "/contact" },
  { name: "Book Consultation", href: "/book-consultation" },
]

export function Footer() {
  return (
    <footer className="relative bg-stone-200 text-stone-800">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" className="fill-slate-800"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Us */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-stone-900 uppercase tracking-wide">Contact Us</h3>
            <ul className="space-y-3 text-sm text-stone-700">
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:4167237387" className="hover:text-stone-900 transition-colors">
                  (416) 723-7387
                </a>
              </li>
              <li>
                <span className="font-medium">Fax:</span>{" "}
                <a href="tel:18669303888" className="hover:text-stone-900 transition-colors">
                  (1-866) 930-3888
                </a>
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:info@prudentiallegalservices.com" className="hover:text-stone-900 transition-colors break-all">
                  info@prudentiallegalservices.com
                </a>
              </li>
              <li className="pt-2">
                <div className="text-stone-700">
                  9300 Goreway Drive<br />
                  Suite 205, Brampton<br />
                  Ontario, Canada L6P 4N1
                </div>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-stone-900 uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Paralegal Services */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-6 text-stone-900 uppercase tracking-wide">Paralegal Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo and Association Logos */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="mb-8">
              <img src="/images/logo.png" alt="Prudential Legal Services" className="h-24 w-auto" />
            </div>
            <div className="flex flex-col gap-4">
              <a href="https://lso.ca" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <img src="/images/lawon.png" alt="Law Society of Ontario" className="h-10 w-auto" />
              </a>
              <a href="https://www.ontarioparalegalassociation.com" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <img src="/images/opalogo.png" alt="Ontario Paralegal Association" className="h-10 w-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-600 text-center md:text-left">
            © 2026 Prudential Legal Services. All Rights Reserved.
          </p>
          <p className="text-xs text-stone-500 flex items-center gap-1">
            Designed with <Heart className="w-3 h-3 text-red-500" /> by{" "}
            <a 
              href="https://www.solvixcore.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-700 transition-colors underline"
            >
              Solvix Core
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
