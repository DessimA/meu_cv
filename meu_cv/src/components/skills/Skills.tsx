'use client';

import { portfolioData } from '@/data/portfolio';
import { motion, Variants } from 'framer-motion';

// Definindo as interfaces para as animações
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Skills() {
  // 🧠 Correção: Obtendo as categorias diretamente das chaves do objeto de skills.
  // Filtramos para não incluir 'methodologies' e 'operatingSystems' que são tratados separadamente.
  const skillCategories = Object.keys(portfolioData.skills).filter(
    key => key !== 'methodologies' && key !== 'operatingSystems'
  );

  // Função para formatar os títulos das categorias (ex: 'cloudDevOps' -> 'Cloud & DevOps')
  const formatCategoryTitle = (key: string) => {
    const formatted = key.replace(/([A-Z])/g, ' $1');
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <div className="section-container">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gradient mb-4">Habilidades & Ferramentas</h2>
        <p className="lead max-w-3xl mx-auto">
          As tecnologias, linguagens e ferramentas que utilizo para transformar ideias em produtos digitais robustos e eficientes.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-8"
      >
        {skillCategories.map((categoryKey) => (
          <motion.div key={categoryKey} variants={itemVariants} className="card">
            <h3 className="text-xl font-semibold mb-6 text-primary-accent">
              {formatCategoryTitle(categoryKey)}
            </h3>
            <div className="flex flex-wrap gap-3">
              {/* 🧠 Correção: Acessando a lista de skills usando a chave da categoria */}
              {(portfolioData.skills[categoryKey as keyof typeof portfolioData.skills] as string[]).map((skill) => (
                <div key={skill} className="bg-border-color/50 text-text-secondary font-medium text-sm px-4 py-2 rounded-full hover:text-primary-accent transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div variants={itemVariants} className="card">
           <h3 className="text-xl font-semibold mb-6 text-primary-accent">Metodologias & Conceitos</h3>
           <div className="flex flex-wrap gap-3">
              {portfolioData.skills.methodologies.map((methodology) => (
                <div key={methodology} className="bg-border-color/50 text-secondary-accent font-medium text-sm px-4 py-2 rounded-full">
                  {methodology}
                </div>
              ))}
           </div>
        </motion.div>
      </motion.div>
    </div>
  );
}