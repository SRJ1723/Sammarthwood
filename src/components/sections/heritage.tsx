'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function HeritageSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Parallax effect for background
    gsap.to(
      sectionRef.current,
      {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      }
    )

    // Timeline animation
    const timelineItems = timelineRef.current?.querySelectorAll('[data-timeline-item]')
    if (timelineItems) {
      timelineItems.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 60,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
            markers: false,
          },
          delay: index * 0.2,
        })
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="heritage"
      className="relative py-24 px-6 md:py-32 bg-gradient-to-br from-ivory-50 via-teak-50 to-walnut-50"
      style={{
        backgroundSize: '200% 200%',
        backgroundPosition: '50% 0%',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">Our Heritage</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          <p className="mt-6 text-lg text-walnut-700 max-w-2xl mx-auto">
            Three generations of master craftsmen preserving timeless traditions in every piece
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative mt-20"
        >
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300 via-gold-400 to-gold-300" />

          {/* Timeline items */}
          <div className="space-y-20">
            {[
              {
                year: '1988',
                title: 'Our Foundation',
                description: 'Started with a vision to revive traditional wood carving art with modern luxury standards.',
                icon: '🎨',
              },
              {
                year: '2000',
                title: 'Second Generation',
                description: 'Expanded our workshops and started custom temple and furniture commissions across India.',
                icon: '🏛️',
              },
              {
                year: '2015',
                title: 'Global Expansion',
                description: 'Extended our reach to USA, Canada, UK, and Australia with premium international clients.',
                icon: '🌍',
              },
              {
                year: '2024',
                title: 'Digital Innovation',
                description: 'Introduced 3D visualization, custom design studio, and seamless online ordering for global clientele.',
                icon: '💎',
              },
            ].map((item, index) => (
              <div
                key={index}
                data-timeline-item
                className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Left/Right content */}
                <div className="flex-1">
                  <div className="luxury-card">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <p className="text-gold-600 font-serif text-2xl mb-2">{item.year}</p>
                    <h3 className="text-2xl font-serif text-walnut-800 mb-3">{item.title}</h3>
                    <p className="text-walnut-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline marker */}
                <div className="flex-0 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-gold-500 ring-4 ring-ivory-50 relative z-10" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 pt-12 border-t border-gold-200">
          {[
            { label: '35+ Years', value: 'Of Excellence' },
            { label: '500+', value: 'Projects Completed' },
            { label: '6', value: 'Countries Served' },
            { label: '25+', value: 'Master Craftsmen' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-serif text-gold-600 mb-2">{stat.label}</p>
              <p className="text-walnut-700">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
