# Dachshund Landing Page - Setup Completo

## ✅ O que foi feito

Este projeto foi criado usando o comando `npx dachshund create dachshund-landing` e depois customizado para replicar exatamente a landing page original do Dashund.

### 📋 Alterações Realizadas

1. **Home.jsx** - Página principal completamente replicada com todas as seções:
   - Hero Section com logo animado
   - Features Section
   - Why Section (Problema vs Solução)
   - Code Examples com tabs interativos
   - Templates Section
   - Comparison Table
   - CTA Section (Call to Action)

2. **Header.jsx** - Navegação fixa com:
   - Logo Dashund
   - Links para seções
   - Scroll suave entre seções
   - Menu mobile responsivo

3. **Footer.jsx** - Footer completo com:
   - Logo e descrição
   - Links organizados em colunas
   - Links para redes sociais
   - Copyright

4. **Tailwind Config** - Configuração customizada:
   - Cores laranja/âmbar (primary e accent)
   - Fontes: Inter e Fira Code
   - Animação bounce-slow customizada

5. **Styles.css** - Estilos globais:
   - Import das fontes Google
   - Scroll suave
   - Utilitários customizados
   - Classes gradient-text

6. **App.jsx** - SEO completo:
   - Meta tags
   - Open Graph
   - Twitter Cards
   - JSON-LD Schema

7. **Assets** - Logo copiado:
   - dashund_logo.png em /public/

## 🚀 Como Usar

### Desenvolvimento
```bash
npm run dev
```

### Build para Produção
```bash
npm run build
```

### Deploy
O diretório `dist/` gerado pode ser deployado em qualquer CDN:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- etc.

## 📁 Estrutura do Projeto

```
dachshund-landing/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          ← Landing page completa
│   │   ├── Blog.jsx          ← Exemplo de blog
│   │   ├── BlogPost.jsx      ← Exemplo de post
│   │   └── About.jsx         ← Sobre
│   ├── components/
│   │   ├── Layout.jsx        ← Layout base
│   │   ├── Header.jsx        ← Header customizado
│   │   ├── Footer.jsx        ← Footer customizado
│   │   └── Card.jsx          ← Componente Card
│   ├── data/
│   │   └── posts.js          ← Dados de exemplo
│   ├── App.jsx               ← Configuração de rotas e SEO
│   └── index.js              ← Entry point
├── public/
│   ├── dashund_logo.png      ← Logo
│   └── styles.css            ← Estilos globais
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js        ← Config customizado
└── dachshund.config.js       ← Config do framework

```

## 🎨 Características

- ✅ 100% Responsivo
- ✅ SEO Completo e Automático
- ✅ Navegação SPA sem reload
- ✅ Scroll suave entre seções
- ✅ Animações e transições
- ✅ Dark code blocks
- ✅ Copy-to-clipboard em comandos
- ✅ Tabs interativos para exemplos de código

## 🔧 Tecnologias

- React
- Dachshund Framework
- Vite
- Tailwind CSS
- PostCSS

## 📝 Notas

- O projeto está pronto para desenvolvimento e produção
- Todas as imagens e assets foram copiados
- O SEO está configurado com Open Graph, Twitter Cards e JSON-LD
- As cores seguem o tema laranja/âmbar do Dashund

Feito com ❤️ e 🐕

