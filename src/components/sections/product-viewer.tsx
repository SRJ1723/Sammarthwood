'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ProductViewer360() {
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(100)

  return (
    <section id="viewer" className="relative py-24 px-6 md:py-32 bg-gradient-to-b from-walnut-50 to-ivory-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">360° Product Viewer</h2>
          <p className="text-walnut-700">Drag to rotate • Scroll to zoom • View intricate carving details</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Viewer */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-teak-50 to-teak-100 rounded-xl p-8 aspect-square flex items-center justify-center border-4 border-gold-300 shadow-luxury-lg">
              <motion.div
                animate={{ rotateY: rotation }}
                className="text-9xl"
                style={{ perspective: '1200px' }}
              >
                🛕
              </motion.div>
            </div>

            {/* Controls */}
            <div className="mt-8 space-y-6">
              {/* Rotation slider */}
              <div>
                <label className="block text-walnut-700 mb-3 font-serif">Rotation</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="w-full h-2 bg-gold-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-walnut-600 mt-2">
                  <span>0°</span>
                  <span>360°</span>
                </div>
              </div>

              {/* Zoom slider */}
              <div>
                <label className="block text-walnut-700 mb-3 font-serif">Zoom</label>
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full h-2 bg-gold-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-walnut-600 mt-2">
                  <span>Zoom Out</span>
                  <span>Zoom In</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="luxury-card h-fit">
            <h3 className="text-xl font-serif text-walnut-800 mb-4">Temple Mandir</h3>
            <div className="space-y-4 text-sm text-walnut-700">
              <div>
                <p className="text-gold-600 font-serif mb-1">Dimensions</p>
                <p>8 ft H × 6 ft W × 4 ft D</p>
              </div>
              <div>
                <p className="text-gold-600 font-serif mb-1">Material</p>
                <p>Premium Teak Wood</p>
              </div>
              <div>
                <p className="text-gold-600 font-serif mb-1">Craftsmanship</p>
                <p>Hand-carved with intricate details</p>
              </div>
              <div>
                <p className="text-gold-600 font-serif mb-1">Carving Details</p>
                <ul className="space-y-1">
                  <li>✓ Main deity carving</li>
                  <li>✓ Ornamental borders</li>
                  <li>✓ Arch framework</li>
                  <li>✓ Base platform</li>
                </ul>
              </div>
              <button className="btn-luxury w-full mt-4">Request Quote</button>
            </div>
          </div>
        </div>

        {/* Zoom instructions */}
        <div className="mt-12 p-6 bg-gold-50 rounded-lg border border-gold-200 text-center text-walnut-700">
          <p className="mb-2">💡 <strong>Tip:</strong> Use the controls above to examine every detail of our handcrafted work.</p>
          <p>On mobile, use touch gestures to rotate and zoom.</p>
        </div>
      </div>
    </section>
  )
}
