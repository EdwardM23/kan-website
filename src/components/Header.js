import { useState, useEffect, useRef } from 'react';
import logo from './../assets/images/main-logo.png';
import { useLanguage } from '../context/LanguageContext';
import { translations as enTranslations } from '../translations/en';
import { translations as idTranslations } from '../translations/id';

// LanguageToggle component
function LanguageToggle({ isScrolled }) {
  const { language, toggleLanguage } = useLanguage();
  return (
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
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(window.location.pathname === '/' ? false : true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const translations = language === 'en' ? enTranslations : idTranslations;
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.location.pathname === '/' ? window.scrollY > heroHeight * 0.8 : true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

        {/* Mobile Navigation Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <LanguageToggle isScrolled={isScrolled} />
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <a href="/about-us" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}> 
            {translations.nav.aboutUs}
          </a>
          {/* <a href="#services" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>Services</a> */}
          <a href="/projects" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}> 
            {translations.nav.projects}
          </a>
          <a href="/contact-us" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}> 
            {translations.nav.contact}
          </a>
          {/* Language Toggle for Desktop */}
          <LanguageToggle isScrolled={isScrolled} />
        </nav>

        {/* Mobile Navigation */}
        <div ref={menuRef} className={`lg:hidden fixed inset-0 bg-white z-20 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="container mx-auto p-4 pt-20 bg-white shadow-lg">
            {/* Close Button */}
            <button 
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none"
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>

            <nav className="flex flex-col space-y-2">
              <a 
                href="/about-us" 
                className="text-xl font-medium text-gray-800 hover:text-gray-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {translations.nav.aboutUs}
              </a>
              <div className="h-px bg-gray-200"></div>
              <a 
                href="/projects" 
                className="text-xl font-medium text-gray-800 hover:text-gray-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {translations.nav.projects}
              </a>
              <div className="h-px bg-gray-200"></div>
              <a 
                href="/contact-us" 
                className="text-xl font-medium text-gray-800 hover:text-gray-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {translations.nav.contact}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 