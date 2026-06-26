"use client"

import { motion } from "framer-motion"
import { products } from "@/data/content"

export default function Collection() {
  return (
    <section id="collection" className="bg-warm px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] as const }}
          className="mb-16"
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-charcoal/40">
            COLECCIÓN OTOÑO 2026
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Piezas esenciales
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.a
              key={product.id}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0, 1] as const,
              }}
              className="group cursor-pointer"
            >
              <div className="relative mb-5 aspect-[3/4] w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/10" />
              </div>
              <p className="mb-1 text-xs tracking-[0.2em] text-charcoal/40">
                {product.category}
              </p>
              <h3 className="font-medium tracking-wide">{product.name}</h3>
              <p className="mt-1 text-sm text-charcoal/60">{product.price}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
