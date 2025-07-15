
'use client'

import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import SkillsCloud from '@/components/SkillsCloud'
import Projects from '@/components/Projects'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <HeroSection id="hero" />
      <About id="about" />
      <SkillsCloud id="skills" />
      <Projects id="projects" />
      <ExperienceTimeline id="experience" />
      <Education id="education" />
      <Certifications id="certifications" />
      <ContactForm id="contact" />
    </>
  )
}
