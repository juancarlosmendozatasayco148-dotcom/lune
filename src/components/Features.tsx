"use client"

import { motion } from "framer-motion"
import { features } from "@/data/content"

function FeatureRow({
  feature,
  i,
}: {
  feature: (typeof features)[0]
  i: number
}) {
  const isReversed = i % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative flex flex-col gap-12 lg:flex-row lg:gap-20 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-1 flex-col justify-center">
        <div className="relative pl-8">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute left-0 top-0 w-px origin-top bg-accent/50"
            style={{ bottom: 0 }}
          />

          <motion.span
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-1 block font-display text-6xl leading-none text-white/[0.04]"
          >
            {String(i + 1).padStart(2, "0")}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-display text-3xl text-white"
          >
            {feature.title}
          </motion.h3>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-4 h-px w-14 origin-left bg-accent/70"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-6 max-w-md leading-relaxed text-white/65"
          >
            {feature.description}
          </motion.p>
        </div>
      </div>

      <div className="flex flex-1">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="group relative w-full overflow-hidden"
        >
          <div className="aspect-[4/3] w-full">
            <div className="absolute inset-0 z-10 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/10" />
            <img
              src={feature.image}
              alt={feature.title}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="bg-charcoal px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-px w-8 origin-left bg-accent/60"
            />
            <p className="text-sm tracking-[0.3em] text-white/40">NUESTRA ESENCIA</p>
          </div>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
            Hecho con intención
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {features.map((feature, i) => (
            <FeatureRow key={feature.title} feature={feature} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
