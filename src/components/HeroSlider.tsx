'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HERO_IMAGES } from '@/utils/images'

interface HeroSlide {
  id: number
  image: string
  title: string
  subtitle: string
  ctaPrimary: {
    text: string
    href: string
  }
  ctaSecondary: {
    text: string
    href: string
  }
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: HERO_IMAGES.slide1,
    title: 'Bienvenue au Ravito',
    subtitle: 'Votre café bar dédié aux sportifs au cœur de Lyon',
    ctaPrimary: {
      text: 'Découvrir la carte',
      href: '/menu'
    },
    ctaSecondary: {
      text: 'Réserver une table',
      href: '/reserver'
    }
  },
  {
    id: 2,
    image: HERO_IMAGES.slide2,
    title: 'Ravitaillement & Convivialité',
    subtitle: 'Des produits sains pour accompagner vos performances',
    ctaPrimary: {
      text: 'Voir les événements',
      href: '/events'
    },
    ctaSecondary: {
      text: 'Click & Collect',
      href: '/reserver'
    }
  }
]

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.title}
          fill
          sizes="100vw"
          priority
          className={`
            object-cover transition-all duration-1000 ease-in-out
            ${isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}
          `}
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center text-light-white">
          <div 
            className={`
              space-y-6 transition-all duration-1000 ease-in-out
              ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
          >
            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-shadow">
              {currentSlideData.title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-shadow font-medium">
              {currentSlideData.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div 
              className={`
                flex flex-col sm:flex-row gap-4 justify-center items-center pt-8
                transition-all duration-1000 ease-in-out delay-300
                ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
            >
              <Link
                href={currentSlideData.ctaPrimary.href}
                className={`
                  px-8 py-4 bg-accent-orange text-light-white font-semibold rounded-lg
                  transition-all duration-300 ease-in-out
                  hover:scale-102 hover:shadow-xl hover:bg-accent-orange/90
                  focus:outline-none focus:ring-4 focus:ring-accent-orange/50
                `}
              >
                {currentSlideData.ctaPrimary.text}
              </Link>
              
              <Link
                href={currentSlideData.ctaSecondary.href}
                className={`
                  px-8 py-4 border-2 border-light-white text-light-white font-semibold rounded-lg
                  transition-all duration-300 ease-in-out
                  hover:scale-102 hover:bg-light-white hover:text-custom-grey
                  focus:outline-none focus:ring-4 focus:ring-light-white/50
                `}
              >
                {currentSlideData.ctaSecondary.text}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${currentSlide === index 
                  ? 'bg-accent-orange scale-125' 
                  : 'bg-light-white/50 hover:bg-light-white/75'
                }
              `}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-light-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-light-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
