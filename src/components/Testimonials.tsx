"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/data/content"

const initials = ["MG", "CM", "AS"]
const bgColors = ["bg-accent", "bg-charcoal/80", "bg-accent-light"]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-warm px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] as const }}
          className="mb-16"
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-charcoal/40">
            VOCES
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Lo que dicen
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0, 1] as const,
              }}
              className="flex flex-col rounded-none border border-charcoal/10 bg-white p-10"
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium tracking-wider text-white ${bgColors[i]}`}
              >
                {initials[i]}
              </div>
              <p className="flex-1 leading-relaxed text-charcoal/70">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="mt-8">
                <cite className="not-italic">
                  <span className="block font-medium tracking-wide">
                    {t.name}
                  </span>
                  <span className="mt-1 block text-sm text-charcoal/40">
                    {t.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
