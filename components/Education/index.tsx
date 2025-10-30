'use client'

import { motion } from 'framer-motion'
import { School } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

interface EducationProps {
  id: string;
}

const Education = ({ id }: EducationProps) => {
  const { education } = portfolioData

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
          Formação Acadêmica
        </motion.h2>
                
        <div className="max-w-2xl mx-auto space-y-6"> 
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md"
            >
              <div className="flex-shrink-0">
                <School className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                <p className="text-md font-semibold text-gray-700 dark:text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education