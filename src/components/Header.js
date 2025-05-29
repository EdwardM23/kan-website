import { useState, useEffect } from 'react';
import logo from './../assets/images/logo.jpeg';


function Header() {
  const [isScrolled, setIsScrolled] = useState(window.location.pathname === '/' ? false : true);

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
          <a href="/about-us" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>About Us</a>
          {/* <a href="#services" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>Services</a> */}
          <a href="/projects" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>Projects</a>
          {/* <a href="#contact" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>Contact</a> */}
        </nav>
      </div>
    </header>
  );
}

export default Header; 