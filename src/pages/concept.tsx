import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ABOUT_IMAGES, CONCEPT_IMAGES } from "@/utils/images";
import { Award, Heart, Leaf, Users, Zap, Smile } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const NotreHistoirePage: React.FC = () => {
  const values = [
    {
      icon: Zap,
      title: "Le sport",
      description: "Au cœur de notre mode de fonctionnement",
      color: "text-accent-orange bg-accent-orange/10",
    },
    {
      icon: Smile,
      title: "La joie",
      description: "Dans chacun de nos événements",
      color: "text-accent-yellow bg-accent-yellow/10",
    },
    {
      icon: Leaf,
      title: "Une nourriture locale de qualité",
      description:
        "Chaque produit est sélectionné avec soin pour répondre aux besoins du sportif",
      color: "text-dark-green bg-dark-green/10",
    },
    {
      icon: Users,
      title: "Une communauté",
      description: "Lieu de rencontre entre passionnés",
      color: "text-accent-blue bg-accent-blue/10",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Le concept - Le Ravito | L'aventure d'un café bar sportif à Lyon
        </title>
        <meta
          name="description"
          content="Découvrez l'histoire du Ravito, café bar dédié aux sportifs à Lyon. Nos valeurs, notre équipe passionnée et nos partenaires locaux qui font la différence."
        />
        <meta
          name="keywords"
          content="histoire le ravito, équipe lyon, fournisseurs locaux, valeurs café sportif, nutrition lyon"
        />
        <link rel="canonical" href="https://leravito.fr/concept" />
      </Head>

      <div className="min-h-screen bg-light-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-accent-blue/10 to-accent-orange/10">
          <div className="container-custom text-center">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="w-20 h-1 bg-accent-orange mx-auto" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-grey">
                Le concept
              </h1>
              <div className="w-32 h-0.5 bg-accent-blue mx-auto" />
              <p className="text-lg md:text-xl text-custom-grey/70 leading-relaxed">
                L’aventure du Ravito commence par un trio gagnant : créer un
                lieu ou running, nutrition et joie de vivre se rencontrent au
                cœur de Lyon.
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
                    src={CONCEPT_IMAGES.main}
                    alt="L'équipe du Ravito en action"
                    width={600}
                    height={500}
                    className="object-cover w-full h-96 lg:h-[500px]"
                  />
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6 bg-light-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-accent-orange mb-2">
                    2025
                  </div>
                  <div className="text-sm text-custom-grey font-medium">
                    Ouverture
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-custom-grey">
                  Quand la passion prend le départ
                </h2>

                <div className="space-y-4 text-custom-grey/80 leading-relaxed">
                  <p className="text-lg">
                    Tout est parti d'un constat simple : après nos runs,
                    impossible de trouver{" "}
                    <span className="text-accent-orange font-semibold">
                      LE spot parfait
                    </span>{" "}
                    pour se poser et prolonger le plaisir. Un endroit proche des
                    sessions d'entrainements où les coureurs puissent refaire le
                    monde encore en baskets, recharger les batteries avec du bon
                    carburant et partager un réel moment de convivialité.
                  </p>

                  <p className="text-lg">
                    Alors, Le Ravito a été créé: un QG unique, en{" "}
                    <span className="text-accent-blue font-semibold">
                      plein cœur du 6ème
                    </span>
                    , à deux foulées du Parc de la Tête d'Or et des quais. Ici,
                    les runners peuvent enfin se croiser, se poser, papoter… et
                    parfois même prolonger la soirée jusqu'au bout de la nuit -
                    tenue encore parfumée à l'effort.
                  </p>

                  <p className="text-lg">
                    Au menu : produits locaux, plats qui tiennent la distance,
                    cafés qui réveillent, smoothies qui boostent… et surtout,
                    une ambiance où l'on{" "}
                    <span className="text-accent-orange font-semibold">
                      rit
                    </span>{" "}
                    autant qu'on{" "}
                    <span className="text-accent-orange font-semibold">
                      court
                    </span>
                    . Le Ravito, c'est plus qu'un café : c'est la{" "}
                    <span className="text-accent-blue font-semibold">
                      ligne d'arrivée de votre sortie
                    </span>{" "}
                    et le{" "}
                    <span className="text-dark-green font-semibold">
                      point de départ d'une vraie communauté
                    </span>{" "}
                    de coureurs lyonnais.
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
                Ce qui nous guide au quotidien dans notre mission de vous
                accompagner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
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

        {/* Founder Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/concept/Chacha.jpeg"
                    alt="Charlotte, fondatrice du Ravito"
                    width={600}
                    height={500}
                    className="object-cover w-full h-96 lg:h-[500px]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-custom-grey">
                  Derrière Le Ravito, c'est moi, Charlotte
                </h2>
                <p className="text-lg text-accent-orange font-semibold">
                  Traileuse toujours partante pour l'aventure !
                </p>

                <div className="space-y-4 text-custom-grey/80 leading-relaxed">
                  <p className="text-lg">
                    Après 5 ans dans le marketing, j'ai décidé de foncer vers ce
                    qui me fait vraiment vibrer : le running, les rencontres et
                    les bons petits plats.
                  </p>

                  <p className="text-lg">
                    Le trail occupe une place précieuse dans ma vie, notamment
                    grâce à mon club So Trail Lyon, avec qui je partage des
                    moments forts, sur les sentiers comme en dehors. Courir,
                    c'est pour moi autant une{" "}
                    <span className="text-accent-orange font-semibold">
                      passion
                    </span>{" "}
                    qu'un vecteur de{" "}
                    <span className="text-accent-blue font-semibold">
                      lien social
                    </span>{" "}
                    et de{" "}
                    <span className="text-dark-green font-semibold">
                      bien-être
                    </span>
                    .
                  </p>

                  <p className="text-lg">
                    En arrivant à Lyon en 2022, j'ai adoré voir l'engouement
                    pour la course, mais j'ai vite remarqué un manque : un vrai{" "}
                    <span className="text-accent-orange font-semibold">
                      point de ralliement
                    </span>{" "}
                    pour prolonger l'esprit d'équipe après l'effort.
                  </p>

                  <p className="text-lg">
                    Alors j'ai imaginé{" "}
                    <span className="text-accent-blue font-semibold">
                      Le Ravito
                    </span>{" "}
                    : un lieu chaleureux où les coureurs se retrouvent,
                    partagent, rechargent les batteries et cultivent les valeurs
                    du trail — liberté, respect du corps et de la nature,
                    plaisir et convivialité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Partner Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/concept/ferme.jpg"
                    alt="La Ferme du Ravito à Sainte-Catherine"
                    width={600}
                    height={500}
                    className="object-cover w-full h-96 lg:h-[500px]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-custom-grey">
                  Le Ravito nourrit par La Ferme du Ravito !
                </h2>

                <div className="space-y-4 text-custom-grey/80 leading-relaxed">
                  <p className="text-lg">
                    Adrien et Victor, deux copains rugbymen et traileurs
                    passionnés de nature, cultivent à{" "}
                    <span className="text-accent-orange font-semibold">
                      Sainte-Catherine
                    </span>
                    , au cœur des Monts du Lyonnais, une ferme en pleine
                    transition vers l'agriculture{" "}
                    <span className="text-dark-green font-semibold">
                      biologique
                    </span>
                    . Sur leurs 30 hectares, ils élèvent des vaches Tarines pour
                    confectionner de savoureux{" "}
                    <span className="text-accent-blue font-semibold">
                      fromages
                    </span>{" "}
                    fermiers et prennent soin d'une grande variété de{" "}
                    <span className="text-dark-green font-semibold">
                      légumes
                    </span>{" "}
                    et{" "}
                    <span className="text-dark-green font-semibold">
                      petits fruits
                    </span>
                    . Leur mission : offrir des produits sains,{" "}
                    <span className="text-accent-orange font-semibold">
                      riches en nutriments
                    </span>{" "}
                    et surtout pleins de{" "}
                    <span className="text-accent-orange font-semibold">
                      goût
                    </span>
                    .
                  </p>

                  <p className="text-lg">
                    C'est exactement ce que vous retrouvez dans vos assiettes au
                    Ravito : des plats généreux, équilibrés et gourmands,
                    préparés à partir de leurs{" "}
                    <span className="text-dark-green font-semibold">
                      récoltes fraîches
                    </span>{" "}
                    — la meilleure façon de faire le plein d'{" "}
                    <span className="text-accent-orange font-semibold">
                      énergie
                    </span>{" "}
                    et de{" "}
                    <span className="text-accent-orange font-semibold">
                      vitalité
                    </span>
                    .
                  </p>

                  <p className="text-lg">
                    Et parce que le{" "}
                    <span className="text-accent-blue font-semibold">
                      circuit court
                    </span>
                    , c'est aussi une histoire de partage, nous proposerons
                    chaque semaine des{" "}
                    <span className="text-dark-green font-semibold">
                      paniers
                    </span>{" "}
                    de fruits et légumes de la{" "}
                    <span className="text-dark-green font-semibold">
                      ferme à emporter
                    </span>
                    . De quoi prolonger le plaisir à la maison et rappeler qu'un
                    corps de sportif mérite bien mieux qu'un simple gel
                    énergétique !
                  </p>

                  <p className="text-lg">
                    Au Ravito, on mange, on partage et on repart avec le
                    meilleur pour notre{" "}
                    <span className="text-dark-green font-semibold">santé</span>
                    .
                  </p>

                  <blockquote className="text-lg italic text-custom-grey/70 border-l-4 border-accent-orange pl-6 mt-6">
                    "Que ton alimentation soit ta première médecine." —
                    Hippocrate
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suppliers Cards Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-custom-grey mb-4">
                Localisation des fournisseurs
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-custom-grey mb-2">
                  La ferme du Ravito
                </h4>
                <p className="text-accent-blue font-medium mb-2">
                  Produits bio & fromages fermiers
                </p>
                <div className="text-sm text-custom-grey/60">
                  📍 À 35 km du Ravito
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-custom-grey mb-2">
                  Boulangerie Alma
                </h4>
                <p className="text-accent-blue font-medium mb-2">
                  Pains artisanaux
                </p>
                <div className="text-sm text-custom-grey/60">
                  📍 À 1 km du Ravito
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-custom-grey mb-2">
                  Brasserie Dulion
                </h4>
                <p className="text-accent-blue font-medium mb-2">
                  Bières artisanales
                </p>
                <div className="text-sm text-custom-grey/60">
                  📍 À 8 km du Ravito
                </div>
              </div>
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
                Que vous soyez sportif débutant ou confirmé, venez découvrir Le
                Ravito et faire partie de notre communauté passionnée.
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
  );
};

export default NotreHistoirePage;
