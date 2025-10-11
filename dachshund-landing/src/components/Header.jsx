import React, { useState } from 'react';

export default function Header({ navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5">
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/dashund_logo.png"
            alt="Dashund Logo"
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            Dashund
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('features');
            }}
            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#why"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('why');
            }}
            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          >
            Por quê?
          </a>
          <a
            href="#docs"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('docs');
            }}
            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          >
            Exemplos
          </a>
          <a
            href="https://github.com/lucodifier/dashund"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href="#start"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('start');
            }}
            className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Começar
          </a>
        </div>
        
        <button
          className="md:hidden text-gray-900 hover:text-primary-600 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
