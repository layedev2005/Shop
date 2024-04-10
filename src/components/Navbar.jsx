import React, { useState } from 'react';
import "../style/Navbar.css";
import GithubIcon from './icons/GithubIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <GithubIcon size={34}/>
      </div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">Categorie</a>
      </div>
      <div className="contact_nous">
        <a href="#">Nous contacter</a>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}
