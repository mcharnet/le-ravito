import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { STORY_IMAGES } from '@/utils/images'

const StorySection: React.FC = () => {
  return (
    <section id="story" className="section-padding bg-light-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Section Title */}
            <div className="space-y-4">
              <div className="w-20 h-1 bg-accent-orange" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-grey">
                Notre Histoire
              </h2>
              <div className="w-32 h-0.5 bg-accent-blue" />
            </div>
            
            {/* Story Content */}
            <div className="space-y-4 text-custom-grey/80">
              <p className="text-lg leading-relaxed">
                <span className="text-accent-orange font-semibold">Le Ravito</span> est né 
                d'une passion commune pour le sport et la convivialité. Situé au cœur du 
                6ème arrondissement de Lyon, notre café bar est pensé par et pour les sportifs.
              </p>
              
              <p className="text-lg leading-relaxed">
                Que vous soyez coureur matinal en quête d'un petit-déjeuner énergétique, 
                cycliste cherchant un point de ravitaillement, ou simplement amateur de 
                produits sains et locaux, Le Ravito est votre nouveau QG.
              </p>
              
              <p className="text-lg leading-relaxed">
                Nous collaborons avec des <span className="text-accent-blue font-semibold">
                fournisseurs locaux</span> pour vous proposer des produits frais, biologiques 
                et adaptés aux besoins nutritionnels des sportifs. Notre carte évolue au 
                rythme des saisons et des événements sportifs lyonnais.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              <div className="text-center p-4 bg-accent-blue/10 rounded-lg">
                <div className="text-2xl font-bold text-accent-blue mb-2">Local</div>
                <div className="text-sm text-custom-grey">Fournisseurs de la région</div>
              </div>
              <div className="text-center p-4 bg-accent-orange/10 rounded-lg">
                <div className="text-2xl font-bold text-accent-orange mb-2">Sain</div>
                <div className="text-sm text-custom-grey">Produits biologiques</div>
              </div>
              <div className="text-center p-4 bg-dark-green/10 rounded-lg">
                <div className="text-2xl font-bold text-dark-green mb-2">Sport</div>
                <div className="text-sm text-custom-grey">Adapté aux athlètes</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/menu"
                className={`
                  group relative inline-flex items-center px-8 py-4 
                  bg-custom-grey text-light-white font-semibold rounded-lg
                  transition-all duration-300 ease-in-out
                  hover:bg-accent-blue hover:shadow-xl hover:scale-105
                  focus:outline-none focus:ring-4 focus:ring-accent-blue/50
                `}
              >
                <span className="relative z-10">Découvrir notre carte</span>
                <div 
                  className={`
                    absolute inset-0 bg-accent-orange rounded-lg opacity-0 
                    transition-opacity duration-300 ease-in-out
                    group-hover:opacity-20
                  `} 
                />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl group">
              <Image
                src={STORY_IMAGES.main}
                alt="Groupe de coureurs en action - L'esprit sportif du Ravito"
                width={600}
                height={600}
                className={`
                  object-cover w-full h-96 lg:h-[500px]
                  transition-transform duration-500 ease-in-out
                  group-hover:scale-110
                `}
              />
              
              {/* Image Overlay */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-orange/20
                  opacity-0 transition-opacity duration-300 ease-in-out
                  group-hover:opacity-100
                `} 
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-accent-orange rounded-full opacity-20" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-accent-blue rounded-full opacity-20" />
            
            {/* Stats Badge */}
            <div 
              className={`
                absolute top-6 right-6 bg-light-white/95 backdrop-blur-sm 
                p-4 rounded-lg shadow-lg text-center
              `}
            >
              <div className="text-2xl font-bold text-accent-orange">100%</div>
              <div className="text-sm text-custom-grey font-medium">Local</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StorySection
