import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-500">Início</a></li>
          <li><a href="#about" className="hover:text-blue-500">Sobre</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projetos</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
