import { Html, Head, Main, NextScript } from 'next/document'
import { META_IMAGES } from '@/utils/images'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0097B2" />
        <meta name="description" content="Le Ravito - Votre café bar dédié aux sportifs à Lyon. Produits sains, locaux et adaptés aux besoins des athlètes." />
        <meta name="keywords" content="café, bar, sportifs, Lyon, ravitaillement, course, vélo, nutrition, local, bio" />
        <meta name="author" content="Le Ravito" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Le Ravito - Café Bar Sportif à Lyon" />
        <meta property="og:description" content="Votre café bar dédié aux sportifs à Lyon. Produits sains, locaux et adaptés aux besoins des athlètes." />
        <meta property="og:image" content={META_IMAGES.ogImage} />
        <meta property="og:url" content="https://leravito.fr" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Le Ravito - Café Bar Sportif à Lyon" />
        <meta name="twitter:description" content="Votre café bar dédié aux sportifs à Lyon. Produits sains, locaux et adaptés aux besoins des athlètes." />
        <meta name="twitter:image" content={META_IMAGES.ogImage} />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
