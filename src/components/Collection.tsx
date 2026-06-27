"use client"

import { motion } from "framer-motion"
import { products } from "@/data/content"

function ProductCard({ product, i }: { product: typeof products[0]; i: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: i * 0.08,
        ease: "easeOut",
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

        <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-charcoal/15" />

        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center bg-warm/90 py-3 transition-transform duration-500 group-hover:translate-y-0">
          <span className="text-xs tracking-[0.2em] text-charcoal">VER MÁS</span>
        </div>

        <div className="absolute left-3 top-3">
          <span className="inline-block bg-white/90 px-3 py-1 text-[10px] tracking-[0.15em] text-charcoal">
            {product.category}
          </span>
        </div>
      </div>
      <h3 className="font-medium tracking-wide">{product.name}</h3>
      <p className="mt-1 text-sm text-charcoal/60">{product.price}</p>
    </motion.a>
  )
}

export default function Collection() {
  return (
    <section id="collection" className="bg-warm px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
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
            <ProductCard key={product.id} product={product} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
