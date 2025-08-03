import React from 'react'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react'
import Logo from './Logo'

const Footer: React.FC = () => {
  const openingHours = [
    { day: 'Lundi - Vendredi', hours: '06:00 - 20:00' },
    { day: 'Samedi', hours: '07:00 - 19:00' },
    { day: 'Dimanche', hours: '08:00 - 18:00' },
  ]

  const quickLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Événements', href: '/events' },
    { label: 'Notre Histoire', href: '/notre-histoire' },
    { label: 'Contact', href: '/contact' },
    { label: 'Réserver', href: '/reserver' },
  ]

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/leravitolyon', 
      label: 'Facebook' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/leravitolyon', 
      label: 'Instagram' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/leravitolyon', 
      label: 'Twitter' 
    },
  ]

  return (
    <footer className="bg-custom-grey text-light-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Logo showText={true} size="sm" className="mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Le Ravito est votre café bar de quartier dédié aux sportifs. 
              Un lieu convivial pour se retrouver avant et après l'effort, 
              avec des produits sains et locaux.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent-orange">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-accent-blue" />
                <span className="text-sm">
                  33 rue Molière<br />
                  69006 Lyon, France
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-accent-blue" />
                <a 
                  href="tel:+33123456789" 
                  className="text-sm hover:text-accent-orange transition-colors duration-200"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-accent-blue" />
                <a 
                  href="mailto:contact@leravito.fr" 
                  className="text-sm hover:text-accent-orange transition-colors duration-200"
                >
                  contact@leravito.fr
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent-orange">
              <Clock size={20} className="inline mr-2" />
              Horaires
            </h3>
            <div className="space-y-2">
              {openingHours.map((schedule, index) => (
                <div 
                  key={index} 
                  className="flex justify-between text-sm"
                >
                  <span className="text-gray-300">{schedule.day}</span>
                  <span className="font-medium">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent-orange">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-accent-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Media */}
            <div className="pt-4">
              <h4 className="font-medium mb-3">Suivez-nous</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-accent-blue/20 rounded-full hover:bg-accent-orange hover:scale-110 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Le Ravito. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-xs text-gray-400">
              <Link 
                href="/mentions-legales" 
                className="hover:text-accent-orange transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <Link 
                href="/politique-confidentialite" 
                className="hover:text-accent-orange transition-colors duration-200"
              >
                Politique de confidentialité
              </Link>
              <Link 
                href="/cgv" 
                className="hover:text-accent-orange transition-colors duration-200"
              >
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
