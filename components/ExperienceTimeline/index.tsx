
'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

interface ExperienceTimelineProps {
  id: string;
}

const ExperienceTimeline = ({ id }: ExperienceTimelineProps) => {
  const { experience } = portfolioData

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Experiência Profissional
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Linha do tempo: posicionada à esquerda em telas pequenas, centralizada em telas maiores */}
          <div className="absolute left-6 w-0.5 h-full bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"></div>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              // Layout responsivo: simples em mobile, alternado em desktop
              className={`mb-8 flex items-start w-full md:items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Espaçador para layout de desktop (oculto em mobile) */}
              <div className="hidden md:block w-5/12"></div>

              {/* Ícone na linha do tempo */}
              <div className="z-20 flex-shrink-0 flex items-center justify-center bg-blue-600 shadow-xl w-12 h-12 rounded-full">
                <Briefcase className="w-6 h-6 text-white" />
              </div>

              {/* Card de conteúdo */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-xl w-full ml-4 md:w-5/12 md:ml-0 px-6 py-4">
                <h3 className="font-bold text-gray-900 dark:text-white text-xl">{exp.title}</h3>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company} | {exp.location}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
