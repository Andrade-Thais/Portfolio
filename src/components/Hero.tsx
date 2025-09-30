import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 100); // delay para animação
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Imagem de fundo mais viva */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 filter contrast-125 saturate-150"
        style={{ backgroundImage: "url('/img/fundo_port.png')" }}
      ></div>

      {/* Gradiente sutil para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/30 via-gray-100/20 to-gray-100/10"></div>

      {/* Conteúdo */}
      <div
        className={`relative z-10 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Olá, sou a Thais :)
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 mb-6">
          Gerente de projeto | Desenvolvedora Front-End
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
        >
          Ver Projetos
        </a>
      </div>
    </section>
  );
};

export default Hero;
