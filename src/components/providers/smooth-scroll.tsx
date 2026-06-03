'use client'

import { useEffect, ReactNode } from 'react'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Dynamically import Lenis to avoid SSR issues
    const setupLenis = async () => {
      const Lenis = (await import('lenis')).default

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return lenis
    }

    let lenis: any = null

    setupLenis().catch(() => {
      console.warn('Lenis smooth scrolling not available')
    })

    return () => {
      if (lenis) {
        lenis.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
