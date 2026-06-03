'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  'All',
  'Temples',
  'Doors',
  'Furniture',
  'Panels',
  'Sculptures',
  'Vastu',
]

const galleryItems = [
  { id: 1, category: 'Temples', title: 'Traditional Temple', emoji: '🛕', size: 'lg' },
  { id: 2, category: 'Doors', title: 'Carved Door', emoji: '🚪', size: 'md' },
  { id: 3, category: 'Furniture', title: 'Console Table', emoji: '🏺', size: 'md' },
  { id: 4, category: 'Panels', title: 'Wall Panel', emoji: '🎨', size: 'lg' },
  { id: 5, category: 'Sculptures', title: 'Statue', emoji: '🗿', size: 'md' },
  { id: 6, category: 'Vastu', title: 'Vastu Product', emoji: '🪟', size: 'md' },
  { id: 7, category: 'Temples', title: 'Modern Temple', emoji: '🛕', size: 'md' },
  { id: 8, category: 'Panels', title: 'Decorative Panel', emoji: '🎨', size: 'lg' },
]

export function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const filtered = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="relative py-24 px-6 md:py-32 bg-gradient-to-b from-ivory-50 to-walnut-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">Product Gallery</h2>
          <p className="text-walnut-700">Explore our finest creations across all categories</p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full tracking-wide transition-all ${
                selectedCategory === category
                  ? 'bg-gold-500 text-ivory-50'
                  : 'border border-gold-400 text-gold-600 hover:border-gold-500'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedItem(item.id)}
                className={`relative group overflow-hidden rounded-lg cursor-pointer shadow-luxury-md hover:shadow-luxury-lg transition-all ${
                  item.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`${
                  item.size === 'lg' ? 'h-96' : 'h-64'
                } bg-gradient-to-br from-teak-600 to-walnut-800 flex items-center justify-center relative`}>
                  <div className="text-7xl opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.emoji}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gold-300 text-sm tracking-widest mb-2">CLICK TO VIEW</p>
                      <h3 className="text-gold-300 text-lg font-serif">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full"
              >
                {(() => {
                  const item = galleryItems.find((i) => i.id === selectedItem)!
                  return (
                    <div className="bg-ivory-50 rounded-xl overflow-hidden">
                      <div className="h-96 bg-gradient-to-br from-teak-600 to-walnut-800 flex items-center justify-center text-9xl">
                        {item.emoji}
                      </div>
                      <div className="p-8">
                        <h2 className="serif-display text-walnut-800 mb-4">{item.title}</h2>
                        <p className="text-walnut-700 mb-6">
                          This is a premium {item.category.toLowerCase()} crafted by our master artisans using the finest materials and traditional techniques.
                        </p>
                        <div className="flex gap-4">
                          <button className="btn-luxury flex-1">View Details</button>
                          <button
                            onClick={() => setSelectedItem(null)}
                            className="px-6 py-4 border-2 border-walnut-700 text-walnut-700 rounded-sm hover:bg-walnut-700 hover:text-ivory-50 transition-all"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
