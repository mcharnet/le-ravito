import React from 'react'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'

const ContactSection: React.FC = () => {
  const contactInfo = {
    address: {
      street: '33 rue Molière',
      city: 'Lyon',
      postalCode: '69006',
      country: 'France'
    },
    phone: '+33 1 23 45 67 89',
    email: 'contact@leravito.fr',
    openingHours: [
      { day: 'Lundi - Vendredi', hours: '06:00 - 20:00' },
      { day: 'Samedi', hours: '07:00 - 19:00' },
      { day: 'Dimanche', hours: '08:00 - 18:00' },
    ]
  }

  const handleGetDirections = () => {
    const address = encodeURIComponent(`${contactInfo.address.street}, ${contactInfo.address.postalCode} ${contactInfo.address.city}`)
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-light-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="space-y-4">
            <div className="w-20 h-1 bg-accent-orange mx-auto" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-grey">
              Nous Trouver
            </h2>
            <div className="w-32 h-0.5 bg-accent-blue mx-auto" />
          </div>
          <p className="text-lg text-custom-grey/70 mt-6 max-w-2xl mx-auto">
            Venez nous rendre visite dans notre café au cœur du 6ème arrondissement de Lyon
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-blue/10 rounded-lg">
                  <MapPin className="text-accent-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-custom-grey mb-2">
                    Adresse
                  </h3>
                  <address className="text-custom-grey/70 not-italic leading-relaxed">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.postalCode} {contactInfo.address.city}<br />
                    {contactInfo.address.country}
                  </address>
                  <button
                    onClick={handleGetDirections}
                    className={`
                      mt-3 flex items-center space-x-2 text-accent-blue font-medium
                      transition-colors duration-200 hover:text-accent-orange
                    `}
                  >
                    <Navigation size={16} />
                    <span>Obtenir l'itinéraire</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-orange/10 rounded-lg">
                  <Phone className="text-accent-orange" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-custom-grey mb-2">
                    Téléphone
                  </h3>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-custom-grey/70 hover:text-accent-orange transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-dark-green/10 rounded-lg">
                  <Mail className="text-dark-green" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-custom-grey mb-2">
                    Email
                  </h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-custom-grey/70 hover:text-accent-orange transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours & Map */}
          <div className="space-y-8">
            {/* Opening Hours */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-yellow/10 rounded-lg">
                  <Clock className="text-accent-yellow" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-custom-grey mb-4">
                    Horaires d'ouverture
                  </h3>
                  <div className="space-y-3">
                    {contactInfo.openingHours.map((schedule, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-custom-grey/70 font-medium">
                          {schedule.day}
                        </span>
                        <span className="text-custom-grey font-medium">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-md h-64">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin size={48} className="text-accent-blue mx-auto" />
                  <p className="text-custom-grey font-medium">Carte Interactive</p>
                  <p className="text-sm text-custom-grey/60">
                    33 rue Molière, 69006 Lyon
                  </p>
                  <button
                    onClick={handleGetDirections}
                    className={`
                      mt-2 px-4 py-2 bg-accent-blue text-white rounded-lg
                      transition-all duration-200 hover:bg-accent-orange hover:scale-105
                    `}
                  >
                    Voir sur Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-blue/10 to-accent-orange/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-custom-grey mb-4">
              Une question ? Un événement à organiser ?
            </h3>
            <p className="text-custom-grey/70 mb-6 max-w-2xl mx-auto">
              Notre équipe est là pour vous accompagner. N'hésitez pas à nous contacter pour 
              organiser vos événements sportifs ou simplement pour échanger sur vos besoins nutritionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className={`
                  px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                `}
              >
                Nous appeler
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className={`
                  px-6 py-3 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg
                  transition-all duration-300 hover:bg-accent-blue hover:text-white hover:scale-105
                `}
              >
                Nous écrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
