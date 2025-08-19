// Centralisation des images utilisées dans le site Le Ravito
// Permet une gestion facile et une maintenance simplifiée

export const IMAGES = {
  // Images Hero Slider
  hero: {
    // Par défaut, on pointe vers des images locales dans /public
    // Ajoute tes fichiers à public/images/hero/slide1.jpg et slide2.jpg
    slide1: "/images/hero/slide1.png",
    slide2: "/images/hero/slide2.jpg",
  },

  // Images Concept Section
  concept: {
    main: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    local: "/images/concept/local.png",
  },

  // Images Page Le concept
  about: {
    team: "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    member1:
      "https://media.licdn.com/dms/image/v2/D4E03AQG_wJK8Mr25VA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690183387646?e=2147483647&v=beta&t=_fRc_QDBOBguvdc4cHJRhjdCoatpX3yZKuwHIpRT6yw",
    member3:
      "https://media.licdn.com/dms/image/v2/C4E03AQHBUzsVo1BGxA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1552992350499?e=2147483647&v=beta&t=OzRW8tqrbbNONxf-X6XshiAqy7VME_8977A5K4l2Ops",
    member2:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
  },

  // Images Meta (Open Graph, Twitter)
  meta: {
    ogImage:
      "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?q=80&w=1200&h=630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

// Exports pour les types d'images les plus utilisées
export const HERO_IMAGES = IMAGES.hero;
export const ABOUT_IMAGES = IMAGES.about;
export const CONCEPT_IMAGES = IMAGES.concept;
export const META_IMAGES = IMAGES.meta;

// Fallback distants si les images locales ne sont pas présentes
export const HERO_IMAGES_FALLBACK = {
  slide1:
    "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  slide2:
    "https://images.unsplash.com/photo-1436076863939-06870fe779c2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
