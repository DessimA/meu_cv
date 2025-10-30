'use client'

import { motion } from 'framer-motion'
import { School } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

interface EducationProps {
  id: string;
}

const Education = ({ id }: EducationProps) => {
  const { education } = portfolioData;

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
          Formação Acadêmica
          <span className="absolute bottom-0 left-1/2 w-32 md:w-40 h-1 bg-blue-500 transform -translate-x-1/2"></span>
        </motion.h2>
                
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8"> 
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-start space-x-4 md:space-x-6 p-5 md:p-7 bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex-shrink-0 p-2 md:p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <School className="w-6 h-6 md:w-8 md:h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                <p className="text-sm md:text-md font-semibold text-blue-600 dark:text-blue-400 mb-1">{edu.institution}</p>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;