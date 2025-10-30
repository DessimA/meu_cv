
'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

interface ExperienceTimelineProps {
  id: string;
}

const ExperienceTimeline = ({ id }: ExperienceTimelineProps) => {
  const { experience } = portfolioData;

  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10 relative inline-block"
        >
          Experiência Profissional
          <span className="absolute bottom-0 left-1/2 w-32 md:w-40 h-1 bg-blue-500 transform -translate-x-1/2"></span>
        </motion.h2>
        <div className="relative max-w-5xl mx-auto mt-8">
          {/* Linha do tempo vertical para mobile e desktop */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600 transform md:-translate-x-1/2"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`mb-8 flex w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              {/* Ícone na linha do tempo */}
              <div className="absolute left-0 md:left-1/2 z-10 flex items-center justify-center bg-blue-600 shadow-xl w-10 h-10 rounded-full transform -translate-x-1/2">
                <Briefcase className="w-5 h-5 text-white" />
              </div>

              {/* Card de conteúdo */}
              <div className={`flex flex-col w-full md:w-5/12 p-4 md:p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300 ease-in-out
                ${index % 2 === 0 ? 'ml-12 md:ml-0 md:mr-8' : 'ml-12 md:ml-8'}`}
              >
                <h3 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl mb-1">{exp.title}</h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">{exp.company} | {exp.location}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
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
  );
};

export default ExperienceTimeline;
