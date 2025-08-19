import { CONTACT } from "@/utils/constants";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const openingHours = [
    { day: "Lundi - Vendredi", hours: "11h30-14h30 17h-00h" },
  ];

  const quickLinks = [
    { label: "Accueil", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Événements", href: "/events" },
    { label: "Le concept", href: "/concept" },
    { label: "Contact", href: "/contact" },
    { label: "Réserver", href: "/reserver" },
  ];

  return (
    <footer className="bg-custom-grey text-light-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Logo showText={true} size="sm" className="mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Courir, <br />
              Bien se nourrir, <br />
              Beaucoup rire.
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
                  33 rue Molière
                  <br />
                  69006 Lyon, France
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-accent-blue" />
                <a
                  href={`tel:${CONTACT.phoneE164}`}
                  className="text-sm hover:text-accent-orange transition-colors duration-200"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-accent-blue" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm hover:text-accent-orange transition-colors duration-200"
                >
                  {CONTACT.email}
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
            <div className="space-y-3">
              {openingHours.map((schedule, index) => (
                <div key={index} className="text-sm">
                  <div className="text-gray-300">{schedule.day}</div>
                  <div className="font-medium">{schedule.hours}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
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
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-accent-orange">
              Suivez-nous
            </h3>
            <div className="flex space-x-2 items-center">
              <a
                key="Instagram"
                href="https://www.instagram.com/leravito_lyon/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent-blue/20 rounded-full hover:bg-accent-orange hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <span>🏃‍♂️</span>
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
  );
};

export default Footer;
