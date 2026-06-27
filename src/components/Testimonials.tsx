"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/data/content"

const initials = ["MG", "CM", "AS"]
const bgColors = ["bg-accent", "bg-charcoal/80", "bg-accent-light"]

function TestimonialCard({
  t,
  i,
}: {
  t: (typeof testimonials)[0]
  i: number
}) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="relative flex flex-col border border-charcoal/10 bg-white p-10 transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

      <span className="absolute right-6 top-4 font-display text-7xl leading-none text-charcoal/5">
        &ldquo;
      </span>

      <div
        className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium tracking-wider text-white ${bgColors[i]}`}
      >
        {initials[i]}
      </div>

      <p className="flex-1 leading-relaxed text-charcoal/70">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="mt-4 flex gap-0.5">
        {[...Array(5)].map((_, s) => (
          <svg
            key={s}
            className={`h-4 w-4 ${s < 4 ? "text-accent" : "text-charcoal/10"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <footer className="mt-6">
        <cite className="not-italic">
          <span className="block font-medium tracking-wide">{t.name}</span>
          <span className="mt-1 block text-sm text-charcoal/40">{t.role}</span>
        </cite>
      </footer>
    </motion.blockquote>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-warm px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-charcoal/40">VOCES</p>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Lo que dicen
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
