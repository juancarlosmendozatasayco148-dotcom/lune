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
      className={`flex flex-col gap-8 lg:flex-row lg:gap-16 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="flex-1 overflow-hidden"
      >
        <div className="aspect-[4/3] w-full">
          <img
            src={feature.image}
            alt={feature.title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex flex-1 flex-col justify-center"
      >
        <div className="bg-white p-6 lg:p-10">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mb-5 h-px w-10 origin-left bg-accent/60"
          />
          <span className="mb-2 block font-display text-xs tracking-[0.2em] text-accent uppercase">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl text-charcoal lg:text-3xl">
            {feature.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/60 lg:text-base">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="bg-warm px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 lg:mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-px w-8 origin-left bg-accent/60"
            />
            <p className="text-sm tracking-[0.3em] text-charcoal/40">
              NUESTRA ESENCIA
            </p>
          </div>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-charcoal sm:text-5xl">
            Hecho con intención
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {features.map((feature, i) => (
            <FeatureRow key={feature.title} feature={feature} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
