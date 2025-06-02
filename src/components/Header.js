import { useState, useEffect } from 'react';
import logo from './../assets/images/logo.jpeg';
import { useLanguage } from '../context/LanguageContext';
import { translations as enTranslations } from '../translations/en';
import { translations as idTranslations } from '../translations/id';

function Header() {
  const [isScrolled, setIsScrolled] = useState(window.location.pathname === '/' ? false : true);
  const { language, toggleLanguage } = useLanguage();
  const translations = language === 'en' ? enTranslations : idTranslations;

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.location.pathname === '/' ? window.scrollY > heroHeight * 0.8 : true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/40 backdrop-blur-xl z-10 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-none'}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src={logo} 
            alt="KAN Logo" 
            className={`h-10 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}
          />
        </a>
        <nav className="flex space-x-8">
          <a href="/about-us" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>
            {translations.nav.aboutUs}
          </a>
          {/* <a href="#services" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>Services</a> */}
          <a href="/projects" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>
            {translations.nav.projects}
          </a>
          {/* <a href="#contact" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>Contact</a> */}
          <button 
            onClick={toggleLanguage}
            className={`flex items-center gap-1 px-2 py-1 rounded-full border transition-colors duration-300 ${
              isScrolled 
                ? 'border-gray-300 hover:bg-gray-100 text-gray-800' 
                : 'border-white/30 hover:bg-white/10 text-white'
            }`}
          >
            <img 
              src={language === 'en' ? "https://flagcdn.com/w20/gb.png" : "https://flagcdn.com/w20/id.png"}
              alt={language === 'en' ? "English" : "Indonesian"}
              className="w-4 h-3 object-cover"
            />
            <span className="text-xs font-medium">{language.toUpperCase()}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header; 