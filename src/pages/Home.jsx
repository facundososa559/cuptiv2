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

import heroBg1 from "../assets/hero-backrounds/hero-background-1.svg"
import heroBg2 from "../assets/hero-backrounds/hero-background-2.svg"

import engineer from "../assets/about/quienes-somos-img.jpeg"

function Home() {

  return (
    <>
      <Hero
        items={
          [
            {
              title: "Reduce hasta un 40% tu factura energética",
              subtitle: "Soluciones especializadas en energías renovables y eficiencia energética para empresas que buscan optimizar costos y ser más sostenibles.",
              image: heroBg1,
              cta: "Calcular mi ahorro",
              ctaLink: "#calculadora",
            },
            {
              title: "Energía renovable para tu negocio",
              subtitle: "Instalación de paneles solares y sistemas de energía renovable con retorno de inversión en menos de 5 años.",
              image: heroBg2,
              cta: "Ver nuestros servicios",
              ctaLink: "#servicios",
            },
          ]
        } autoSlide={true} interval={6000} />


      <FloatingCalculator />
      <ServicesCards />
      <About
        id="nosotros"
        image={engineer}
        imageAlt="Ingeniero de CUPTI realizando mediciones eléctricas"
        imageLabel="Desde 2013"
        title="Quienes somos"
        paragraphs={
          [
            "Somos una empresa cooperativa especializada en soluciones energéticas eficientes y sostenibles.",
            "CUPTI Ingeniería fue fundada en el año 2013 por seis socios, en aquel entonces estudiantes de ingeniería, con el objetivo de convertirse en la referencia en el sector de la ingeniería y la eficiencia energética.",
            "Desde nuestra fundación, hemos incorporado nuevos socios y áreas de especialización para ofrecer soluciones integrales que ayudan a nuestros clientes a optimizar sus recursos energéticos y mejorar sus procesos industriales.",
          ]
        }
      />
      <Counters />
      <Projects />
      <ClientMarquee />
      <Contact />
    </>
  )
}

export default Home
