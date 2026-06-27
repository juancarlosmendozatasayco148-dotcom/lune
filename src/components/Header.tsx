"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { navLinks, site } from "@/data/content"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60)
  })

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-warm/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a
          href="#"
          className={`text-sm font-medium tracking-[0.25em] transition-colors duration-500 ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wider transition-colors duration-500 ${
                scrolled
                  ? "text-charcoal/60 hover:text-charcoal"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#newsletter"
            className={`rounded-full border px-6 py-2 text-sm tracking-wider transition-all duration-500 ${
              scrolled
                ? "border-charcoal/20 text-charcoal/80 hover:border-charcoal hover:bg-charcoal hover:text-warm"
                : "border-white/25 text-white/80 hover:border-white hover:bg-white hover:text-charcoal"
            }`}
          >
            Contacto
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative h-6 w-6 md:hidden"
          aria-label="Menú"
        >
          <span
            className={`absolute top-1 left-0 h-px w-full transition-all duration-500 ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${isOpen ? "top-1/2 rotate-45" : ""}`}
          />
          <span
            className={`absolute top-1/2 left-0 h-px w-full transition-all duration-500 ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute bottom-1 left-0 h-px w-full transition-all duration-500 ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${isOpen ? "top-1/2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-charcoal/10 bg-warm md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm tracking-wider text-charcoal/60 transition-colors hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-block rounded-full border border-charcoal/20 px-6 py-2 text-sm tracking-wider text-charcoal"
            >
              Contacto
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
