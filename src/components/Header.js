import { useState, useEffect } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 flex items-center bg-white/40 backdrop-blur-xl justify-between px-8 py-4 z-10 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-none'}`}>
      <div className={`text-3xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>KAN</div>
      <nav className="flex space-x-8">
        <a href="#about" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>About Us</a>
        <a href="#services" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>Services</a>
        <a href="#projects" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>Projects</a>
        <a href="#contact" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white hover:text-white'}`}>Contact</a>
      </nav>
    </header>
  );
}

export default Header; 