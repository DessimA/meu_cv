
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import TypewriterEffect from '@/components/TypewriterEffect'

interface HeroSectionProps {
  id: string;
}

const HeroSection = ({ id }: HeroSectionProps) => {
  const { name, title, contact } = portfolioData

  const socialLinks = [
    { icon: <Github size={24} />, href: contact.github, label: 'GitHub' },
    { icon: <Linkedin size={24} />, href: contact.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={24} />, href: `mailto:${contact.email}`, label: 'Email' },
  ]

  // Cores para o neon em tons mais escuros de azul, cinza e preto
  const neonColors = {
    blue: 'rgba(0, 100, 255, 0.8)', // Azul mais forte
    gray: 'rgba(150, 150, 150, 0.8)', // Cinza mais forte
    black: 'rgba(0, 0, 0, 0.8)', // Preto mais forte
  }

  const imageSize = 200; // Tamanho da imagem

  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-12">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          className="mb-8 md:mb-0 flex-shrink-0 relative rounded-full overflow-hidden"
          style={{ width: imageSize, height: imageSize }}
        >
          {/* Contêiner da imagem com animação de flutuação e brilho neon */}
          <motion.div
            animate={{
              y: [0, -10, 0], // Animação de flutuação
              boxShadow: [ // Animação do brilho neon
                `0 0 10px ${neonColors.blue}, 0 0 20px ${neonColors.gray}, 0 0 40px ${neonColors.black}`,
                `0 0 20px ${neonColors.blue}, 0 0 40px ${neonColors.gray}, 0 0 80px ${neonColors.black}`,
                `0 0 10px ${neonColors.blue}, 0 0 20px ${neonColors.gray}, 0 0 40px ${neonColors.black}`,
              ],
              transition: {
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              },
            }}
            className="absolute inset-0 rounded-full overflow-hidden"
          >
            <Image
              src="/meu_cv/profile-image.jpg"
              alt="Foto de Perfil de José Anderson"
              width={imageSize}
              height={imageSize}
              className="object-cover rounded-full"
              priority
            />
          </motion.div>
        </motion.div>

        <div className="md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <TypewriterEffect text={name} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            <TypewriterEffect text={title} delay={name.length * 0.05 + 0.5} />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center md:justify-start space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
