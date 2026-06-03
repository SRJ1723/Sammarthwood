'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Mumbai, India',
    project: 'Custom Mandir',
    content:
      'The craftsmanship is exceptional. Every detail was perfect. The temple looks like it belongs in a royal palace. Worth every penny!',
    rating: 5,
    emoji: '👨‍💼',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'New York, USA',
    project: 'Carved Door',
    content:
      'I was amazed by the attention to detail. The team was professional, responsive, and the final piece exceeded all expectations.',
    rating: 5,
    emoji: '👩‍💼',
  },
  {
    id: 3,
    name: 'Amit Patel',
    location: 'London, UK',
    project: 'Custom Furniture',
    content:
      'Working with Samarth was a pleasure. They understood my vision and created something truly unique and timeless.',
    rating: 5,
    emoji: '👨‍💻',
  },
  {
    id: 4,
    name: 'Neha Singh',
    location: 'Toronto, Canada',
    project: 'Wall Panels',
    content:
      'The quality is outstanding. These pieces are conversation starters in my home. Highly recommended for anyone serious about luxury décor.',
    rating: 5,
    emoji: '👩‍🎨',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative py-24 px-6 md:py-32 bg-gradient-to-b from-ivory-50 to-walnut-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">Client Testimonials</h2>
          <p className="text-walnut-700">What our clients say about working with us</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="h-full bg-gradient-to-br from-teak-50 to-gold-50 rounded-xl p-12 border-2 border-gold-300 flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <span key={i} className="text-2xl text-gold-500">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl font-serif text-walnut-800 mb-8 italic leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{testimonials[currentIndex].emoji}</div>
                    <div>
                      <p className="font-serif text-lg text-walnut-800">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-walnut-600">
                        {testimonials[currentIndex].location}
                      </p>
                      <p className="text-xs text-gold-600 font-serif">
                        Project: {testimonials[currentIndex].project}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 text-gold-600 hover:text-gold-400 transition-colors hidden md:block"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 text-gold-600 hover:text-gold-400 transition-colors hidden md:block"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-gold-600 w-8' : 'bg-gold-300'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Client logos section */}
        <div className="mt-16 pt-12 border-t border-gold-200">
          <p className="text-center text-walnut-700 font-serif text-lg mb-8">
            Trusted by clients worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center opacity-60">
            {['🇮🇳 India', '🇺🇸 USA', '🇨🇦 Canada', '🇬🇧 UK', '🇦🇺 Australia', '🇦🇪 UAE'].map(
              (country, idx) => (
                <div key={idx} className="text-sm font-serif text-walnut-700">
                  {country}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
