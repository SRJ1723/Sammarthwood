'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 px-6 md:py-32 bg-gradient-to-b from-ivory-50 to-teak-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="serif-display text-walnut-800 mb-4">Get in Touch</h2>
          <p className="text-walnut-700 text-lg">Let's create something extraordinary together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact Methods */}
            {[
              {
                icon: '📱',
                title: 'WhatsApp',
                value: '+91 9876 543 210',
                link: 'https://wa.me/919876543210',
                color: 'from-green-500 to-green-600',
              },
              {
                icon: '☎️',
                title: 'Phone',
                value: '+91 1234 567 890',
                link: 'tel:+911234567890',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: '✉️',
                title: 'Email',
                value: 'info@samarthwood.com',
                link: 'mailto:info@samarthwood.com',
                color: 'from-orange-500 to-orange-600',
              },
              {
                icon: '📍',
                title: 'Visit Us',
                value: 'Rajasthan, India',
                link: '#',
                color: 'from-red-500 to-red-600',
              },
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-6 rounded-xl bg-gradient-to-r ${contact.color} text-white hover:shadow-luxury-lg transition-shadow group`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{contact.icon}</div>
                  <div>
                    <p className="font-serif text-lg mb-1">{contact.title}</p>
                    <p className="text-white/90">{contact.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-serif text-walnut-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: '📘', label: 'Facebook', color: 'bg-blue-600' },
                  { icon: '📷', label: 'Instagram', color: 'bg-pink-600' },
                  { icon: '🎬', label: 'YouTube', color: 'bg-red-600' },
                  { icon: '𝕏', label: 'Twitter', color: 'bg-black' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    className={`w-12 h-12 rounded-full ${social.color} text-white flex items-center justify-center text-xl hover:scale-110 transition-transform`}
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="luxury-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif text-walnut-800 mb-6">Send us an Inquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-walnut-700 font-serif mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gold-300 rounded focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-walnut-700 font-serif mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gold-300 rounded focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-walnut-700 font-serif mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gold-300 rounded focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-walnut-700 font-serif mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gold-300 rounded focus:outline-none focus:border-gold-500 transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn-luxury w-full text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Inquiry'}
              </motion.button>
            </form>

            <p className="text-xs text-walnut-600 text-center mt-4">
              We'll respond within 24 hours
            </p>
          </motion.div>
        </div>

        {/* Business Hours */}
        <div className="bg-gradient-to-r from-teak-600 to-walnut-700 rounded-xl p-12 text-ivory-50">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-serif text-lg mb-2">Business Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-2">Response Time</h4>
              <p>Inquiries: Within 24 hours</p>
              <p>Quotes: Within 3 business days</p>
              <p>Custom projects: By schedule</p>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-2">Service Area</h4>
              <p>Worldwide Shipping Available</p>
              <p>Local Consultation In Rajasthan</p>
              <p>Virtual Design Consultations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
