'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    icon: '🌲',
    title: 'Wood Selection',
    description: 'Carefully curated selection of premium timber from sustainable sources',
    details: ['Inspect grain', 'Check quality', 'Assess color', 'Test durability'],
  },
  {
    icon: '✏️',
    title: 'Design Drawing',
    description: 'Master artisans sketch detailed designs with traditional precision',
    details: ['Measurement', 'Sketch details', 'Refine design', 'Client approval'],
  },
  {
    icon: '🔨',
    title: 'Hand Carving',
    description: 'Expert hand carving using traditional tools and techniques',
    details: ['Rough carving', 'Detail work', 'Fine carving', 'Surface prep'],
  },
  {
    icon: '🎨',
    title: 'Finishing',
    description: 'Premium finishing and polishing to enhance natural beauty',
    details: ['Sanding', 'Staining', 'Polishing', 'Quality check'],
  },
  {
    icon: '🚚',
    title: 'Packaging',
    description: 'Secure packaging to protect your handcrafted piece',
    details: ['Wrap carefully', 'Secure box', 'Track shipment', 'Install support'],
  },
  {
    icon: '✨',
    title: 'Installation',
    description: 'Professional installation and lifelong consultation',
    details: ['On-site setup', 'Fit adjustment', 'Final polish', 'Consultation'],
  },
]

export function WorkshopSection() {
  return (
    <section className="relative py-24 px-6 md:py-32 bg-gradient-to-b from-walnut-50 to-ivory-50 overflow-hidden">
      {/* Background video effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-walnut-900 to-walnut-800" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">Our Workshop Experience</h2>
          <p className="text-walnut-700 text-lg">From raw wood to timeless masterpiece - see our meticulous process</p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="luxury-card group hover:border-gold-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-serif text-walnut-800 mb-3">{step.title}</h3>
              <p className="text-walnut-700 mb-4">{step.description}</p>
              
              {/* Details */}
              <div className="grid grid-cols-2 gap-2 text-xs text-walnut-600">
                {step.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-gold-500">✓</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality assurance section */}
        <div className="bg-gradient-to-r from-teak-600 to-walnut-700 rounded-xl p-12 text-ivory-50">
          <h3 className="serif-display text-ivory-50 mb-6">Quality Assurance</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Multiple Checkpoints',
                description: 'Each piece inspected at every stage for perfection',
              },
              {
                title: 'Handcrafted Excellence',
                description: 'Master artisans with 20+ years of experience',
              },
              {
                title: 'Lifetime Support',
                description: 'Free maintenance consultation for life',
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                <p className="text-ivory-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 pt-12 border-t border-gold-200">
          {[
            { number: '20+', label: 'Years Average Experience' },
            { number: '100%', label: 'Hand Carved' },
            { number: '500+', label: 'Projects Completed' },
            { number: '35+', label: 'Years in Business' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-4xl font-serif text-gold-600 mb-2">{stat.number}</p>
              <p className="text-walnut-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
