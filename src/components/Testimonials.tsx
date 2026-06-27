"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { testimonials, testimonialImage } from "@/data/content"

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, s) => (
        <svg
          key={s}
          className={`h-4 w-4 ${s < 4 ? "text-accent" : "text-accent/30"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((i: number) => setCurrent(i), [])

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [paused])

  const t = testimonials[current]

  return (
    <section id="testimonials" className="bg-warm">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        <div className="relative lg:w-1/2 min-h-[380px] lg:min-h-[600px] overflow-hidden">
          <img
            src={testimonialImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-charcoal/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-8 left-8 flex items-end gap-3"
          >
            <span className="font-display text-5xl leading-none text-white drop-shadow-sm">
              ★ 4.8
            </span>
            <div className="text-white/80 text-sm leading-tight">
              <span className="block">promedio</span>
              <span className="block mt-1">200+ clientes felices</span>
            </div>
          </motion.div>
          <div className="absolute top-8 left-8">
            <span className="inline-block border border-white/20 px-4 py-1.5 text-[10px] tracking-[0.2em] text-white/70">
              SATISFACCIÓN
            </span>
          </div>
        </div>

        <div className="lg:w-1/2 px-6 py-20 lg:px-16 lg:py-28 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm tracking-[0.3em] text-charcoal/40">VOCES</p>
            <h2 className="mb-12 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Lo que dicen
            </h2>
          </motion.div>

          <div
            className="relative flex-1 flex flex-col justify-center min-h-[240px]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <span className="mb-4 block font-display text-7xl leading-none text-accent/15">
                  &ldquo;
                </span>

                <p className="text-lg leading-relaxed text-charcoal/75 sm:text-xl">
                  {t.text}
                </p>

                <div className="mt-8">
                  <Stars />
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <span className="block text-sm font-medium tracking-wide text-charcoal">
                      {t.name}
                    </span>
                    <span className="mt-0.5 block text-xs tracking-wide text-charcoal/40">
                      {t.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Testimonio ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-8 bg-accent"
                    : "w-2 bg-charcoal/15 hover:bg-charcoal/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
