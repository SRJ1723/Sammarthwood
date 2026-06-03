'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ChevronDown } from 'react-icons/fa'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const doorLeftRef = useRef<HTMLDivElement>(null)
  const doorRightRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const templeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create timeline for cinematic sequence
    const timeline = gsap.timeline({ delay: 0.5 })

    // Door opening animation
    timeline
      // Play ambient sound effect (optional - would need audio file)
      .to(
        doorLeftRef.current,
        {
          rotationY: -90,
          duration: 3,
          ease: 'power2.inOut',
        },
        0
      )
      .to(
        doorRightRef.current,
        {
          rotationY: 90,
          duration: 3,
          ease: 'power2.inOut',
        },
        0
      )
      // Golden light emerges
      .to(
        lightRef.current,
        {
          opacity: 1,
          duration: 2,
        },
        0.5
      )
      // Camera moves through doorway (scale effect)
      .to(
        containerRef.current,
        {
          --zoom: 1.2,
          duration: 3,
        },
        0
      )
      // Temple appears with scale reveal
      .to(
        templeRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 2,
        },
        1.5
      )
      // Logo fades in
      .to(
        logoRef.current,
        {
          opacity: 1,
          duration: 1.5,
        },
        2.5
      )
      // Tagline fades in
      .to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
        },
        3
      )

    // Scroll indicator animation
    gsap.to('.scroll-indicator', {
      delay: 5,
      duration: 0.5,
      opacity: 0.7,
    })
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center perspective"
      style={{
        '--zoom': 1,
      } as React.CSSProperties}
    >
      {/* Perspective container for 3D effect */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '1200px' }}>
        {/* Wooden door left half */}
        <div
          ref={doorLeftRef}
          className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-walnut-800 to-teak-700 flex items-center justify-end overflow-hidden border-r-4 border-walnut-900"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%236d5530' width='100' height='100'/%3E%3Cpath d='M0 0h100v100H0z' fill='%23543d26' opacity='0.1'/%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%238b6f3f' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Door carved details */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
            <div className="w-24 h-24 border-2 border-gold-400 rounded-lg opacity-30" />
            <div className="w-20 h-1 bg-gold-500 opacity-20" />
            <div className="w-20 h-1 bg-gold-500 opacity-20" />
            <div className="w-20 h-1 bg-gold-500 opacity-20" />
          </div>
        </div>

        {/* Wooden door right half */}
        <div
          ref={doorRightRef}
          className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-walnut-800 to-teak-700 flex items-center justify-start overflow-hidden border-l-4 border-walnut-900"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%236d5530' width='100' height='100'/%3E%3Cpath d='M0 0h100v100H0z' fill='%23543d26' opacity='0.1'/%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%238b6f3f' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
            <div className="w-24 h-24 border-2 border-gold-400 rounded-lg opacity-30" />
            <div className="w-20 h-1 bg-gold-500 opacity-20" />
            <div className="w-20 h-1 bg-gold-500 opacity-20" />
            <div className="w-20 h-1 bg-gold-500 opacity-20" />
          </div>
        </div>

        {/* Golden light effect from inside */}
        <div
          ref={lightRef}
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.6) 0%, rgba(212, 175, 55, 0.3) 30%, transparent 70%)`,
          }}
        />

        {/* Temple visualization (could be 3D or image) */}
        <div
          ref={templeRef}
          className="absolute opacity-0 scale-75 z-10"
          style={{
            filter: 'drop-shadow(0 0 60px rgba(212, 175, 55, 0.4))',
          }}
        >
          <div className="w-96 h-96 bg-gradient-to-b from-teak-600 to-walnut-800 rounded-lg border-4 border-gold-400 flex items-center justify-center relative">
            {/* Stylized temple representation */}
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-b from-gold-300 to-gold-500 rounded-full opacity-20" />
              <div className="text-5xl text-gold-300 font-serif mb-4">🛕</div>
              <p className="text-gold-300 text-xl font-serif tracking-wider">Handcrafted Excellence</p>
            </div>

            {/* Corner decorations */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8 border-2 border-gold-400"
                style={{
                  top: i < 2 ? 12 : 'auto',
                  bottom: i >= 2 ? 12 : 'auto',
                  left: i % 2 === 0 ? 12 : 'auto',
                  right: i % 2 === 1 ? 12 : 'auto',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 text-center text-white mix-blend-multiply">
        {/* Logo */}
        <div
          ref={logoRef}
          className="opacity-0 mb-8"
        >
          <h1 className="serif-display text-ivory-50 mb-2">SAMARTH</h1>
          <p className="text-gold-300 tracking-widest font-light">WOOD CARVING & DECOR</p>
        </div>

        {/* Tagline */}
        <div
          ref={taglineRef}
          className="opacity-0 translate-y-8"
        >
          <p className="serif-subtitle text-gold-300">35 Years of Timeless Wood Carving Excellence</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator opacity-0">
        <span className="text-sm tracking-widest">SCROLL</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}
