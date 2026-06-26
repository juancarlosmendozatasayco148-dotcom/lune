"use client"

import { site } from "@/data/content"

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-warm px-6 py-16 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div>
          <span className="text-sm tracking-[0.25em] text-charcoal/50">
            {site.name}
          </span>
          <p className="mt-2 text-xs text-charcoal/35">{site.tagline}</p>
        </div>

        <div className="flex gap-10 text-xs tracking-widest text-charcoal/45">
          <a href="#" className="transition-colors hover:text-charcoal">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-charcoal">
            Pinterest
          </a>
        </div>

        <p className="text-[10px] tracking-widest text-charcoal/25">
          &copy; {new Date().getFullYear()} {site.name}.
        </p>
      </div>
    </footer>
  )
}
