
'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

interface CertificationsProps {
  id: string;
}

const Certifications = ({ id }: CertificationsProps) => {
  const { certifications } = portfolioData

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
          Cursos e Certificações
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start space-x-4 transform hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <Award className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{cert.institution}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{cert.date}</p>
                  {cert.details && <p className="text-sm text-gray-600 dark:text-gray-400">{cert.details}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
