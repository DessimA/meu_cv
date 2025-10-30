
'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, GitMerge, Settings, BrainCircuit, Wind } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

interface SkillsCloudProps {
  id: string;
}

const categoryIcons: { [key: string]: React.ReactElement } = {
  Linguagens: <Code className="w-5 h-5 mr-2 text-blue-500" />,
  'Frameworks & Bibliotecas': <Code className="w-5 h-5 mr-2 text-green-500" />,
  'Banco de Dados': <Database className="w-5 h-5 mr-2 text-yellow-500" />,
  'Cloud & DevOps': <Cloud className="w-5 h-5 mr-2 text-purple-500" />,
  'Metodologias & Conceitos': <GitMerge className="w-5 h-5 mr-2 text-red-500" />,
  Ferramentas: <Settings className="w-5 h-5 mr-2 text-indigo-500" />,
  'Sistemas Operacionais': <Wind className="w-5 h-5 mr-2 text-teal-500" />,
  Outros: <BrainCircuit className="w-5 h-5 mr-2 text-pink-500" />,
}

const SkillsCloud = ({ id }: SkillsCloudProps) => {
  const { skills } = portfolioData

  const groupedSkills = skills.reduce((acc, skill) => {
    const { category } = skill
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as { [key: string]: typeof skills })

  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-10 relative inline-block"
        >
          Minhas Habilidades
          <span className="absolute bottom-0 left-1/2 w-32 h-1 bg-blue-500 transform -translate-x-1/2"></span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 md:p-7 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                {categoryIcons[category]}
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-blue-500/10 dark:bg-blue-300/10 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm shadow-md"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsCloud
