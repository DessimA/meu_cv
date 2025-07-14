
'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, GitMerge, Settings, BrainCircuit, Wind } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

interface SkillsCloudProps {
  id: string;
}

const categoryIcons: { [key: string]: React.ReactElement } = {
  Linguagens: <Code className="w-6 h-6 mr-2" />,
  'Frameworks & Bibliotecas': <Code className="w-6 h-6 mr-2" />,
  'Banco de Dados': <Database className="w-6 h-6 mr-2" />,
  'Cloud & DevOps': <Cloud className="w-6 h-6 mr-2" />,
  'Metodologias & Conceitos': <GitMerge className="w-6 h-6 mr-2" />,
  Ferramentas: <Settings className="w-6 h-6 mr-2" />,
  'Sistemas Operacionais': <Wind className="w-6 h-6 mr-2" />,
  Outros: <BrainCircuit className="w-6 h-6 mr-2" />,
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
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Habilidades
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                {categoryIcons[category]}
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.name} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
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
