"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { features } from "@/data/content"

function FeatureRow({
  feature,
  i,
}: {
  feature: (typeof features)[0]
  i: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })
  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]), {
    stiffness: 50,
    damping: 25,
  })
  const clipX = useSpring(useTransform(scrollYProgress, [0, 0.6], [0, 100]), {
    stiffness: 55,
    damping: 28,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0, 1] as const,
      }}
      className={`relative flex flex-col items-center gap-12 lg:flex-row ${
        i % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="relative flex-1 pl-8">
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-0 w-px bg-accent"
        />

        <span className="mb-2 block font-display text-5xl text-white/5">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="mb-4 font-display text-3xl text-white">
          {feature.title}
        </h3>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md leading-relaxed text-white/50"
        >
          {feature.description}
        </motion.p>
      </div>

      <div className="flex-1 overflow-hidden">
        <motion.div
          style={{
            clipPath: useTransform(clipX, (v) => `polygon(0 0, ${v}% 0, ${v}% 100%, 0 100%)`),
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
            <FeatureRow key={feature.title} feature={feature} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
