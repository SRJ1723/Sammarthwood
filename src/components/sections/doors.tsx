'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const doors = [
  {
    id: 1,
    name: 'Traditional Carved Door',
    description: 'Classic North Indian design with intricate deity carvings',
    width: '3-4 ft',
    height: '7-8 ft',
    wood: 'Premium Teak',
    image: '🚪',
  },
  {
    id: 2,
    name: 'Modern Minimalist Door',
    description: 'Contemporary design with subtle geometric patterns',
    width: '2.5-3.5 ft',
    height: '6.5-7.5 ft',
    wood: 'Walnut',
    image: '🚪',
  },
  {
    id: 3,
    name: 'Architectural Door',
    description: 'Large statement piece with elaborate frame work',
    width: '4-5 ft',
    height: '8-10 ft',
    wood: 'Rosewood',
    image: '🚪',
  },
  {
    id: 4,
    name: 'Temple Entrance Door',
    description: 'Sacred geometry with spiritual significance carvings',
    width: '5-6 ft',
    height: '10-12 ft',
    wood: 'Premium Teak',
    image: '🚪',
  },
]

export function DoorsSection() {
  const [selectedDoor, setSelectedDoor] = useState<number | null>(null)
  const [hoveredDoor, setHoveredDoor] = useState<number | null>(null)

  return (
    <section id="doors" className="relative py-24 px-6 md:py-32 bg-gradient-to-b from-teak-50 to-ivory-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">Handcrafted Doors</h2>
          <p className="text-walnut-700 text-lg">Hover or click to view door details and opening animation</p>
        </div>

        {/* Doors Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {doors.map((door) => (
            <motion.div
              key={door.id}
              className="relative group cursor-pointer"
              onHoverStart={() => setHoveredDoor(door.id)}
              onHoverEnd={() => setHoveredDoor(null)}
              onClick={() => setSelectedDoor(door.id)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Door visualization container */}
              <div className="relative h-96 bg-gradient-to-b from-walnut-700 to-walnut-900 rounded-lg overflow-hidden border-4 border-gold-400 shadow-luxury-lg">
                {/* Door wooden texture */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%236d5530' width='200' height='200'/%3E%3Cline x1='0' y1='0' x2='200' y2='200' stroke='%234a3821' stroke-width='0.5' opacity='0.3'/%3E%3Cline x1='200' y1='0' x2='0' y2='200' stroke='%234a3821' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
                }} />

                {/* Door left half - animates on hover */}
                <motion.div
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-walnut-800 to-walnut-700 border-r-2 border-gold-500 flex items-center justify-center"
                  animate={{
                    rotateY: hoveredDoor === door.id ? -45 : 0,
                    x: hoveredDoor === door.id ? -20 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ perspective: '1000px' }}
                >
                  <div className="flex flex-col gap-4 items-center text-gold-300 opacity-40">
                    <div className="w-12 h-16 border-2 border-gold-400 rounded" />
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                </motion.div>

                {/* Door right half - animates on hover */}
                <motion.div
                  className="absolute inset-0 left-1/2 w-1/2 bg-gradient-to-l from-walnut-800 to-walnut-700 border-l-2 border-gold-500 flex items-center justify-center"
                  animate={{
                    rotateY: hoveredDoor === door.id ? 45 : 0,
                    x: hoveredDoor === door.id ? 20 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{ perspective: '1000px' }}
                >
                  <div className="flex flex-col gap-4 items-center text-gold-300 opacity-40">
                    <div className="w-12 h-16 border-2 border-gold-400 rounded" />
                    <div className="w-2 h-2 rounded-full bg-gold-400" />
                  </div>
                </motion.div>

                {/* Center light glow on hover */}
                <AnimatePresence>
                  {hoveredDoor === door.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 70%)',
                      }}
                    />
                  )}
                </AnimatePresence>

                {/* Door title overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-6xl mb-4">{door.image}</div>
                  <h3 className="text-xl text-gold-300 font-serif text-center px-4">{door.name}</h3>
                </div>
              </div>

              {/* Door info card */}
              <div className="mt-6 luxury-card">
                <h3 className="text-xl font-serif text-walnut-800 mb-2">{door.name}</h3>
                <p className="text-walnut-700 mb-4">{door.description}</p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gold-600 font-serif">Width</p>
                    <p className="text-walnut-700">{door.width}</p>
                  </div>
                  <div>
                    <p className="text-gold-600 font-serif">Height</p>
                    <p className="text-walnut-700">{door.height}</p>
                  </div>
                  <div>
                    <p className="text-gold-600 font-serif">Wood</p>
                    <p className="text-walnut-700">{door.wood}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selectedDoor !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoor(null)}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-ivory-50 rounded-xl max-w-2xl w-full luxury-card"
              >
                {(() => {
                  const door = doors.find((d) => d.id === selectedDoor)!
                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <h2 className="serif-display text-walnut-800">{door.name}</h2>
                        <button
                          onClick={() => setSelectedDoor(null)}
                          className="text-walnut-700 hover:text-gold-600 transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="h-64 bg-gradient-to-b from-walnut-700 to-walnut-900 rounded-lg mb-6 flex items-center justify-center text-8xl">
                        {door.image}
                      </div>

                      <div className="space-y-4 mb-6">
                        <p className="text-walnut-700">{door.description}</p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-gold-50 rounded">
                            <p className="text-gold-600 font-serif text-sm">Dimensions</p>
                            <p className="text-walnut-800">{door.width} × {door.height}</p>
                          </div>
                          <div className="p-4 bg-gold-50 rounded">
                            <p className="text-gold-600 font-serif text-sm">Wood Type</p>
                            <p className="text-walnut-800">{door.wood}</p>
                          </div>
                          <div className="p-4 bg-gold-50 rounded">
                            <p className="text-gold-600 font-serif text-sm">Delivery</p>
                            <p className="text-walnut-800">8-12 weeks</p>
                          </div>
                        </div>

                        <div className="p-4 bg-teak-50 rounded border border-gold-200">
                          <p className="font-serif text-walnut-800 mb-2">Customization Options</p>
                          <ul className="text-sm text-walnut-700 space-y-1">
                            <li>✓ Custom size available</li>
                            <li>✓ Design modifications</li>
                            <li>✓ Wood selection</li>
                            <li>✓ Finishing options</li>
                          </ul>
                        </div>
                      </div>

                      <button className="btn-luxury w-full">Request Custom Door</button>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <div className="text-center pt-12 border-t border-gold-200">
          <h3 className="text-2xl font-serif text-walnut-800 mb-4">Custom Door Design</h3>
          <p className="text-walnut-700 mb-6 max-w-2xl mx-auto">
            Not finding the perfect door? Our master craftsmen can create a completely custom design tailored to your specifications and vision.
          </p>
          <a href="#contact" className="btn-luxury inline-block">
            Start Your Custom Project
          </a>
        </div>
      </div>
    </section>
  )
}
