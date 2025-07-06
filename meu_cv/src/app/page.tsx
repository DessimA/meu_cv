'use client';

// Importe os novos componentes e remova a importação do antigo 'Header'
import Nav from '@/components/nav/Nav';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Experience from '@/components/experience/Experience';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      {/* A navegação fica fora do <main> para poder ser fixa */}
      <Nav />
      
      {/* O <main> agora contém todas as seções de conteúdo da página */}
      <main className="flex flex-col">
        {/* A seção Hero é o primeiro item dentro do main */}
        <Hero />
        
        {/* Usamos divs como wrappers para aplicar o espaçamento e fundos alternados */}
        <div className="space-y-32 md:space-y-40">
          <section id="sobre" className="section-alt">
            <About />
          </section>
          
          <section id="habilidades">
            <Skills />
          </section>

          <section id="projetos" className="section-alt">
            <Projects />
          </section>
          
          <section id="experiencia">
            <Experience />
          </section>
          
          <section id="contato" className="section-alt">
            <Contact />
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
}