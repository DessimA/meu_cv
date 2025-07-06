'use client';

import { portfolioData } from '@/data/portfolio';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Projects() {
  return (
    <div className="section-container">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gradient mb-4">Projetos em Destaque</h2>
        <p className="lead max-w-3xl mx-auto">
          Uma seleção de trabalhos que demonstram minhas habilidades em resolver problemas, construir interfaces e desenvolver lógicas de negócio.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {portfolioData.projects.map((project) => (
          <motion.div
            key={project.name}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="card flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-2 text-primary-accent">{project.name}</h3>
              <span className="inline-block bg-secondary-accent/10 text-secondary-accent text-xs font-bold px-3 py-1 rounded-full mb-4">
                {project.type}
              </span>
              <p className="text-text-secondary mb-6">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3">Tecnologias:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-border-color text-text-secondary text-xs font-medium px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-6 border-t border-border-color flex items-center gap-4">
              <a href={`https://github.com/joseandersonp/${project.github}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" /></svg>
                <span>Código Fonte</span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}