"use client"

import { motion } from "framer-motion"
import { site } from "@/data/content"

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-charcoal px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] as const }}
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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.1, 0, 1] as const,
          }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto flex max-w-md gap-3"
        >
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-1 border-b border-white/20 bg-transparent px-2 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
            required
          />
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-white px-8 py-3 text-sm font-medium tracking-wider text-charcoal transition-all hover:bg-white/90"
          >
            Suscribirse
          </button>
        </motion.form>
      </div>
    </section>
  )
}
