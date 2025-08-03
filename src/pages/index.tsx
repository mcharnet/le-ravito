import React from 'react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import HeroSlider from '@/components/HeroSlider'
import StorySection from '@/components/StorySection'
import ReviewSection from '@/components/ReviewSection'
import Footer from '@/components/Footer'


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
              "image": "https://leravito.fr/favicon.svg",
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

          {/* Call to Action Section */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom text-center">
              <div className="bg-white rounded-2xl p-12 max-w-4xl mx-auto shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-custom-grey mb-6">
                  Prêt à Découvrir Le Ravito ?
                </h2>
                <p className="text-lg text-custom-grey/70 mb-8 max-w-2xl mx-auto">
                  Rejoignez notre communauté de sportifs passionnés et découvrez 
                  des produits sains adaptés à vos besoins.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/menu"
                    className="px-8 py-4 bg-accent-orange text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Découvrir la carte
                  </a>
                  <a
                    href="/reserver"
                    className="px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg transition-all duration-300 hover:bg-accent-blue hover:text-white hover:scale-105"
                  >
                    Réserver une table
                  </a>
                  <a
                    href="/events"
                    className="px-8 py-4 border-2 border-dark-green text-dark-green font-semibold rounded-lg transition-all duration-300 hover:bg-dark-green hover:text-white hover:scale-105"
                  >
                    Nos événements
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default HomePage
