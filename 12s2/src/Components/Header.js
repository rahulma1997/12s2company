import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#home" className="bg-blue-300 p-2  hover:text-gray-300">HOME</a></li>
            <li><a href="#about" className="hover:text-gray-300">ABOUT US</a></li>
            <li><a href="#services" className="hover:text-gray-300">SERVICES</a></li>
            <li><a href="#products" className="hover:text-gray-300">PRODUCTS</a></li>
            <li><a href="#career" className="hover:text-gray-300">CAREER</a></li>
            <li><a href="#consulting" className="hover:text-gray-300">CONSULTING</a></li>
            <li><a href="#learning-center" className="hover:text-gray-300">LEARNING CENTRE</a></li>
            <li><a href="#blog" className="hover:text-gray-300">BLOG</a></li>
            <li><a href="#contact" className="hover:text-gray-300">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
