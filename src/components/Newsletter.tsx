"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { site } from "@/data/content"

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <section id="newsletter" className="relative overflow-hidden bg-charcoal px-6 py-32 lg:px-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-white/10"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-white/30">
            MANTENTE AL TANTO
          </p>
          <h2 className="mb-6 font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
            Únete a {site.name}
          </h2>
          <p className="mx-auto mb-10 max-w-sm text-white/50">
            Sé el primero en conocer nuevas colecciones, ediciones limitadas y
            eventos exclusivos.
          </p>
        </motion.div>

        {subscribed ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-white/80">¡Gracias por suscribirte!</span>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md gap-3"
          >
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 border-b border-white/20 bg-transparent px-2 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:border-accent focus:outline-none"
              required
            />
            <button
              type="submit"
              className="relative overflow-hidden whitespace-nowrap rounded-full bg-white px-8 py-3 text-sm font-medium tracking-wider text-charcoal transition-all hover:bg-white/90"
            >
              Suscribirse
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}
