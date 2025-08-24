import { Listbox } from '@headlessui/react'

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=E-Commerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Task+App"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts",
      tech: ["React", "OpenWeather API", "Chart.js"],
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Weather"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Portfolio"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with user authentication",
      tech: ["Socket.io", "Express", "MongoDB"],
      image: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Chat+App"
    },
    {
      title: "Recipe Finder",
      description: "A recipe discovery app with search and filtering capabilities",
      tech: ["React", "Spoonacular API", "CSS Grid"],
      image: "https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=Recipe+App"
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden card-hover">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 