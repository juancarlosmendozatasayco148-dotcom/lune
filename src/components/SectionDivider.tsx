"use client"

import { motion } from "framer-motion"

export default function SectionDivider() {
  return (
    <div className="relative h-24 bg-warm">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="0.5"
            d="M0,48 C360,96 1080,0 1440,48"
          />
        </svg>
      </div>
    </div>
  )
}
