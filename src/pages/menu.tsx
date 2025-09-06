import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { adaptMenuItem } from "@/sanity/lib/adapters";
import { getCategories, getMenuItems } from "@/sanity/lib/api";
import type { MenuItem } from "@/types";
import { Filter, ShoppingCart } from "lucide-react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

// Les données sont maintenant récupérées via getStaticProps depuis Sanity

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const handleOrder = () => {
    // Here you would add the item to cart or redirect to ordering system
    alert(`${item.name} ajouté au panier !`);
  };

  return (
    <div
      className={`
        bg-white rounded-xl shadow-md overflow-hidden
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-xl
        ${!item.isAvailable ? "opacity-75" : ""}
      `}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          className={`
            object-cover transition-transform duration-500 ease-in-out
            hover:scale-110
          `}
        />

        {/* Tag Badge */}
        {item.tag && (
          <div className="absolute top-4 left-4 bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-medium">
            {item.tag}
          </div>
        )}

        {/* Availability Badge */}
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-custom-grey px-4 py-2 rounded-lg font-semibold">
              Temporairement indisponible
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-custom-grey mb-2">
            {item.name}
          </h3>
          <p className="text-custom-grey/70 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Price and Order */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-accent-orange">
            {item.price.toFixed(2)}€
          </div>

          <button
            onClick={handleOrder}
            disabled={!item.isAvailable}
            className={`
              px-6 py-2 rounded-lg font-semibold transition-all duration-300
              ${
                item.isAvailable
                  ? "bg-accent-blue text-white hover:bg-accent-orange hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-accent-blue/50"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
              disabled:hover:transform-none disabled:hover:shadow-none
            `}
          >
            <ShoppingCart size={18} className="inline mr-2" />
            Commander
          </button>
        </div>
      </div>
    </div>
  );
};

interface MenuPageProps {
  menuItems: MenuItem[];
  categories: Array<{ id: string; label: string; count: number }>;
}

const MenuPage: React.FC<MenuPageProps> = ({ menuItems, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === "all") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(
        menuItems.filter((item) => item.category === categoryId),
      );
    }
  };

  return (
    <>
      <Head>
        <title>Menu - Le Ravito | Produits Sains pour Sportifs à Lyon</title>
        <meta
          name="description"
          content="Découvrez notre menu spécialement conçu pour les sportifs : smoothies énergisants, plats équilibrés, snacks sains. Produits locaux et bio à Lyon 6ème."
        />
        <meta
          name="keywords"
          content="menu sportif lyon, nutrition sport, smoothie bowl, quinoa, produits bio lyon, collation sportive"
        />
        <link rel="canonical" href="https://leravito.fr/menu" />
      </Head>

      <div className="min-h-screen bg-light-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-accent-blue/10 to-accent-orange/10">
          <div className="container-custom text-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="w-20 h-1 bg-accent-orange mx-auto" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-grey">
                Notre Menu
              </h1>
              <div className="w-32 h-0.5 bg-accent-blue mx-auto" />
              <p className="text-lg md:text-xl text-custom-grey/70 leading-relaxed">
                Des produits sains, locaux et adaptés aux besoins des sportifs.
                Chaque plat est pensé pour vous accompagner dans vos
                performances et votre récupération.
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
                    ${
                      selectedCategory === category.id
                        ? "bg-accent-blue text-white shadow-md"
                        : "bg-gray-100 text-custom-grey hover:bg-accent-blue/10 hover:text-accent-blue"
                    }
                  `}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="section-padding">
          <div className="container-custom">
            {filteredItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-custom-grey/60">
                  Aucun produit trouvé dans cette catégorie.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom text-center">
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
              <h2 className="text-3xl font-bold text-custom-grey mb-4">
                Commande et Livraison
              </h2>
              <p className="text-custom-grey/70 mb-8 max-w-2xl mx-auto">
                Commandez en ligne et récupérez vos produits à l'heure
                souhaitée, ou profitez de notre service de livraison dans Lyon
                6ème.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-accent-orange text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Commander en ligne
                </button>
                <button className="px-8 py-4 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg transition-all duration-300 hover:bg-accent-blue hover:text-white hover:scale-105">
                  Click & Collect
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-sm">
                <div className="space-y-2">
                  <div className="font-semibold text-accent-blue">
                    Click & Collect
                  </div>
                  <div className="text-custom-grey/70">
                    Commandez et récupérez sur place
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-accent-orange">
                    Livraison
                  </div>
                  <div className="text-custom-grey/70">
                    Dans Lyon 6ème sous 30min
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-dark-green">Sur place</div>
                  <div className="text-custom-grey/70">
                    Service à table avec le sourire
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MenuPage;

// Récupération des données depuis Sanity au build time
export const getStaticProps: GetStaticProps<MenuPageProps> = async () => {
  try {
    // Récupérer les données depuis Sanity
    const [sanityMenuItems, sanityCategories] = await Promise.all([
      getMenuItems(),
      getCategories(),
    ]);

    // Adapter les données Sanity vers les types de l'application
    const menuItems = sanityMenuItems.map(adaptMenuItem);

    // Créer les catégories dynamiquement depuis Sanity
    const categories = [{ id: "all", label: "Tout", count: menuItems.length }];

    // Ajouter les catégories Sanity avec leurs compteurs
    sanityCategories.forEach((sanityCategory) => {
      const count = menuItems.filter(
        (item) => item.category === sanityCategory.name,
      ).length;
      if (count > 0) {
        // Seulement ajouter les catégories qui ont des items
        categories.push({
          id: sanityCategory.name,
          label: sanityCategory.name,
          count,
        });
      }
    });

    return {
      props: {
        menuItems,
        categories,
      },
      // Revalider la page toutes les 5 minutes
      revalidate: 300,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données du menu:", error);

    // Retourner des données vides en cas d'erreur
    return {
      props: {
        menuItems: [],
        categories: [{ id: "all", label: "Tout", count: 0 }],
      },
      revalidate: 60, // Retry plus fréquemment en cas d'erreur
    };
  }
};
