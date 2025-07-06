'use client';

import { portfolioData } from '@/data/portfolio';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const EducationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.educationIcon}>
        <path d="M10.362 1.096a.75.75 0 00-.724 0L2.553 5.034a.75.75 0 00-.553.696v4.303a.75.75 0 00.165.489l5.48 6.35a.75.75 0 001.119.002l5.479-6.35a.75.75 0 00.165-.49V5.73a.75.75 0 00-.553-.696L10.362 1.096zM12 9.25a.75.75 0 00-1.25-.6l-2.5 1.75a.75.75 0 000 1.2l2.5 1.75a.75.75 0 10.9-1.2l-1.642-1.15 1.642-1.15a.75.75 0 00.35-.6z" />
    </svg>
);

export default function About() {
  const languages = [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Intermediário' },
    { name: 'Espanhol', level: 'Básico' },
  ];

  return (
    /* 🧠 Por que esta mudança?
        Removemos o .section-container. Agora o .wrapper é o container principal
        e ele mesmo controlará seu padding e largura, eliminando conflitos.
    */
    <div className={styles.wrapper}>
      
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gradient">Sobre Mim</h2>
        <p>
          Desenvolvedor apaixonado por tecnologia, combinando criatividade e lógica para construir soluções inovadoras.
        </p>
      </motion.header>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className={styles.cardTitle}>Minha Jornada</h3>
        <p className={styles.justifiedText}>{portfolioData.personalInfo.summary}</p>
        <p className={styles.justifiedText}>
          Estudante de <strong>Sistemas de Informação</strong> na UFC, busco aplicar a teoria em projetos práticos que gerem valor real e resolvam problemas complexos.
        </p>
      </motion.div>

      <div className={styles.statsGrid}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className={styles.cardTitle}>Formação Acadêmica</h4>
          <div className={styles.educationBlock}>
            <EducationIcon />
            <div className={styles.educationInfo}>
              <h5>Bacharelado em Sistemas de Informação</h5>
              <p>Universidade Federal do Ceará</p>
            </div>
          </div>
          <p className={styles.educationDate}>2023 - Presente</p>
        </motion.div>
        
        <motion.div
          className={`${styles.card} ${styles.languageCard}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className={styles.cardTitle}>Idiomas</h4>
          <div className="space-y-3">
            {languages.map(lang => (
              <div key={lang.name} className={styles.languageItem}>
                <span className={styles.languageName}>{lang.name}</span>
                <span className={styles.languageLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}