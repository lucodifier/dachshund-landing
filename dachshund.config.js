export default {
  global: {
    siteName: 'Dachshund Framework',
    baseUrl: 'https://dachshund.framework.com',
    lang: 'pt-BR',
    favicon: '/favicon.ico',
    css: '/styles.css',
    bundle: '/bundle.js',
    defaultImage: '/og-default.jpg'
  },
  routes: {
    '/': {
      seo: {
        title: 'Home - Dachshund',
        description: 'Site react com framworkr dachshund',
        keywords: 'react, seo, blog, dachshund, framework',
        image: '/og-home.jpg',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Dachshund Framework",
          "url": "https://dachshund-framework.com",
          "description": "Blog sobre desenvolvimento web"
        }
      }
    },   
    '/about': {
      seo: {
        title: 'Sobre - Dachshund Blog',
        description: 'Conheça o Dachshund Framework e nossa missão'
      }
    }
  },
  publicDir: 'public'
};

