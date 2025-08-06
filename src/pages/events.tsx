import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, MapPin, Users, Clock, Filter, UserPlus } from 'lucide-react'
import type { Event } from '@/types'
import type { GetStaticProps } from 'next'
import { getEvents } from '@/sanity/lib/api'
import { adaptEvent } from '@/sanity/lib/adapters'

// Les données sont maintenant récupérées via getStaticProps depuis Sanity

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const isFullyBooked = Boolean(event.maxParticipants && event.registeredParticipants >= event.maxParticipants)
  const availableSpots = event.maxParticipants ? event.maxParticipants - event.registeredParticipants : null

  const handleRegister = () => {
    if (isFullyBooked) return
    alert(`Inscription à "${event.name}" confirmée !`)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div 
      className={`
        bg-white rounded-xl shadow-md overflow-hidden
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl
        ${isFullyBooked ? 'opacity-75' : ''}
      `}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          className={`
            object-cover transition-transform duration-500 ease-in-out
            hover:scale-110
          `}
        />
        
        {/* Tag Badge */}
        {event.tag && (
          <div className="absolute top-4 left-4 bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-medium">
            {event.tag}
          </div>
        )}
        
        {/* Fully Booked Badge */}
        {isFullyBooked && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-custom-grey px-4 py-2 rounded-lg font-semibold">
              Complet
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-custom-grey mb-2">
            {event.name}
          </h3>
          <p className="text-custom-grey/70 leading-relaxed mb-4">
            {event.description}
          </p>
          
          {/* Event Details */}
          <div className="space-y-2 text-sm text-custom-grey/80">
            <div className="flex items-center space-x-2">
              <Calendar size={16} className="text-accent-blue" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-accent-orange" />
              <span>{event.time}</span>
            </div>
            {event.maxParticipants && (
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-dark-green" />
                <span>
                  {event.registeredParticipants}/{event.maxParticipants} participants
                  {availableSpots && availableSpots > 0 && (
                    <span className="text-accent-orange ml-1">
                      ({availableSpots} places restantes)
                    </span>
                  )}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Price and Registration */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-accent-orange">
            {event.price ? `${event.price.toFixed(2)}€` : 'Gratuit'}
          </div>
          
          <button
            onClick={handleRegister}
            disabled={isFullyBooked}
            className={`
              px-6 py-2 rounded-lg font-semibold transition-all duration-300
              ${!isFullyBooked
                ? 'bg-accent-blue text-white hover:bg-accent-orange hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-accent-blue/50'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
              disabled:hover:transform-none disabled:hover:shadow-none
            `}
          >
            <UserPlus size={18} className="inline mr-2" />
            {isFullyBooked ? 'Complet' : 'S\'inscrire'}
          </button>
        </div>
      </div>
    </div>
  )
}

interface EventsPageProps {
	events: Event[]
	categories: Array<{ id: string; label: string; count: number }>
}

const EventsPage: React.FC<EventsPageProps> = ({ events, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(events)

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    if (categoryId === 'all') {
      setFilteredEvents(events)
    } else {
      setFilteredEvents(events.filter(event => event.category === categoryId))
    }
  }

  return (
    <>
      <Head>
        <title>Événements - Le Ravito | Courses et Ateliers Sportifs à Lyon</title>
        <meta 
          name="description" 
          content="Participez à nos événements sportifs : courses matinales, ateliers nutrition, sorties vélo, rencontres. Rejoignez la communauté sportive du Ravito à Lyon." 
        />
        <meta 
          name="keywords" 
          content="événements sportifs lyon, course lyon, atelier nutrition, club course, trail running, sortie vélo lyon" 
        />
        <link rel="canonical" href="https://leravito.fr/events" />
      </Head>

      <div className="min-h-screen bg-light-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-accent-blue/10 to-accent-orange/10">
          <div className="container-custom text-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="w-20 h-1 bg-accent-orange mx-auto" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-grey">
                Nos Événements
              </h1>
              <div className="w-32 h-0.5 bg-accent-blue mx-auto" />
              <p className="text-lg md:text-xl text-custom-grey/70 leading-relaxed">
                Rejoignez notre communauté sportive ! Courses, ateliers, rencontres : 
                vivez votre passion du sport en groupe au Ravito.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-custom-grey mr-4">
                <Filter size={20} />
                <span className="font-medium">Filtrer :</span>
              </div>
              
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`
                    px-6 py-2 rounded-full font-medium transition-all duration-200
                    ${selectedCategory === category.id
                      ? 'bg-accent-blue text-white shadow-md'
                      : 'bg-gray-100 text-custom-grey hover:bg-accent-blue/10 hover:text-accent-blue'
                    }
                  `}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="section-padding">
          <div className="container-custom">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-custom-grey/60">
                  Aucun événement trouvé dans cette catégorie.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-custom-grey mb-4">
                Rejoignez Notre Communauté
              </h2>
              <p className="text-custom-grey/70 max-w-2xl mx-auto">
                Plus qu'un café, Le Ravito est un lieu de rencontre pour tous les passionnés de sport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-accent-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-custom-grey mb-4">Club de Course</h3>
                <p className="text-custom-grey/70 mb-6">
                  Rejoignez notre club de course pour des sorties régulières et progresser ensemble.
                </p>
                <button className="px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-orange transition-colors duration-200">
                  En savoir plus
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="text-accent-orange" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-custom-grey mb-4">Ateliers Réguliers</h3>
                <p className="text-custom-grey/70 mb-6">
                  Participez à nos ateliers nutrition, récupération et préparation physique.
                </p>
                <button className="px-6 py-3 bg-accent-orange text-white rounded-lg hover:bg-accent-blue transition-colors duration-200">
                  Voir le programme
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-dark-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="text-dark-green" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-custom-grey mb-4">Sorties Découverte</h3>
                <p className="text-custom-grey/70 mb-6">
                  Explorez Lyon et ses environs lors de nos sorties vélo, course et randonnée.
                </p>
                <button className="px-6 py-3 bg-dark-green text-white rounded-lg hover:bg-accent-orange transition-colors duration-200">
                  Prochaines sorties
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default EventsPage

// Récupération des données depuis Sanity au build time
export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
	try {
		// Récupérer les événements depuis Sanity
		const sanityEvents = await getEvents()

		// Adapter les données Sanity vers les types de l'application
		const events = sanityEvents.map(adaptEvent)

		// Créer les catégories avec compteurs
		const categories = [
			{ id: 'all', label: 'Tous', count: events.length },
			{ id: 'course', label: 'Courses', count: events.filter(event => event.category === 'course').length },
			{ id: 'atelier', label: 'Ateliers', count: events.filter(event => event.category === 'atelier').length },
			{ id: 'rencontre', label: 'Rencontres', count: events.filter(event => event.category === 'rencontre').length },
			{ id: 'entrainement', label: 'Entraînements', count: events.filter(event => event.category === 'entrainement').length },
		]

		return {
			props: {
				events,
				categories,
			},
			// Revalider la page toutes les 5 minutes
			revalidate: 300,
		}
	} catch (error) {
		console.error('Erreur lors de la récupération des données des événements:', error)
		
		// Retourner des données vides en cas d'erreur
		return {
			props: {
				events: [],
				categories: [{ id: 'all', label: 'Tous', count: 0 }],
			},
			revalidate: 60, // Retry plus fréquemment en cas d'erreur
		}
	}
}
