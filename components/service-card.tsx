"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  className?: string
}

export function ServiceCard({ title, description, image, href, className }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border",
        "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}
