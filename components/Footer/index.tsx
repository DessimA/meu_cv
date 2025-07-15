
'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const Footer = () => {
  const { contact } = portfolioData

  const socialLinks = [
    { icon: <Github size={20} />, href: contact.github, label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: contact.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: `mailto:${contact.email}`, label: 'Email' },
  ]

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Desenvolvido com Next.js, TypeScript e Tailwind CSS.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
