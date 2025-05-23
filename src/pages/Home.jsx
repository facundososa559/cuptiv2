import React from 'react'
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Counters from '../components/Counters/Counters';
import FloatingCalculator from '../components/FloatingCalculator/FloatingCalculator';
import Hero from '../components/Hero/Hero';
import ClientMarquee from '../components/Marquee/ClientMarquee';
import MiniCalculator from '../components/MiniCalculator/MiniCalculator';
import Projects from '../components/Projects/Projects';
import ServicesCards from '../components/ServicesCards/ServicesCards';

function Home() {
  return (
    <>
      <Hero />
      <FloatingCalculator />
      <ServicesCards />
      <About />
      <Counters />
      <Projects />
      <ClientMarquee />
      <Contact />
    </>
  )
}

export default Home
