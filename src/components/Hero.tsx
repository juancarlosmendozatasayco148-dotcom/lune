"use client"

import { motion } from "framer-motion"
import { site } from "@/data/content"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const textVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0, 1] as const },
  },
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-charcoal">
      {/* Left: Text */}
      <div className="relative z-10 flex w-full items-center lg:w-1/2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-xl px-6 lg:px-12"
        >
          <motion.p
            variants={textVariants}
            className="mb-6 text-sm tracking-[0.3em] text-accent-light"
          >
            {site.tagline}
          </motion.p>

          <motion.h1
            variants={textVariants}
            className="font-display text-6xl leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="mt-6 max-w-sm text-base leading-relaxed text-white/50"
          >
            {site.description}
          </motion.p>

          <motion.div
            variants={textVariants}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="#collection"
              className="rounded-full bg-white px-8 py-3 text-sm font-medium tracking-wider text-charcoal transition-all hover:bg-white/90"
            >
              Explorar Colección
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/25 px-8 py-3 text-sm tracking-wider text-white/80 transition-colors hover:border-white/60 hover:text-white"
            >
              Nuestra Esencia
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right: Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1] }}
        className="relative hidden w-1/2 lg:block"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1400&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/40 to-transparent" />
      </motion.div>

      {/* Mobile image (below text on small screens) */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
        className="relative h-80 w-full overflow-hidden lg:hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-white/25">
            DESCUBRE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-white/25"
          />
        </div>
      </motion.div>
    </section>
  )
}
