'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface DesignConfig {
  style: string
  size: string
  wood: string
  density: string
  finish: string
}

const options = {
  style: [
    { id: 'traditional', label: 'Traditional', icon: '🛕' },
    { id: 'modern', label: 'Modern', icon: '⬜' },
    { id: 'contemporary', label: 'Contemporary', icon: '🎨' },
  ],
  size: [
    { id: 'small', label: 'Small (4 ft)', price: '$2000' },
    { id: 'medium', label: 'Medium (6 ft)', price: '$4000' },
    { id: 'large', label: 'Large (8 ft)', price: '$6000' },
  ],
  wood: [
    { id: 'teak', label: 'Teak', color: '#8b6f3f' },
    { id: 'walnut', label: 'Walnut', color: '#6d5530' },
    { id: 'rosewood', label: 'Rosewood', color: '#3e2723' },
  ],
  density: [
    { id: 'light', label: 'Light Carving' },
    { id: 'medium', label: 'Medium Carving' },
    { id: 'heavy', label: 'Heavy Carving' },
  ],
  finish: [
    { id: 'natural', label: 'Natural' },
    { id: 'polished', label: 'Polished Finish' },
    { id: 'matte', label: 'Matte Finish' },
  ],
}

export function CustomDesignStudio() {
  const [config, setConfig] = useState<DesignConfig>({
    style: 'traditional',
    size: 'medium',
    wood: 'teak',
    density: 'medium',
    finish: 'polished',
  })

  const handleChange = (key: keyof DesignConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }))
  }

  const getPreviewEmoji = () => {
    if (config.style === 'traditional') return '🛕'
    if (config.style === 'modern') return '⬜'
    return '🎨'
  }

  const getWoodColor = () => {
    return (options.wood.find((w) => w.id === config.wood)?.color || '#8b6f3f')
  }

  return (
    <section id="studio" className="relative py-24 px-6 md:py-32 bg-gradient-to-b from-ivory-50 to-teak-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">Custom Design Studio</h2>
          <p className="text-walnut-700">Create your perfect handcrafted piece with live 3D preview</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Configuration Panel */}
          <div className="space-y-8">
            {/* Style */}
            <div>
              <h3 className="text-lg font-serif text-walnut-800 mb-4">Design Style</h3>
              <div className="grid grid-cols-3 gap-4">
                {options.style.map((s) => (
                  <motion.button
                    key={s.id}
                    onClick={() => handleChange('style', s.id)}
                    className={`p-6 rounded-lg transition-all ${
                      config.style === s.id
                        ? 'bg-gold-500 text-ivory-50 shadow-luxury-lg'
                        : 'bg-ivory-100 text-walnut-700 hover:bg-ivory-200'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <p className="text-sm font-serif">{s.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h3 className="text-lg font-serif text-walnut-800 mb-4">Height & Size</h3>
              <div className="space-y-3">
                {options.size.map((s) => (
                  <motion.button
                    key={s.id}
                    onClick={() => handleChange('size', s.id)}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      config.size === s.id
                        ? 'bg-gold-500 text-ivory-50'
                        : 'bg-ivory-100 text-walnut-700 hover:bg-ivory-200'
                    }`}
                    whileHover={{ x: 8 }}
                  >
                    <span className="font-serif">{s.label}</span>
                    <span className="float-right">{s.price}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Wood Type */}
            <div>
              <h3 className="text-lg font-serif text-walnut-800 mb-4">Wood Type</h3>
              <div className="grid grid-cols-3 gap-4">
                {options.wood.map((w) => (
                  <motion.button
                    key={w.id}
                    onClick={() => handleChange('wood', w.id)}
                    className={`p-6 rounded-lg transition-all border-2 ${
                      config.wood === w.id
                        ? 'border-gold-500'
                        : 'border-transparent'
                    }`}
                    style={{
                      backgroundColor: w.color,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-ivory-50 font-serif text-sm">{w.label}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Carving Density */}
            <div>
              <h3 className="text-lg font-serif text-walnut-800 mb-4">Carving Density</h3>
              <div className="space-y-3">
                {options.density.map((d) => (
                  <motion.button
                    key={d.id}
                    onClick={() => handleChange('density', d.id)}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      config.density === d.id
                        ? 'bg-gold-500 text-ivory-50'
                        : 'bg-ivory-100 text-walnut-700 hover:bg-ivory-200'
                    }`}
                    whileHover={{ x: 8 }}
                  >
                    <span className="font-serif">{d.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Finish */}
            <div>
              <h3 className="text-lg font-serif text-walnut-800 mb-4">Finish</h3>
              <div className="space-y-3">
                {options.finish.map((f) => (
                  <motion.button
                    key={f.id}
                    onClick={() => handleChange('finish', f.id)}
                    className={`w-full p-4 rounded-lg text-left transition-all ${
                      config.finish === f.id
                        ? 'bg-gold-500 text-ivory-50'
                        : 'bg-ivory-100 text-walnut-700 hover:bg-ivory-200'
                    }`}
                    whileHover={{ x: 8 }}
                  >
                    <span className="font-serif">{f.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Preview */}
          <div className="flex flex-col gap-6">
            {/* Preview box */}
            <motion.div
              className="aspect-square rounded-xl border-4 border-gold-300 shadow-luxury-lg overflow-hidden"
              style={{
                backgroundColor: getWoodColor(),
              }}
              layout
            >
              <div className="w-full h-full flex items-center justify-center">
                <motion.div
                  key={`${config.style}-${config.size}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-9xl"
                >
                  {getPreviewEmoji()}
                </motion.div>
              </div>
            </motion.div>

            {/* Summary */}
            <div className="luxury-card">
              <h3 className="text-lg font-serif text-walnut-800 mb-4">Your Design</h3>
              <div className="space-y-3 text-sm text-walnut-700 mb-6">
                <p>
                  <strong className="text-gold-600">Style:</strong>{' '}
                  {options.style.find((s) => s.id === config.style)?.label}
                </p>
                <p>
                  <strong className="text-gold-600">Size:</strong>{' '}
                  {options.size.find((s) => s.id === config.size)?.label}
                </p>
                <p>
                  <strong className="text-gold-600">Wood:</strong>{' '}
                  {options.wood.find((w) => w.id === config.wood)?.label}
                </p>
                <p>
                  <strong className="text-gold-600">Carving:</strong>{' '}
                  {options.density.find((d) => d.id === config.density)?.label}
                </p>
                <p>
                  <strong className="text-gold-600">Finish:</strong>{' '}
                  {options.finish.find((f) => f.id === config.finish)?.label}
                </p>
              </div>
              <button className="btn-luxury w-full">
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
