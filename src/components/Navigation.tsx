'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import type { NavigationItem } from '@/types'

const navigationItems: NavigationItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Événements', href: '/events' },
  { label: 'Notre Histoire', href: '/notre-histoire' },
  { label: 'Contact', href: '/contact' },
  { label: 'Réserver', href: '/reserver' },
]

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    
    // Handle smooth scroll for anchor links
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-light-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`
                  relative font-medium text-custom-grey
                  transition-colors duration-200
                  hover:text-accent-blue
                  after:content-[''] 
                  after:absolute 
                  after:w-0 
                  after:h-0.5 
                  after:bottom-0 
                  after:left-0 
                  after:bg-accent-orange 
                  after:transition-all 
                  after:duration-200
                  hover:after:w-full
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              className={`
                p-2 rounded-md
                transition-colors duration-200
                ${isScrolled 
                  ? 'text-custom-grey hover:text-accent-blue' 
                  : 'text-light-white hover:text-accent-orange'
                }
              `}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            md:hidden 
            overflow-hidden 
            transition-all 
            duration-300 
            ease-in-out
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-light-white/95 backdrop-blur-sm rounded-lg mt-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`
                  block px-3 py-2 text-base font-medium 
                  text-custom-grey rounded-md
                  transition-colors duration-200
                  hover:text-accent-blue hover:bg-accent-blue/10
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
