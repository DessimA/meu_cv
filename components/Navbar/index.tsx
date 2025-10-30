'use client'

import { useState, useEffect } from 'react'
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

  // Effect to lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = ''; // Clean up on unmount
    };
  }, [isMenuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after navigation
    }
  };

  const renderNavLinks = () => {
    return navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={(e) => handleScroll(e, item.href)}
        className="block text-gray-300 hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-base font-medium"
      >
        {item.label}
      </Link>
    ));
  };

  // Variants for the mobile menu overlay
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Variants for the individual menu items (staggered animation)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
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

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-3 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                aria-label="Open mobile menu"
                aria-expanded={isMenuOpen}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay Menu - Outside header */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu-overlay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-gray-950/95 backdrop-blur-md z-[9999] flex flex-col items-center justify-center p-6 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full text-white bg-gray-800/50 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95 transition-all"
              aria-label="Close mobile menu"
            >
              <X size={28} />
            </button>

            {/* Navigation Links Container */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col items-center justify-center space-y-4 w-full max-w-md"
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={itemVariants} className="w-full">
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="block text-white text-2xl sm:text-3xl font-bold py-4 px-8 rounded-xl hover:bg-blue-600/80 active:bg-blue-700 transition-all duration-200 text-center w-full hover:scale-105 active:scale-95"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;