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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      }}
      className={`relative flex flex-col items-center gap-12 lg:flex-row ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="relative flex-1 pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/30" />

        <span className="mb-2 block font-display text-5xl text-white/5">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="mb-4 font-display text-3xl text-white">
          {feature.title}
        </h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
          className="max-w-md leading-relaxed text-white/50"
        >
          {feature.description}
        </motion.p>
      </div>

      <div className="flex-1 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
          style={{
            transformOrigin: isReversed ? "right" : "left",
            backgroundImage: `url(${feature.image})`,
          }}
          className="aspect-[4/3] w-full bg-cover bg-center grayscale transition-all duration-700 hover:grayscale-0"
        />
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
          <p className="mb-4 text-sm tracking-[0.3em] text-white/30">
            NUESTRA ESENCIA
          </p>
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
