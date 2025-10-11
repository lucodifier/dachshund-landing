import Dachshund from '@dachshund_framework/core';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';

const app = new Dachshund({
  baseUrl: 'http://localhost:5173',
  scrollToTop: true
});

// Rota Home
app.route('/', Home, {
  title: 'Dashund - O doguinho que corre atrás do SEO que o React esqueceu',
  description: 'Framework React ultra-leve (~5kb) com SEO perfeito, sem necessidade de SSR. Deploy simples em qualquer CDN.',
  keywords: ['dashund', 'react', 'seo', 'framework', 'static generation', 'spa', 'javascript', 'nextjs alternative'],
  image: '/dashund_logo.png',
  openGraph: {
    title: 'Dashund - O doguinho que corre atrás do SEO que o React esqueceu',
    description: 'Framework React ultra-leve (~5kb) com SEO perfeito, sem necessidade de SSR. Deploy simples em qualquer CDN.',
    type: 'website',
    image: '/dashund_logo.png'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashund - O doguinho que corre atrás do SEO que o React esqueceu',
    description: 'Framework React ultra-leve (~5kb) com SEO perfeito, sem necessidade de SSR. Deploy simples em qualquer CDN.',
    image: '/dashund_logo.png'
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Dashund',
    description: 'Framework React ultra-leve com SEO perfeito',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    author: {
      '@type': 'Person',
      name: 'Luciano Rieth',
      url: 'https://github.com/lucodifier'
    }
  }
});

app.route('/blog', Blog, {
  title: 'Blog - Dachshund Framework',
  description: 'Artigos sobre React, SEO e desenvolvimento web'
});

app.route('/blog/:id', BlogPost, {
  title: 'Blog Post - Dachshund Framework',
  description: 'Leia nossos artigos sobre React e desenvolvimento web'
});

app.route('/about', About, {
  title: 'Sobre - Dachshund Framework',
  description: 'Conheça o Dachshund Framework e nossa missão'
});

export default app;
