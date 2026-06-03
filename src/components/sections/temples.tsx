'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const temples = [
  {
    id: 1,
    name: 'Traditional Mandir',
    style: 'North Indian',
    wood: 'Premium Teak',
    height: '8-12 ft',
    description: 'Intricately carved with traditional deities and ornamental details',
    color: 'from-teak-600 to-teak-800',
  },
  {
    id: 2,
    name: 'Modern Temple',
    style: 'Contemporary',
    wood: 'Walnut',
    height: '6-10 ft',
    description: 'Sleek design with traditional elements for modern homes',
    color: 'from-walnut-600 to-walnut-800',
  },
  {
    id: 3,
    name: 'South Indian Temple',
    style: 'Dravidian',
    wood: 'Rosewood',
    height: '10-15 ft',
    description: 'Gopuram style with intricate Dravidian architecture',
    color: 'from-yellow-900 to-amber-900',
  },
  {
    id: 4,
    name: 'Custom Temple',
    style: 'Personalized',
    wood: 'Any Wood Type',
    height: 'Custom Size',
    description: 'Bespoke designs created according to your specifications',
    color: 'from-gold-600 to-gold-800',
  },
]

export function TemplesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTemple, setActiveTemple] = useState(0)

  useEffect(() => {
    // Scroll to next temple on wheel
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) return

      e.preventDefault()

      const direction = e.deltaY > 0 ? 1 : -1
      setActiveTemple((prev) => (prev + direction + temples.length) % temples.length)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  useEffect(() => {
    // Animate temple carousel
    gsap.to(containerRef.current, {
      rotateY: activeTemple * -90,
      duration: 1.2,
      ease: 'power2.inOut',
    })
  }, [activeTemple])

  return (
    <section
      ref={sectionRef}
      id="temples"
      className="relative py-24 px-6 md:py-32 bg-gradient-to-b from-ivory-50 to-teak-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">Featured Temples</h2>
          <p className="text-walnut-700 text-lg">Scroll or click to explore our temple collections</p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-96 md:h-[500px] mb-12">
          <div
            ref={containerRef}
            className="relative w-full h-full"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            {temples.map((temple, index) => (
              <motion.div
                key={temple.id}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                style={{
                  rotateY: index * 90,
                  backfaceVisibility: 'hidden',
                }}
                onClick={() => setActiveTemple(index)}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-full h-full bg-gradient-to-b ${temple.color} rounded-xl shadow-luxury-lg border border-gold-400 flex items-center justify-center relative overflow-hidden group`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M0 0h100v100H0z' fill='%23543d26'/%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%238b6f3f' stroke-width='1'/%3E%3C/svg%3E")`,
                    }} />
                  </div>

                  {/* Temple visualization */}
                  <div className="relative z-10 text-center">
                    <div className="text-8xl mb-6">🛕</div>
                    <h3 className="text-3xl font-serif text-gold-200 mb-2">{temple.name}</h3>
                    <p className="text-gold-100 text-lg">{temple.style}</p>
                  </div>

                  {/* Hover info */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="text-center text-gold-200">
                      <p className="text-sm mb-2">Wood: {temple.wood}</p>
                      <p className="text-sm mb-4">Height: {temple.height}</p>
                      <button className="btn-luxury text-sm">View Details</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setActiveTemple((prev) => (prev - 1 + temples.length) % temples.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 text-gold-600 hover:text-gold-400 transition-colors hidden md:block"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveTemple((prev) => (prev + 1) % temples.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 text-gold-600 hover:text-gold-400 transition-colors hidden md:block"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Temple specifications */}
        <div className="luxury-card">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif text-walnut-800 mb-4">
                {temples[activeTemple].name}
              </h3>
              <p className="text-walnut-700 leading-relaxed mb-6">
                {temples[activeTemple].description}
              </p>
              <ul className="space-y-3 text-walnut-700">
                <li className="flex gap-3">
                  <span className="text-gold-600">●</span>
                  <span>Style: {temples[activeTemple].style}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-600">●</span>
                  <span>Wood Type: {temples[activeTemple].wood}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-600">●</span>
                  <span>Available Height: {temples[activeTemple].height}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-600">●</span>
                  <span>Custom sizing available</span>
                </li>
              </ul>
            </div>

            {/* Carving details */}
            <div>
              <h4 className="text-xl font-serif text-walnut-800 mb-4">Carving Details</h4>
              <div className="space-y-4">
                {[
                  'Hand-carved by master artisans',
                  'Intricate deity representations',
                  'Ornamental border work',
                  'Premium wood finishing',
                  'Installation support included',
                  'Lifetime consultation available',
                ].map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-ivory-50 rounded">
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <span className="text-walnut-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="btn-luxury mt-8 w-full md:w-auto">
            Request Custom Design
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {temples.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTemple(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTemple ? 'bg-gold-600 w-8' : 'bg-gold-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
