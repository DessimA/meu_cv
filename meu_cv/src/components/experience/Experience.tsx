'use client';

import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 3H4a1 1 0 00-1 1v5a1 1 0 001 1h12a1 1 0 001-1v-5a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-secondary-accent">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
);

const CertificationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.54a.5.5 0 00.8.4L10 15.362l6.2 2.58a.5.5 0 00.8-.4V4.517c0-1.103-.806-2.068-1.93-2.207C13.408 2.106 11.716 2 10 2zm0 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" clipRule="evenodd" />
        <path d="M10 6a.75.75 0 01.75.75v3.5h2.5a.75.75 0 010 1.5h-2.5v1.25a.75.75 0 01-1.5 0v-1.25H7a.75.75 0 010-1.5h2.5V6.75A.75.75 0 0110 6z" />
    </svg>
);

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');
  const tabs = [
    { id: 'experience', label: 'Experiência', inactiveColor: 'text-primary-accent hover:bg-primary-accent/10' },
    { id: 'certifications', label: 'Certificações', inactiveColor: 'text-secondary-accent hover:bg-secondary-accent/10' }
  ];

  return (
    <div className="section-container">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-gradient mb-4">Jornada Profissional</h2>
        <p className="lead max-w-3xl mx-auto">
          Minhas experiências, certificações e a evolução contínua que moldam minha carreira como desenvolvedor.
        </p>
      </motion.div>

      <div className="flex justify-center mb-16">
        <div className="relative flex w-full max-w-sm items-center rounded-full bg-card-bg border border-border-color p-1 gap-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 w-1/2 rounded-md py-2 text-sm font-semibold transition-colors duration-300
                  ${isActive ? 'text-white' : tab.inactiveColor}
                `}
              >
                {tab.label}
              </button>
            )
          })}
          <motion.div
            layoutId="active-experience-pill-final"
            className="absolute inset-1 z-0 h-auto w-[calc(50%-0.25rem)] rounded-md"
            style={{
              backgroundColor: activeTab === 'experience' ? 'var(--primary-accent)' : 'var(--secondary-accent)',
              transform: activeTab === 'experience' ? 'translateX(0%)' : 'translateX(calc(100% + 0.25rem))',
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
          />
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-1 flex flex-col items-center h-full">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card-bg border-2 border-primary-accent text-primary-accent">
                        <WorkIcon />
                    </div>
                    {index < portfolioData.experience.length - 1 && (
                      <div className="flex-grow w-px bg-border-color mt-4"></div>
                    )}
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-semibold text-secondary-accent">{exp.period}</p>
                    <h3 className="text-lg font-bold text-text-primary mt-1">{exp.position}</h3>
                    <p className="text-text-secondary font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2 text-sm">
                      {exp.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2.5">
                          <div className="mt-1 flex-shrink-0"><CheckIcon /></div>
                          <span className="text-text-secondary">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul 
                className="space-y-2"
                variants={{
                  visible: { transition: { staggerChildren: 0.07 } }
                }}
                initial="hidden"
                animate="visible"
              >
                {portfolioData.certifications.map((cert) => (
                  <motion.li
                    key={cert.name}
                    className="flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-card-bg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary-accent/10 text-secondary-accent">
                      <CertificationIcon />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-text-primary leading-tight">{cert.name}</h3>
                      <p className="text-sm text-text-secondary">{cert.institution}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-xs text-text-muted">{cert.date}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}