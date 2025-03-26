import { motion } from "framer-motion";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description:
        "A fully functional e-commerce website with user authentication, product management, and payment integration.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/ecommerce-platform.jpg",
      liveLink: "https://ecommerce-platform.com",
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      category: "E-commerce",
    },
    {
      id: 2,
      name: "Portfolio Website",
      description:
        "A modern and responsive portfolio website showcasing my skills and projects.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/images/portfolio-website.jpg",
      liveLink: "https://yourportfolio.com",
      githubLink: "https://github.com/yourusername/portfolio-website",
      category: "Showcase",
    },
    {
      id: 3,
      name: "Task Management App",
      description:
        "A task management application with drag-and-drop functionality and real-time updates.",
      technologies: ["React", "Firebase", "Material UI"],
      image: "/images/task-management-app.jpg",
      liveLink: "https://task-management-app.com",
      githubLink: "https://github.com/yourusername/task-management-app",
      category: "Productivity",
    },
    {
      id: 4,
      name: "Blog Platform",
      description:
        "A blogging platform with rich text editing, user authentication, and SEO optimization.",
      technologies: ["Next.js", "Tailwind CSS", "GraphQL", "Prisma"],
      image: "/images/blog-platform.jpg",
      liveLink: "https://blog-platform.com",
      githubLink: "https://github.com/yourusername/blog-platform",
      category: "Blogging",
    },
    {
      id: 5,
      name: "Weather App",
      description:
        "A weather application that provides real-time weather updates and forecasts.",
      technologies: ["React", "OpenWeatherMap API", "Tailwind CSS"],
      image: "/images/weather-app.jpg",
      liveLink: "https://weather-app.com",
      githubLink: "https://github.com/yourusername/weather-app",
      category: "Utility",
    },
  ];

  return (
    <section id="projects" className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            All
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">
            E-commerce
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">
            Showcase
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-300">
            Productivity
          </button>
        </div>
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black-200 rounded-lg shadow-md p-6"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, index: Key | null | undefined) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
