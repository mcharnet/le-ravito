import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Users, Leaf, Award, Heart } from 'lucide-react'
import { ABOUT_IMAGES, STORY_IMAGES } from '@/utils/images'

const NotreHistoirePage: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Local & Bio',
      description: 'Nous privilégions les producteurs locaux et les produits biologiques pour vous offrir le meilleur de la région lyonnaise.',
      color: 'text-dark-green bg-dark-green/10'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Le Ravito est plus qu\'un café, c\'est un lieu de rencontre pour tous les passionnés de sport et de bien-être.',
      color: 'text-accent-blue bg-accent-blue/10'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Chaque produit est sélectionné avec soin pour répondre aux besoins nutritionnels des sportifs les plus exigeants.',
      color: 'text-accent-orange bg-accent-orange/10'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre équipe partage votre passion pour le sport et vous accompagne avec des conseils personnalisés.',
      color: 'text-accent-yellow bg-accent-yellow/10'
    }
  ]

  const team = [
    {
      name: 'Charlotte Arbez',
      role: 'Fondatrice & Championne',
      description: 'Traileuse accomplie, Charlotte a créé Le Ravito pour partager sa passion du sport et de l\'alimentation sportive.',
      image: ABOUT_IMAGES.member1
    },
     {
      name: 'Anaïs Holichon',
      role: 'Cheffe de talent',
      description: 'Spécialiste de la cuisine healthy, Anaïs compose nos menus en fonction des saisons et des besoins des sportifs.',
      image: ABOUT_IMAGES.member3
    },
    {
      name: 'Thomas Martin',
      role: 'Coach sportif',
      description: 'Triathlète confirmé, Thomas organise nos événements sportifs et accompagne nos clients dans leurs défis.',
      image: ABOUT_IMAGES.member2
    },
  ]

  const suppliers = [
    {
      name: 'Ferme des Monts d\'Or',
      specialty: 'Produits laitiers bio',
      distance: '15 km'
    },
    {
      name: 'Maraîchers des Traboules',
      specialty: 'Fruits et légumes de saison',
      distance: '8 km'
    },
    {
      name: 'Boulangerie du Vieux Lyon',
      specialty: 'Pains artisanaux',
      distance: '2 km'
    },
    {
      name: 'Torréfaction Lyonnaise',
      specialty: 'Café équitable',
      distance: '5 km'
    }
  ]

  return (
    <>
      <Head>
        <title>Notre Histoire - Le Ravito | L'aventure d'un café bar sportif à Lyon</title>
        <meta 
          name="description" 
          content="Découvrez l'histoire du Ravito, café bar dédié aux sportifs à Lyon. Nos valeurs, notre équipe passionnée et nos partenaires locaux qui font la différence." 
        />
        <meta 
          name="keywords" 
          content="histoire le ravito, équipe lyon, fournisseurs locaux, valeurs café sportif, nutrition lyon" 
        />
        <link rel="canonical" href="https://leravito.fr/notre-histoire" />
      </Head>

      <div className="min-h-screen bg-light-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-accent-blue/10 to-accent-orange/10">
          <div className="container-custom text-center">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="w-20 h-1 bg-accent-orange mx-auto" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-grey">
                Notre Histoire
              </h1>
              <div className="w-32 h-0.5 bg-accent-blue mx-auto" />
              <p className="text-lg md:text-xl text-custom-grey/70 leading-relaxed">
                L'aventure du Ravito commence par une passion commune : 
                créer un lieu où sport, nutrition et convivialité se rencontrent au cœur de Lyon.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={STORY_IMAGES.main}
                    alt="L'équipe du Ravito en action"
                    width={600}
                    height={500}
                    className="object-cover w-full h-96 lg:h-[500px]"
                  />
                </div>
                
                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-light-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-accent-orange mb-2">2023</div>
                  <div className="text-sm text-custom-grey font-medium">Ouverture</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-custom-grey">
                  Une passion, une vision
                </h2>
                
                <div className="space-y-4 text-custom-grey/80 leading-relaxed">
                  <p className="text-lg">
                    Tout a commencé par un constat simple : en tant que sportifs réguliers, 
                    nous avions du mal à trouver un endroit qui combine <span className="text-accent-orange font-semibold">
                    alimentation saine</span>, <span className="text-accent-blue font-semibold">convivialité</span> et 
                    <span className="text-dark-green font-semibold"> passion du sport</span>.
                  </p>
                  
                  <p className="text-lg">
                    Le Ravito est né de cette envie de créer un lieu unique dans le 6ème arrondissement 
                    de Lyon, où chaque coureur, cycliste, triathlète ou amateur de fitness peut se 
                    ressourcer, échanger et découvrir des produits adaptés à ses besoins.
                  </p>
                  
                  <p className="text-lg">
                    Notre approche ? Privilégier le <span className="text-accent-orange font-semibold">
                    local</span>, proposer du <span className="text-accent-blue font-semibold">
                    bio</span>, et créer une véritable <span className="text-dark-green font-semibold">
                    communauté</span> autour des valeurs du sport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-custom-grey mb-6">
                Nos Valeurs
              </h2>
              <p className="text-lg text-custom-grey/70 max-w-2xl mx-auto">
                Ce qui nous guide au quotidien dans notre mission de vous accompagner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-custom-grey mb-4">
                    {value.title}
                  </h3>
                  <p className="text-custom-grey/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-custom-grey mb-6">
                Notre Équipe
              </h2>
              <p className="text-lg text-custom-grey/70 max-w-2xl mx-auto">
                Des passionnés à votre service, partageant votre amour du sport et du bien-être
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-custom-grey mb-2">
                      {member.name}
                    </h3>
                    <div className="text-accent-orange font-medium mb-4">
                      {member.role}
                    </div>
                    <p className="text-custom-grey/70 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Suppliers Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-custom-grey mb-6">
                Nos Partenaires Locaux
              </h2>
              <p className="text-lg text-custom-grey/70 max-w-3xl mx-auto">
                Nous collaborons avec des producteurs et artisans de la région lyonnaise 
                pour vous garantir des produits frais, de qualité et respectueux de l'environnement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {suppliers.map((supplier, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <h3 className="text-lg font-semibold text-custom-grey mb-2">
                    {supplier.name}
                  </h3>
                  <p className="text-accent-blue font-medium mb-2">
                    {supplier.specialty}
                  </p>
                  <div className="text-sm text-custom-grey/60">
                    📍 À {supplier.distance} du Ravito
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container-custom text-center">
            <div className="bg-gradient-to-r from-accent-blue/10 to-accent-orange/10 rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-custom-grey mb-6">
                Rejoignez Notre Aventure
              </h2>
              <p className="text-lg text-custom-grey/70 mb-8 max-w-2xl mx-auto">
                Que vous soyez sportif débutant ou confirmé, venez découvrir Le Ravito 
                et faire partie de notre communauté passionnée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/menu"
                  className="px-8 py-4 bg-accent-orange text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Découvrir notre carte
                </a>
                <a
                  href="/events"
                  className="px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg transition-all duration-300 hover:bg-accent-blue hover:text-white hover:scale-105"
                >
                  Nos événements
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default NotreHistoirePage
