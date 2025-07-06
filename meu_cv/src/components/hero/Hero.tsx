'use client';

import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Definindo as variantes de animação com tipagem explícita para o TypeScript.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// Adicionamos "as const" ao tipo de transição para que o TypeScript
// o interprete como um valor literal e não como uma string genérica.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center text-center relative pt-20">
      <div className="section-container z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={itemVariants} className="relative">
            <Image
              src="/profile-photo.jpg"
              alt="Foto de perfil de José Anderson"
              width={140}
              height={140}
              priority
              className="rounded-full object-cover shadow-lg border-4 border-card-bg"
            />
             <motion.div 
                className="absolute bottom-1 right-1 w-4 h-4 bg-secondary-accent rounded-full border-2 border-background" 
                title="Disponível para oportunidades"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 300 }}
             />
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-gradient">
            {portfolioData.personalInfo.name}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="lead max-w-xl">
            {portfolioData.personalInfo.summary}
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" /></svg>
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="/curriculo.pdf" download className="btn btn-secondary">
              <span>Meu Currículo</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}