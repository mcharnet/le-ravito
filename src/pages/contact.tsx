import React, { useState } from 'react'
import Head from 'next/head'
import { MapPin, Phone, Mail, Clock, Navigation as NavigationIcon, Send, MessageCircle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Contact form data:', formData)
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleGetDirections = () => {
    const address = encodeURIComponent(`${contactInfo.address.street}, ${contactInfo.address.postalCode} ${contactInfo.address.city}`)
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  const subjects = [
    'Question générale',
    'Réservation / Événement',
    'Partenariat',
    'Suggestion / Réclamation',
    'Presse / Média',
    'Autre'
  ]

  return (
    <>
      <Head>
        <title>Contact - Le Ravito | Nous contacter à Lyon 6ème</title>
        <meta 
          name="description" 
          content="Contactez Le Ravito à Lyon 6ème. Adresse, téléphone, horaires et formulaire de contact. 33 rue Molière, 69006 Lyon." 
        />
        <meta 
          name="keywords" 
          content="contact le ravito, adresse lyon 6, téléphone café sportif, horaires ouverture, nous contacter" 
        />
        <link rel="canonical" href="https://leravito.fr/contact" />
      </Head>

      <div className="min-h-screen bg-light-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-accent-blue/10 to-accent-orange/10">
          <div className="container-custom text-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="w-20 h-1 bg-accent-orange mx-auto" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-grey">
                Nous Contacter
              </h1>
              <div className="w-32 h-0.5 bg-accent-blue mx-auto" />
              <p className="text-lg md:text-xl text-custom-grey/70 leading-relaxed">
                Une question, une suggestion, un projet ? Notre équipe est là pour vous accompagner.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-custom-grey mb-4 flex items-center">
                    <MessageCircle className="mr-3 text-accent-orange" size={28} />
                    Envoyez-nous un message
                  </h2>
                  <p className="text-custom-grey/70">
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-custom-grey mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-custom-grey mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-custom-grey mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                        placeholder="06 12 34 56 78"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-custom-grey mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Sélectionner un sujet</option>
                        {subjects.map(subject => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-custom-grey mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Décrivez votre demande, question ou suggestion..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-accent-orange text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent-orange/50 flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Google Maps avec adresse intégrée */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-accent-blue/10 rounded-lg flex-shrink-0">
                      <MapPin className="text-accent-blue" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-custom-grey mb-2">
                        Nous Trouver
                      </h3>
                      <address className="text-custom-grey/70 not-italic leading-relaxed mb-4">
                        {contactInfo.address.street}<br />
                        {contactInfo.address.postalCode} {contactInfo.address.city}<br />
                        {contactInfo.address.country}
                      </address>
                      <button
                        onClick={handleGetDirections}
                        className="flex items-center space-x-2 text-accent-blue font-medium hover:text-accent-orange transition-colors duration-200"
                      >
                        <NavigationIcon size={16} />
                        <span>Obtenir l'itinéraire</span>
                      </button>
                    </div>
                  </div>
                  <div className="w-full h-80 rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.8858407516843!2d4.842329315557!3d45.77028017910662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb020f2a1f4d%3A0x6c1c5c5c5c5c5c5c!2s33%20Rue%20Moli%C3%A8re%2C%2069006%20Lyon%2C%20France!5e0!3m2!1sfr!2sfr!4v1703875200000!5m2!1sfr!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Le Ravito - 33 rue Molière, 69006 Lyon"
                    />
                  </div>
                  <p className="text-sm text-custom-grey/60 mt-3 text-center">
                    Accessible en métro ligne A (Foch) - Parking disponible rue Molière
                  </p>
                </div>

                {/* Contact Direct */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold text-lg text-custom-grey mb-4">
                    Nous contacter directement
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-accent-orange/10 rounded-lg flex-shrink-0">
                        <Phone className="text-accent-orange" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-custom-grey/60">Téléphone</p>
                        <a 
                          href={`tel:${contactInfo.phone}`}
                          className="text-custom-grey font-medium hover:text-accent-orange transition-colors duration-200"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-dark-green/10 rounded-lg flex-shrink-0">
                        <Mail className="text-dark-green" size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-custom-grey/60">Email</p>
                        <a 
                          href={`mailto:${contactInfo.email}`}
                          className="text-custom-grey font-medium hover:text-accent-orange transition-colors duration-200"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-accent-yellow/10 rounded-lg">
                      <Clock className="text-accent-yellow" size={24} />
                    </div>
                    <h3 className="font-semibold text-lg text-custom-grey">
                      Horaires d'Ouverture
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {contactInfo.openingHours.map((schedule, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="text-custom-grey/70 font-medium">
                          {schedule.day}
                        </span>
                        <span className="text-custom-grey font-semibold">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-custom-grey mb-4">
                Questions Fréquentes
              </h2>
              <p className="text-lg text-custom-grey/70">
                Les réponses aux questions les plus courantes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-custom-grey mb-3">
                  Puis-je réserver une table ?
                </h3>
                <p className="text-custom-grey/70">
                  Oui, nous recommandons la réservation surtout le week-end. 
                  Vous pouvez réserver via notre page dédiée ou nous appeler directement.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-custom-grey mb-3">
                  Proposez-vous des options vegan ?
                </h3>
                <p className="text-custom-grey/70">
                  Absolument ! Notre carte propose de nombreuses options végétariennes et vegan, 
                  adaptées aux besoins de tous les sportifs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-custom-grey mb-3">
                  Y a-t-il un parking ?
                </h3>
                <p className="text-custom-grey/70">
                  Des places de stationnement sont disponibles dans la rue Molière. 
                  Nous sommes également accessibles en métro (ligne A - Foch).
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-custom-grey mb-3">
                  Organisez-vous des événements privés ?
                </h3>
                <p className="text-custom-grey/70">
                  Oui, nous pouvons organiser vos événements sportifs privés. 
                  Contactez-nous pour discuter de vos besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default ContactPage
