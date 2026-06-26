"use client"

import { motion } from "framer-motion"
import { features } from "@/data/content"

export default function Features() {
  return (
    <section id="features" className="bg-charcoal px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] as const }}
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
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0, 1] as const,
              }}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="mb-4 font-display text-3xl text-white">
                  {feature.title}
                </h3>
                <p className="max-w-md leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1 overflow-hidden">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center grayscale transition-all duration-700 hover:grayscale-0"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
