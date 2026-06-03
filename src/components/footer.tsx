'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': ['Home', 'About', 'Gallery', 'Services', 'Contact'],
    'Products': ['Temples', 'Doors', 'Furniture', 'Panels', 'Sculptures'],
    'Company': ['About Us', 'Our Workshop', 'Testimonials', 'Blog', 'Career'],
    'Support': ['FAQ', 'Shipping Info', 'Returns', 'Contact', 'Privacy Policy'],
  }

  return (
    <footer className="relative bg-gradient-to-b from-walnut-800 to-walnut-900 text-ivory-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="serif-display text-ivory-50 text-2xl mb-2">SAMARTH</h3>
              <p className="text-gold-300 text-sm tracking-widest">WOOD CARVING & DECOR</p>
            </div>
            <p className="text-ivory-200 text-sm mb-6 leading-relaxed">
              35 years of excellence in handcrafted wooden masterpieces, combining traditional Indian craftsmanship with modern luxury.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {['f', 'i', 't', 'y'].map((icon) => (
                <motion.a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center hover:bg-gold-400 hover:text-walnut-900 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 1) * 0.1 }}
            >
              <h4 className="font-serif text-lg text-gold-300 mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-ivory-200 hover:text-gold-300 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mb-12" />

        {/* Bottom Footer */}
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left text-sm text-ivory-300">
          {/* Copyright */}
          <div>
            <p>
              © {currentYear} Samarth Wood Carving & Decor. All rights reserved.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <p className="text-gold-300 font-serif mb-1">✓</p>
              <p className="text-xs">Premium Quality</p>
            </div>
            <div className="text-center">
              <p className="text-gold-300 font-serif mb-1">✓</p>
              <p className="text-xs">Handcrafted</p>
            </div>
            <div className="text-center">
              <p className="text-gold-300 font-serif mb-1">✓</p>
              <p className="text-xs">Certified</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a href="#" className="hover:text-gold-300 transition-colors">
              Privacy Policy
            </a>
            <span className="text-ivory-600">•</span>
            <a href="#" className="hover:text-gold-300 transition-colors">
              Terms of Service
            </a>
            <span className="text-ivory-600">•</span>
            <a href="#" className="hover:text-gold-300 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Floating Badge - Back to Top */}
      <motion.a
        href="#"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gold-500 text-walnut-900 flex items-center justify-center font-bold shadow-luxury-lg hover:bg-gold-400 transition-colors z-40"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        ↑
      </motion.a>
    </footer>
  )
}
