
'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  const { summary } = portfolioData

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Sobre Mim</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {summary}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
