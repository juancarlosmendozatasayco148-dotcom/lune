"use client"

import { motion } from "framer-motion"
import { marqueeItems } from "@/data/content"

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <section className="overflow-hidden border-y border-charcoal/5 bg-warm py-8">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex w-max gap-16"
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-3xl tracking-[0.15em] text-charcoal/30 sm:text-4xl"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
