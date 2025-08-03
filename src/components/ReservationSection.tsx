'use client'

import React, { useState } from 'react'
import { Calendar, Users, Clock, ShoppingBag } from 'lucide-react'

interface ReservationForm {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  type: 'table' | 'event' | 'click-collect'
  message: string
}

const ReservationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'table' | 'event' | 'click-collect'>('table')
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    type: 'table',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTabChange = (tab: 'table' | 'event' | 'click-collect') => {
    setActiveTab(tab)
    setFormData(prev => ({ ...prev, type: tab }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Reservation data:', formData)
    alert('Merci pour votre réservation ! Nous vous contacterons bientôt.')
  }

  const timeSlots = [
    '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30'
  ]

  return (
    <section id="reservation" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="space-y-4">
            <div className="w-20 h-1 bg-accent-orange mx-auto" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-grey">
              Réservation
            </h2>
            <div className="w-32 h-0.5 bg-accent-blue mx-auto" />
          </div>
          <p className="text-lg text-custom-grey/70 mt-6 max-w-2xl mx-auto">
            Réservez votre table, inscrivez-vous à nos événements ou commandez en click & collect
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row bg-white rounded-lg p-1 mb-8 shadow-md">
            <button
              onClick={() => handleTabChange('table')}
              className={`
                flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium transition-all duration-200
                ${activeTab === 'table' 
                  ? 'bg-accent-blue text-white shadow-md' 
                  : 'text-custom-grey hover:bg-gray-50'
                }
              `}
            >
              <Users size={20} />
              <span>Réserver une table</span>
            </button>
            
            <button
              onClick={() => handleTabChange('event')}
              className={`
                flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium transition-all duration-200
                ${activeTab === 'event' 
                  ? 'bg-accent-blue text-white shadow-md' 
                  : 'text-custom-grey hover:bg-gray-50'
                }
              `}
            >
              <Calendar size={20} />
              <span>Événement</span>
            </button>
            
            <button
              onClick={() => handleTabChange('click-collect')}
              className={`
                flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-medium transition-all duration-200
                ${activeTab === 'click-collect' 
                  ? 'bg-accent-blue text-white shadow-md' 
                  : 'text-custom-grey hover:bg-gray-50'
                }
              `}
            >
              <ShoppingBag size={20} />
              <span>Click & Collect</span>
            </button>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
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

                {activeTab === 'table' && (
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-custom-grey mb-2">
                      Nombre de personnes
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} personne{num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Date and Time */}
              {(activeTab === 'table' || activeTab === 'click-collect') && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-custom-grey mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-custom-grey mb-2">
                      Heure *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Sélectionner une heure</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-custom-grey mb-2">
                  {activeTab === 'click-collect' ? 'Votre commande' : 'Message (optionnel)'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200 resize-none"
                  placeholder={
                    activeTab === 'click-collect'
                      ? 'Décrivez votre commande (ex: 2 smoothies banane, 1 sandwich avocat...)'
                      : 'Demandes particulières, allergies, informations supplémentaires...'
                  }
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className={`
                    px-8 py-4 bg-accent-orange text-white font-semibold rounded-lg
                    transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-xl hover:bg-accent-orange/90
                    focus:outline-none focus:ring-4 focus:ring-accent-orange/50
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  {activeTab === 'table' && 'Réserver ma table'}
                  {activeTab === 'event' && 'M\'inscrire à l\'événement'}
                  {activeTab === 'click-collect' && 'Commander'}
                </button>
              </div>
            </form>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-accent-blue" size={24} />
              </div>
              <h3 className="font-semibold text-custom-grey mb-2">Tables</h3>
              <p className="text-sm text-custom-grey/70">
                Réservation recommandée, surtout les week-ends
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-accent-orange" size={24} />
              </div>
              <h3 className="font-semibold text-custom-grey mb-2">Événements</h3>
              <p className="text-sm text-custom-grey/70">
                Courses, ateliers nutrition, rencontres sportives
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-dark-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-dark-green" size={24} />
              </div>
              <h3 className="font-semibold text-custom-grey mb-2">Click & Collect</h3>
              <p className="text-sm text-custom-grey/70">
                Commandez et récupérez vos produits à l'heure souhaitée
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReservationSection
