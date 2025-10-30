
'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import TypewriterEffect from '@/components/TypewriterEffect'

const Footer = () => {
  const { name, contact } = portfolioData;

  const socialLinks = [
    { icon: <Github size={20} />, href: contact.github, label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: contact.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: `mailto:${contact.email}`, label: 'Email' },
  ];

  const inspirationalMessage = "Criando o futuro, uma linha de código de cada vez.";

  return (
    <footer className="bg-gray-900/90 text-gray-300 backdrop-blur-sm border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 md:pt-12 md:pb-10">
        <div className="text-center">
          <div className="mb-4 md:mb-6 flex items-center justify-center px-4 py-2">
            <p className="text-center text-base md:text-xl font-semibold text-white">
              <TypewriterEffect text={inspirationalMessage} />
            </p>
          </div>
          <div className="flex justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 hover:scale-125 transform transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <hr className="my-6 md:my-8 border-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs md:text-sm text-gray-500">
          <p className="mb-3 sm:mb-0">&copy; {new Date().getFullYear()} {name}. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-1.5 md:space-x-2 text-gray-400">
            <span>Feito com</span>
            <span className="font-semibold text-blue-400">Next.js</span>
            <span className="text-gray-600">•</span>
            <span className="font-semibold text-blue-400">TypeScript</span>
            <span className="text-gray-600">•</span>
            <span className="font-semibold text-blue-400">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
