'use client'

import { useEffect, ReactNode } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // Configure default animation easing
    gsap.defaults({
      ease: 'power3.inOut',
      duration: 0.8,
    })

    // Smooth page transitions
    gsap.set('body', { autoAlpha: 1 })

    // Refresh ScrollTrigger when the component mounts
    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
