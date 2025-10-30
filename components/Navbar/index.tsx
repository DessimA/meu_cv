
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

const navItems = [
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#experience', label: 'Experiência' },
  { href: '#certifications', label: 'Certificações' },
  { href: '#contact', label: 'Contato' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    return navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={(e) => handleScroll(e, item.href)}
        className="text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium"
      >
        {item.label}
      </Link>
    ));
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            {portfolioData.name.split(' ').map((n, i) => i === 0 || i === 1 ? n[0] : '').join('')}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {renderNavLinks()}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden"
            >
              <div className="pt-2 pb-3 space-y-1 sm:px-3">
                {renderNavLinks()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
