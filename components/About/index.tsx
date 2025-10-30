'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react' // Importing a relevant icon
import { portfolioData } from '@/data/portfolio'

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  const { summary } = portfolioData;

  // Split summary into paragraphs for staggered animation
  const paragraphs = summary.split('\n\n').filter(p => p.trim() !== '');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger animation for children (paragraphs)
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id={id} className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Abstract background shape */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob aspect-square"
        style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }}
      ></motion.div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }}
        className="absolute top-full left-full w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000 aspect-square"
        style={{ transform: 'translate(-70%, -70%) rotate(25deg)' }}
      ></motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 md:mb-8 relative inline-block">
            <User className="inline-block w-8 h-8 md:w-10 md:h-10 mr-3 text-blue-500" />
            Sobre Mim
            <span className="absolute bottom-0 left-1/2 w-20 md:w-24 h-1 bg-blue-500 transform -translate-x-1/2"></span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center space-y-4"
        >
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-base md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;