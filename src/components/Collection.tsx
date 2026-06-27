"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { products, collectionTitle, collectionSub, collectionDesc } from "@/data/content"

function ProductCard({
  product,
  i,
  span,
}: {
  product: (typeof products)[0]
  i: number
  span?: boolean
}) {
  const [hovered, setHovered] = useState(false)

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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group cursor-pointer ${span ? "sm:col-span-2" : ""}`}
    >
      <div
        className={`relative mb-4 w-full overflow-hidden ${
          span ? "aspect-[5/4]" : "aspect-[3/4]"
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <img
          src={product.hoverImage}
          alt={product.name}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
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

        {product.featured && (
          <div className="absolute right-3 top-3">
            <span className="inline-block bg-accent/90 px-3 py-1 text-[10px] tracking-[0.15em] text-white">
              DESTACADO
            </span>
          </div>
        )}
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium tracking-wide">{product.name}</h3>
          <p className="mt-1 text-sm text-charcoal/60">{product.price}</p>
        </div>
        <span className="mt-0.5 text-[11px] tracking-wide text-charcoal/30">
          ★ {product.rating}
        </span>
      </div>

      <div className="mt-3 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {product.colors.map((color, ci) => (
          <span
            key={ci}
            className="block h-3 w-3 rounded-full border border-charcoal/10"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
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
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-sm tracking-[0.3em] text-charcoal/40">
            {collectionSub}
          </p>
          <h2 className="mb-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            {collectionTitle}
          </h2>
          <p className="text-base leading-relaxed text-charcoal/50">
            {collectionDesc}
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard product={products[0]} i={0} span />
          <ProductCard product={products[1]} i={1} />
          <ProductCard product={products[4]} i={4} />
          <ProductCard product={products[2]} i={2} />
          <ProductCard product={products[3]} i={3} span />
          <ProductCard product={products[5]} i={5} />
        </div>
      </div>
    </section>
  )
}
