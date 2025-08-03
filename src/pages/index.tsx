import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import HeroSlider from '@/components/HeroSlider'
import StorySection from '@/components/StorySection'
import ReviewSection from '@/components/ReviewSection'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import ReservationSection from '@/components/ReservationSection'

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Le Ravito - Café Bar Sportif à Lyon | 33 rue Molière 69006</title>
        <meta 
          name="description" 
          content="Le Ravito, votre café bar dédié aux sportifs à Lyon 6ème. Produits sains et locaux, click & collect, événements sportifs. 33 rue Molière 69006 Lyon." 
        />
        <meta 
          name="keywords" 
          content="café sportif lyon, bar coureurs lyon, ravitaillement sport, click collect lyon, café bio lyon 6, nutrition sportive" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://leravito.fr" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Le Ravito",
              "image": "/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "33 rue Molière",
                "addressLocality": "Lyon",
                "postalCode": "69006",
                "addressCountry": "FR"
              },
              "telephone": "+33123456789",
              "email": "contact@leravito.fr",
              "url": "https://leravito.fr",
              "cuisine": "Healthy food",
              "priceRange": "€€",
              "description": "Café bar dédié aux sportifs proposant des produits sains et locaux",
              "openingHours": [
                "Mo-Fr 06:00-20:00",
                "Sa 07:00-19:00", 
                "Su 08:00-18:00"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSlider />

          {/* Story Section */}
          <StorySection />

          {/* Reviews Section */}
          <ReviewSection />

          {/* Reservation Section */}
          <ReservationSection />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default HomePage
