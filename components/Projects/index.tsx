
'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

interface ProjectsProps {
  id: string;
}

const Projects = ({ id }: ProjectsProps) => {
  const { projects } = portfolioData

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Projetos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{project.technologies}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">&#10003;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Github size={16} className="mr-2" />
                  Ver no GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
