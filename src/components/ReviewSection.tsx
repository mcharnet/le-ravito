import React from 'react'
import { Star, Quote } from 'lucide-react'
import type { Review } from '@/types'

const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Marie L.',
    review: 'Parfait pour mon petit-déjeuner avant ma course matinale ! Les smoothies sont délicieux et le personnel comprend vraiment les besoins des sportifs.',
    rating: 5,
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Thomas R.',
    review: 'Enfin un café qui propose des collations adaptées après l\'entraînement. L\'ambiance est conviviale et les produits sont de qualité.',
    rating: 5,
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Sophie M.',
    review: 'Le Ravito est devenu mon QG après mes sorties vélo. L\'équipe est passionnée et les conseils nutritionnels sont précieux.',
    rating: 4,
    date: '2024-01-08'
  },
  {
    id: '4',
    name: 'Pierre K.',
    review: 'Lieu idéal pour organiser nos réunions de club de course. Espace sympa, produits locaux, et une vraie culture du sport !',
    rating: 5,
    date: '2024-01-05'
  },
  {
    id: '5',
    name: 'Julie D.',
    review: 'Super concept ! J\'adore pouvoir commander en click & collect avant ma séance de sport. Pratique et savoureux.',
    rating: 4,
    date: '2024-01-03'
  },
  {
    id: '6',
    name: 'Antoine B.',
    review: 'L\'équipe du Ravito nous accueille toujours avec le sourire. Les barres énergétiques maison sont un délice !',
    rating: 5,
    date: '2024-01-01'
  }
]

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={`
            ${star <= rating 
              ? 'text-accent-yellow fill-current' 
              : 'text-gray-300'
            }
          `}
        />
      ))}
    </div>
  )
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div 
      className={`
        bg-light-white p-6 rounded-xl shadow-md border-l-4 border-accent-orange
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl hover:border-accent-blue
      `}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="text-accent-blue/30" size={32} />
      </div>

      {/* Review Text */}
      <blockquote className="text-custom-grey leading-relaxed mb-4">
        "{review.review}"
      </blockquote>

      {/* Separator */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          {/* Author Info */}
          <div>
            <div className="font-semibold text-custom-grey">{review.name}</div>
            <div className="text-sm text-custom-grey/60">
              {new Date(review.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long'
              })}
            </div>
          </div>

          {/* Rating */}
          <StarRating rating={review.rating} />
        </div>
      </div>
    </div>
  )
}

const ReviewSection: React.FC = () => {
  const averageRating = reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="space-y-4">
            <div className="w-20 h-1 bg-accent-orange mx-auto" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-grey">
              Ils parlent de nous
            </h2>
            <div className="w-32 h-0.5 bg-accent-blue mx-auto" />
          </div>
          
          {/* Overall Rating */}
          <div className="mt-8 flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-3">
              <StarRating rating={Math.round(averageRating)} />
              <span className="text-2xl font-bold text-custom-grey">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <p className="text-custom-grey/60">
              Basé sur {reviewsData.length} avis clients
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-accent-blue/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-custom-grey mb-4">
              Vous avez testé Le Ravito ?
            </h3>
            <p className="text-custom-grey/70 mb-6">
              Partagez votre expérience et aidez d'autres sportifs à nous découvrir !
            </p>
            <button 
              className={`
                px-8 py-3 bg-accent-orange text-light-white font-semibold rounded-lg
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-lg hover:bg-accent-orange/90
                focus:outline-none focus:ring-4 focus:ring-accent-orange/50
              `}
            >
              Laisser un avis
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewSection
