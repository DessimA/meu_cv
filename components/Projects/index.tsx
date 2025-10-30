
'use client'

import { motion } from 'framer-motion'
import { Github, CheckCircle } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

interface ProjectsProps {
  id: string;
}

const Projects = ({ id }: ProjectsProps) => {
  const { projects } = portfolioData;

  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10 relative inline-block"
        >
          Meus Projetos
          <span className="absolute bottom-0 left-1/2 w-32 h-1 bg-blue-500 transform -translate-x-1/2"></span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col"
            >
              {/* Optional: Add project image here if available */}
              {/* <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                {project.image ? (
                  <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" />
                ) : (
                  <span>No Image</span>
                )}
              </div> */}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">{project.technologies}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5 mb-5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md"
                  >
                    <Github size={18} className="mr-2" />
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
