'use client'

import { motion } from 'framer-motion'

const locations = [
  { country: 'India', projects: 250, emoji: '🇮🇳', color: 'from-orange-500 to-saffron-500' },
  { country: 'USA', projects: 80, emoji: '🇺🇸', color: 'from-blue-500 to-red-500' },
  { country: 'Canada', projects: 45, emoji: '🇨🇦', color: 'from-red-500 to-white' },
  { country: 'UK', projects: 35, emoji: '🇬🇧', color: 'from-blue-600 to-red-600' },
  { country: 'Australia', projects: 28, emoji: '🇦🇺', color: 'from-blue-500 to-gold-500' },
  { country: 'UAE', projects: 22, emoji: '🇦🇪', color: 'from-green-600 to-white' },
]

export function GlobalPresenceSection() {
  return (
    <section className="relative py-24 px-6 md:py-32 bg-gradient-to-b from-walnut-50 to-ivory-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">Global Presence</h2>
          <p className="text-walnut-700 text-lg">Our handcrafted masterpieces adorn homes across six continents</p>
        </div>

        {/* Map visualization */}
        <div className="mb-16 relative">
          <div className="text-6xl md:text-9xl opacity-10 absolute -inset-8 select-none">🌍</div>
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {locations.map((location, idx) => (
              <motion.div
                key={location.country}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={`bg-gradient-to-br ${location.color} p-8 rounded-xl shadow-luxury-lg h-full text-white relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute w-32 h-32 rounded-full bg-white -top-16 -right-16" />
                    <div className="absolute w-24 h-24 rounded-full bg-white -bottom-8 -left-8" />
                  </div>

                  <div className="relative z-10">
                    <div className="text-5xl mb-3">{location.emoji}</div>
                    <h3 className="text-3xl font-serif mb-2">{location.country}</h3>
                    <p className="text-xl font-light mb-4">
                      <span className="text-3xl font-serif">{location.projects}</span>
                      <span className="text-lg ml-2">Projects</span>
                    </p>

                    {/* Animated counter */}
                    <motion.div
                      className="mt-6 pt-6 border-t border-white/30"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                    >
                      <p className="text-sm opacity-80 mb-4">
                        {location.projects > 100
                          ? 'Strong foundation'
                          : location.projects > 50
                            ? 'Growing presence'
                            : 'Expanding reach'}
                      </p>
                      <motion.div
                        className="h-2 bg-white/30 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.5, duration: 1 }}
                      >
                        <motion.div
                          className="h-full bg-white/80 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min(100, (location.projects / 250) * 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.6, duration: 1 }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 bg-gradient-to-r from-teak-600 to-walnut-700 rounded-xl p-12 text-ivory-50">
          {[
            { label: '500+', value: 'Projects Completed' },
            { label: '6', value: 'Countries Served' },
            { label: '25+', value: 'Master Craftsmen' },
            { label: '35+', value: 'Years of Excellence' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-4xl font-serif mb-2">{stat.label}</p>
              <p className="text-lg opacity-90">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Shipping info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: '🚢', title: 'Worldwide Shipping', description: 'Secure packaging & tracking' },
            { icon: '🏭', title: 'Quality Assurance', description: 'Every piece inspected' },
            { icon: '💬', title: 'Dedicated Support', description: 'Lifetime consultation' },
          ].map((item, idx) => (
            <div key={idx} className="luxury-card">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-serif text-walnut-800 mb-2">{item.title}</h4>
              <p className="text-walnut-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
