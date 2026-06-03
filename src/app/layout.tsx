import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll'
import { AnimationProvider } from '@/components/providers/animation'

export const metadata: Metadata = {
  title: 'Samarth Wood Carving & Decor | Luxury Handcrafted Wood Carvings',
  description: 'Premium handcrafted wooden temples, doors, furniture & décor. 35 years of traditional Indian craftsmanship combined with modern luxury. Custom carving projects available.',
  keywords: ['wood carving', 'wooden temples', 'mandirs', 'carved doors', 'luxury décor', 'handcrafted furniture', 'Indian craftsmanship'],
  authors: [{ name: 'Samarth Wood Carving & Decor' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Samarth Wood Carving',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samarthwoodcarving.com',
    siteName: 'Samarth Wood Carving & Decor',
    title: 'Premium Handcrafted Wood Carvings | Samarth',
    description: '35 years of luxury wooden temples, doors, furniture & custom projects.',
    images: [
      {
        url: 'https://samarthwoodcarving.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Samarth Wood Carving & Decor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samarth Wood Carving & Decor',
    description: 'Premium handcrafted wood carvings & luxury décor',
    images: ['https://samarthwoodcarving.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://samarthwoodcarving.com',
  },
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#8b6f3f" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap"
        />
        {/* Floating dust particles effect */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const createDustParticles = () => {
                const dust = document.createElement('div');
                dust.className = 'floating-dust';
                dust.style.left = Math.random() * 100 + '%';
                dust.style.top = Math.random() * 100 + '%';
                dust.style.animationDelay = Math.random() * 5 + 's';
                dust.style.animationDuration = (Math.random() * 15 + 20) + 's';
                document.body.appendChild(dust);
                
                setTimeout(() => dust.remove(), 35000);
              };
              
              // Create dust particles periodically
              const dustInterval = setInterval(createDustParticles, 2000);
              
              // Clean up on page unload
              window.addEventListener('beforeunload', () => {
                clearInterval(dustInterval);
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <AnimationProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </AnimationProvider>
        {/* Warm light overlay effect */}
        <div className="warm-light-overlay" />
      </body>
    </html>
  )
}
