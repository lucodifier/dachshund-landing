import Dachshund from '@dachshund_framework/core';
import Home from './pages/Home';
import About from './pages/About';

const app = new Dachshund({
  baseUrl: 'https://dachshund-framework.com',
  scrollToTop: true
});

// Rotas
app.route('/', Home, {
  title: 'Home - Dachshund Framework',
  description: 'Framework React ultra-leve com SEO perfeito, sem SSR',
  keywords: 'dachshund, react, seo, framework',
  image: '/og-home.jpg'
});


app.route('/about', About, {
  title: 'Sobre - Dachshund Framework',
  description: 'Conheça o Dachshund Framework e nossa missão'
});

export default app;

