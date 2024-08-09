import React from 'react';
import logo from '/home/augusto/Projects/Maitreya-Sangha-Brasil/src/assets/logo01.png'; // Substitua pelo caminho da sua imagem

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-name">Maitreya Sangha Brasil</span>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre Nós</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
