import { HeroSection } from '@/components/sections/hero'
import { HeritageSection } from '@/components/sections/heritage'
import { TemplesSection } from '@/components/sections/temples'
import { DoorsSection } from '@/components/sections/doors'
import { ProductGallery } from '@/components/sections/gallery'
import { ProductViewer360 } from '@/components/sections/product-viewer'
import { CustomDesignStudio } from '@/components/sections/custom-studio'
import { WorkshopSection } from '@/components/sections/workshop'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { GlobalPresenceSection } from '@/components/sections/global-presence'
import { ContactSection } from '@/components/sections/contact'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-ivory-50 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <HeritageSection />
      <TemplesSection />
      <DoorsSection />
      <ProductGallery />
      <ProductViewer360 />
      <CustomDesignStudio />
      <WorkshopSection />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
