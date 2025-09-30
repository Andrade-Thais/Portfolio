import { PROJECTS } from "../data/projects";

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-100 max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-10">Projetos</h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-600 mt-2">{project.description}</p>
          <p className="text-sm mt-2"><strong>Tecnologias:</strong> {project.technologies.join(", ")}</p>
          <div className="mt-4 flex gap-2">
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                 className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">Código</a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                 className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600">Demo</a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
