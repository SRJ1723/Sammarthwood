'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Heritage', href: '#heritage' },
  { label: 'Temples', href: '#temples' },
  { label: 'Doors', href: '#doors' },
  { label: 'Gallery', href: '#gallery' },
  { label: '360 Viewer', href: '#viewer' },
  { label: 'Custom Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-luxury-md border-b border-gold-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-start gap-1"
          >
            <span className={`font-serif font-bold tracking-wide ${
              isScrolled ? 'text-walnut-700' : 'text-ivory-50'
            }`}>
              SAMARTH
            </span>
            <span className={`text-xs tracking-widest ${
              isScrolled ? 'text-gold-600' : 'text-gold-300'
            }`}>
              WOOD CARVING
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors hover:text-gold-500 ${
                  isScrolled ? 'text-walnut-700' : 'text-ivory-50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/91YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury text-sm"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-walnut-700' : 'text-ivory-50'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-20 z-40 md:hidden bg-ivory-50 border-b border-gold-200"
          >
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-walnut-700 text-base tracking-wide hover:text-gold-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/91YOUR_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury text-sm text-center"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
