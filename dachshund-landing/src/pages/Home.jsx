import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function Home({ navigate }) {
  const [copiedCommand, setCopiedCommand] = useState(false);
  const [activeTab, setActiveTab] = useState('build');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  const codeExamples = {
    setup: `// src/pages/Home.jsx
import { useSEO } from 'dachshund';

export default function Home() {
  useSEO({
    title: 'Minha Home Page',
    description: 'Descrição da página',
    keywords: ['react', 'seo'],
    openGraph: {
      title: 'Minha Home',
      description: 'Descrição OG',
      image: '/og-image.jpg'
    }
  });

  return <div>Home</div>;
}`,
    component: `// src/pages/BlogPost.jsx
import { useSEO, useParams } from 'dachshund';

export default function BlogPost() {
  const { id } = useParams();
  const post = getPost(id);

  useSEO({
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      image: post.coverImage
    },
    jsonLd: {
      '@type': 'BlogPosting',
      headline: post.title,
      author: { '@type': 'Person', name: 'Autor' }
    }
  });

  return <article>{post.content}</article>;
}`,
    build: `# Criar projeto
npx dashund create meu-projeto

# Desenvolver
npm run dev

# Build com SEO automático
npm run build

# Resultado:
# dist/
# ├── index.html        ← SEO completo
# ├── blog/
# │   ├── index.html    ← SEO da listagem
# │   └── 1/index.html  ← SEO do post 1
# └── assets/
#     ├── bundle.js
#     └── styles.css

# Deploy (escolha um):
netlify deploy --dir=dist
vercel --prod
# ou arraste para Cloudflare Pages`
  };

  return (
    <Layout navigate={navigate}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-md mb-6 border border-orange-200">
                <span className="text-orange-600 font-semibold text-sm">🐕 Versão 1.0 disponível no NPM!</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                O doguinho que corre atrás do{' '}
                <span className="text-orange-600 relative inline-block">
                  SEO
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C40 4 80 2 120 4C160 6 180 8 198 6" stroke="#f0741b" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                que o React esqueceu
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Framework React <strong className="text-orange-600">ultra-leve (~5kb)</strong> com SEO perfeito, sem necessidade de SSR (Server-Side Rendering).
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="#start"
                  className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Começar Agora
                </a>
                <a
                  href="https://github.com/lucodifier/dashund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  Ver no GitHub
                </a>
              </div>
              
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-orange-600">~5kb</div>
                  <div className="text-sm text-gray-600">Tamanho gzipped</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-orange-600">Zero SSR</div>
                  <div className="text-sm text-gray-600">Apenas SSG</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">SEO Score</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="/dashund_logo.png"
                  alt="Dashund - Framework React com SEO"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                  style={{ animation: 'float 3s ease-in-out infinite' }}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 max-w-2xl mx-auto lg:mx-0">
            <div className="bg-gray-900 text-gray-100 p-6 rounded-xl shadow-2xl flex items-center justify-between">
              <code className="flex-1 font-mono text-sm md:text-base">npx dashund create meu-projeto</code>
              <button
                onClick={() => copyToClipboard('npx dashund create meu-projeto')}
                className="ml-4 text-orange-400 hover:text-orange-300 transition-colors flex-shrink-0"
                title="Copiar comando"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">✨ Por que Dashund?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cansado da complexidade do Next.js só para ter SEO? O Dashund resolve isso de forma simples.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '✨', title: 'Zero SSR', desc: 'Sem servidor Node.js necessário. Funciona com static generation (SSG).' },
              { icon: '🔍', title: 'SEO Perfeito', desc: 'Meta tags, Open Graph, Twitter Cards e JSON-LD automáticos.' },
              { icon: '⚡', title: 'Ultra Leve', desc: '~5kb gzipped - 16x menor que Next.js, sem complexidade.' },
              { icon: '📄', title: 'Static Generation', desc: 'HTML pré-renderizado para cada rota. Perfeito para SEO.' },
              { icon: '🚀', title: 'SPA Navigation', desc: 'Navegação instantânea sem reload de página. Melhor UX.' },
              { icon: '📝', title: 'Dynamic Routes', desc: 'Suporte completo a rotas dinâmicas como /blog/:id.' },
              { icon: '💻', title: 'CLI Integrado', desc: 'Gerador de projetos como create-react-app. Fácil e rápido.' },
              { icon: '☁️', title: 'Deploy Simples', desc: 'Funciona em qualquer CDN: Netlify, Vercel, Cloudflare Pages.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group">
                <div className="text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">🤔 Por que usar Dashund?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A solução perfeita para quem quer SEO sem complicação</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">😫</span>
                <h3 className="text-2xl font-bold text-red-600">O Problema</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Next.js é complexo demais só para ter SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Necessita servidor Node.js rodando ($$)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Bundle enorme: ~80kb+ apenas do framework</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Curva de aprendizado íngreme</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  <span>Create React App não tem SEO nativo</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary-500 to-accent-600 p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🐕</span>
                <h3 className="text-2xl font-bold">A Solução: Dashund</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Simples como Create React App</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Deploy em qualquer CDN (grátis!)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Apenas ~5kb gzipped (16x menor!)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Aprenda em 5 minutos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>SEO perfeito automático</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '💰', title: 'Economia Real', desc: 'Sem custos de servidor. Deploy gratuito em CDN.' },
              { icon: '⚡', title: 'Performance', desc: 'Sites ultrarrápidos com static generation.' },
              { icon: '🎯', title: 'SEO 100%', desc: 'Google, Facebook, Twitter - todos felizes.' },
              { icon: '🚀', title: 'Deploy Fácil', desc: 'Build e deploy em minutos, não horas.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section id="docs" className="py-20 px-4 md:px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💻 Super Simples de Usar</h2>
            <p className="text-xl text-gray-300">Veja como é fácil criar um site React com SEO perfeito</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            <button
              onClick={() => setActiveTab('setup')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'setup'
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Setup Básico
            </button>
            <button
              onClick={() => setActiveTab('component')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'component'
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Componente com SEO
            </button>
            <button
              onClick={() => setActiveTab('build')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'build'
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Build para Produção
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => copyToClipboard(codeExamples[activeTab])}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{copiedCommand ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
            
            <div className="bg-gray-950 rounded-xl p-6 overflow-x-auto shadow-2xl border border-gray-800">
              <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">
                  {activeTab === 'setup' ? 'Home.jsx' : activeTab === 'component' ? 'BlogPost.jsx' : 'Build para Produção.bash'}
                </span>
              </div>
              <pre className="text-sm md:text-base">
                <code className="font-mono text-gray-100 whitespace-pre">{codeExamples[activeTab]}</code>
              </pre>
            </div>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: '🎣', title: 'Hooks Poderosos', desc: 'useSEO, useParams, useNavigate' },
              { icon: '🛣️', title: 'Rotas Dinâmicas', desc: '/blog/:id, /user/:name' },
              { icon: '📊', title: 'JSON-LD Schema', desc: 'Structured data automático' }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">📁 Templates Prontos</h2>
            <p className="text-xl text-gray-600">Comece com um template completo e pronto para produção</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg border-2 border-orange-200 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Blog Template</h3>
                <span className="bg-orange-600 text-white text-xs px-3 py-1 rounded-full font-semibold">Padrão</span>
              </div>
              <p className="text-gray-700 mb-6">Blog completo com Tailwind CSS, páginas pré-configuradas e SEO otimizado.</p>
              <div className="space-y-3 mb-6">
                {[
                  'Home Page com hero e features',
                  'Blog Listing com cards',
                  'Rotas dinâmicas (/blog/:id)',
                  'Tailwind CSS configurado',
                  'SEO completo e automático'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                npx dashund create meu-blog
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-gray-200 flex flex-col justify-center items-center text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mais Templates em Breve</h3>
              <p className="text-gray-600 mb-6">Estamos trabalhando em mais templates incríveis:</p>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  { icon: '📱', text: 'Landing Page' },
                  { icon: '🛍️', text: 'E-commerce' },
                  { icon: '📚', text: 'Documentação' },
                  { icon: '💼', text: 'Portfolio' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://github.com/lucodifier/dashund"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
              >
                Contribua no GitHub
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              Estrutura do Projeto
            </h4>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-xl font-mono text-sm overflow-x-auto">
              <pre>{`meu-blog/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── About.jsx
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   ├── data/
│   │   └── posts.js
│   ├── App.jsx
│   └── index.js
├── public/
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── dashund.config.js`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">📊 Comparação</h2>
            <p className="text-xl text-gray-600">Veja como o Dashund se compara com outras soluções</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
                  <th className="px-4 md:px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-4 md:px-6 py-4 text-center font-bold">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-1">🐕</span>
                      <span>Dashund</span>
                    </div>
                  </th>
                  <th className="px-4 md:px-6 py-4 text-center font-bold hidden md:table-cell">Next.js</th>
                  <th className="px-4 md:px-6 py-4 text-center font-bold hidden lg:table-cell">Create React App</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'Tamanho', dashund: '~5kb', next: '~80kb', cra: '~45kb', dashundClass: 'text-green-600 font-bold' },
                  { feature: 'SSR', dashund: '❌ SSG', next: '✅', cra: '❌', dashundClass: 'text-orange-600 font-bold' },
                  { feature: 'SEO', dashund: '✅', next: '✅', cra: '❌', dashundClass: 'text-green-600 font-bold text-xl' },
                  { feature: 'Servidor Node', dashund: '❌', next: '✅', cra: '❌', dashundClass: 'text-green-600 font-bold text-xl' },
                  { feature: 'Deploy', dashund: 'Qualquer CDN', next: 'Vercel/Node', cra: 'Qualquer CDN', dashundClass: 'text-green-600 font-bold' },
                  { feature: 'Complexidade', dashund: '🟢 Baixa', next: '🟡 Média', cra: '🟢 Baixa', dashundClass: 'text-green-600 font-bold' },
                  { feature: 'Learning Curve', dashund: '🟢 Suave', next: '🟡 Íngreme', cra: '🟢 Suave', dashundClass: 'text-green-600 font-bold' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-orange-50 transition-colors">
                    <td className="px-4 md:px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="px-4 md:px-6 py-4 text-center">
                      <span className={row.dashundClass}>{row.dashund}</span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-center text-gray-600 hidden md:table-cell">{row.next}</td>
                    <td className="px-4 md:px-6 py-4 text-center text-gray-600 hidden lg:table-cell">{row.cra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">16x</div>
              <div className="text-gray-700">Menor que Next.js</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$0</div>
              <div className="text-gray-700">Custo de servidor</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5min</div>
              <div className="text-gray-700">Para aprender</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="start" className="py-20 px-4 md:px-6 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🚀 Pronto para Começar?</h2>
            <p className="text-xl text-orange-100">Crie seu primeiro projeto Dashund em menos de 1 minuto</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: '1',
                title: 'Criar Projeto',
                desc: 'Use o CLI para gerar um projeto completo',
                code: 'npx dashund create meu-app'
              },
              {
                step: '2',
                title: 'Desenvolver',
                desc: 'Inicie o servidor de desenvolvimento',
                code: 'cd meu-app\nnpm install\nnpm run dev'
              },
              {
                step: '3',
                title: 'Deploy',
                desc: 'Build e deploy em qualquer CDN',
                code: 'npm run build\n# Deploy dist/ folder'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="bg-white text-primary-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-orange-100 mb-4">{item.desc}</p>
                <div className="bg-gray-900/50 p-3 rounded-lg font-mono text-sm whitespace-pre-line">
                  {item.code}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 inline-block">
              <div className="mb-6">
                <div className="text-6xl mb-4 animate-bounce-slow">🐕</div>
                <h3 className="text-2xl font-bold mb-2">Comece Agora!</h3>
                <p className="text-orange-100">Instale o Dashund e crie sites incríveis com SEO perfeito</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/lucodifier/dashund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  Ver no GitHub
                </a>
                <a
                  href="https://www.npmjs.com/package/dashund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                  </svg>
                  Ver no NPM
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: '📚', text: 'Documentação', href: 'https://github.com/lucodifier/dashund' },
              { icon: '❓', text: 'Issues', href: 'https://github.com/lucodifier/dashund/issues' },
              { icon: '💬', text: 'Discussões', href: 'https://github.com/lucodifier/dashund/discussions' }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-100 hover:text-white transition-colors flex items-center"
              >
                <span className="mr-1">{link.icon}</span>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
