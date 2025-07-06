'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import styles from './Nav.module.css';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  // 🧠 Por que esta mudança? Novo estado para ignorar a detecção do mouse temporariamente.
  const [ignoreMouse, setIgnoreMouse] = useState(false);

  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (y < 50) {
      setIsHidden(false);
    } else if (difference > 0) {
      setIsHidden(true);
      setIsMenuOpen(false);
    } else {
      setIsHidden(false);
    }
    lastYRef.current = y;
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'habilidades', 'projetos', 'experiencia', 'contato'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });
      setActiveSection(current || (window.scrollY < window.innerHeight / 2 ? 'inicio' : ''));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 🧠 Por que esta mudança? A lógica agora verifica o estado `ignoreMouse`.
    const handleMouseMove = (e: MouseEvent) => {
        if (ignoreMouse) return; // Se devemos ignorar, a função para aqui.

        if (window.innerWidth >= 768) {
            if (e.clientY < 50) {
                setIsHidden(false);
            }
        }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ignoreMouse]); // 🧠 Adicionamos `ignoreMouse` como dependência do useEffect.

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsMenuOpen(false);

    if (id !== 'inicio') {
      setIsHidden(true);

      // 🧠 Por que esta mudança? Ativamos o bloqueio do mouse e o desativamos após 1 segundo.
      setIgnoreMouse(true);
      setTimeout(() => {
        setIgnoreMouse(false);
      }, 1000); // 1 segundo de "período de carência"
    }
  };

  const navItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'experiencia', label: 'Experiência' },
  ];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`${styles.header} ${isMenuOpen ? styles.headerScrolled : ''}`}
    >
        {/* ... O resto do JSX permanece exatamente o mesmo ... */}
      <div className={styles.container}>
        <button onClick={() => scrollToSection('inicio')} className={`${styles.logo} text-gradient`}>JA.</button>
        
        <nav className={styles.navDesktop}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}
              className={`${styles.navLink} ${activeSection === item.id ? styles.navLinkActive : ''}`}
            >
              {item.label}
              {activeSection === item.id && (
                  <motion.div
                    className={styles.activeLinkIndicator}
                    layoutId="active-nav-link"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
              )}
            </button>
          ))}
        </nav>
        
        <button onClick={() => scrollToSection('contato')} className={styles.contactButton}>
          <span>Contato</span>
        </button>

        <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuToggle}
            aria-label="Toggle menu"
        >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.mobileMenuDropdown}
            >
                <nav className={styles.mobileNav}>
                    {navItems.map((item) => (
                        <button key={item.id} onClick={() => scrollToSection(item.id)}
                            className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.mobileNavLinkActive : ''}`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className="border-t border-border-color my-1"></div>
                    <button
                      onClick={() => scrollToSection('contato')}
                      className={`${styles.mobileNavLink} ${styles.mobileContactButton}`}
                    >
                        Entrar em Contato
                    </button>
                </nav>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}