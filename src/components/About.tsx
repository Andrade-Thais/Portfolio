const About = () => (
  <section id="about" className="py-20 bg-white max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center">Sobre mim</h2>

    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      {/* Texto */}
      <div className="flex-1 text-gray-700 leading-relaxed text-lg">
        <p className="mb-6">
          Sou uma profissional apaixonada por tecnologia, com experiência em gerenciamento de projetos e desenvolvimento front-end. Ao longo da minha carreira, coordenei equipes, garanti entregas de qualidade e desenvolvi interfaces funcionais, adquirindo uma visão completa do ciclo de desenvolvimento de soluções digitais.
        </p>
        <p className="mb-6">
          Atualmente, estou em transição de carreira para me dedicar integralmente à tecnologia, explorando novas ferramentas, linguagens e práticas modernas de desenvolvimento. Tenho facilidade em adaptação, gosto de desafios que estimulam o aprendizado contínuo e busco sempre criar soluções que unem criatividade, eficiência e impacto positivo.
        </p>
      </div>
      

      {/* Imagem */}
      <div className="flex-1 flex justify-center">
        <img
          src="/img/perfil.jpg"
          alt="Thaís Andrade"
          className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-blue-100"
        />
      </div>
    </div>

    {/* Experiência, Formação e Resumo */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Experiência Profissional */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Experiência Profissional</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Olos Tecnologia e Sistemas</strong> — Analista de Projetos I (2025 - Atual)</li>
          <li><strong>Autônomo</strong> — Motorista por aplicativo (2019 - 2025)</li>
          <li><strong>PrevTech Equipamentos Veterinários</strong> — Assistente de Compras (2018 - 2019)</li>
        </ul>
      </div>

      {/* Formação Acadêmica */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Formação Acadêmica</h3>
        <ul className="space-y-3 text-gray-700">
          <li><strong>FATEC - ZONA LESTE</strong> — Desenvolvimento de Software Multiplataforma (2023 - Atual)</li>
          <li><strong>FATEC - ZONA LESTE</strong> — Logística (2015 - 2017)</li>
        </ul>
      </div>

      {/* Resumo do Trabalho */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-4 text-blue-600">Resumo do Trabalho</h3>
        <p className="text-gray-700 leading-relaxed">
          Atuei em projetos que envolvem gestão de equipes, criação de interfaces funcionais
          e atualmente desenvolvo aplicações web com foco em Angular, React e boas práticas de desenvolvimento.
        </p>
      </div>
    </div>
  </section>

);

export default About;
