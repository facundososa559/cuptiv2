import React from 'react'
import { motion } from "framer-motion"
import Hero from '../components/Hero/Hero'
import About from "../components/About/About"
import ProjectDetail from '../components/Projects/ProjectDetail'

import heroBg1 from "../assets/hero-backrounds/hero-background-1.svg"
import heroBg2 from "../assets/hero-backrounds/hero-background-2.svg"

import engineer from "../assets/about/quienes-somos-img.jpeg"


function DisenoIndustrial() {
  const heroItems = [
    {
      title: "Diseño industrial",
      subtitle: "Soluciones especializadas en energías renovables y eficiencia energética para empresas que buscan optimizar costos y ser más sostenibles.",
      image: heroBg1,
      cta: "Calcular mi ahorro",
      ctaLink: "#calculadora",
    },
    {
      title: "Diseño industrial",
      subtitle: "Instalación de paneles solares y sistemas de energía renovable con retorno de inversión en menos de 5 años.",
      image: heroBg2,
      cta: "Ver nuestros servicios",
      ctaLink: "#servicios",
    },
  ]

  return (
    <>
      <Hero items={heroItems} autoSlide={true} interval={6000} />
      <About
        id="nosotros"
        image={engineer}
        imageAlt="Ingeniero de CUPTI realizando mediciones eléctricas"
        imageLabel="Desde 2013"
        title="Diseño industrial"
        paragraphs={
          [
            "Somos una empresa cooperativa especializada en soluciones energéticas eficientes y sostenibles.",
            "CUPTI Ingeniería fue fundada en el año 2013 por seis socios, en aquel entonces estudiantes de ingeniería, con el objetivo de convertirse en la referencia en el sector de la ingeniería y la eficiencia energética.",
            "Desde nuestra fundación, hemos incorporado nuevos socios y áreas de especialización para ofrecer soluciones integrales que ayudan a nuestros clientes a optimizar sus recursos energéticos y mejorar sus procesos industriales.",
          ]
        }
      />

      <section className='container section'>
        <motion.h2
          className="section-title-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>
        
        <ProjectDetail
          id="esculturaLATU"
          image={engineer}
          title="Escultura en Movimiento instalada en el LATU"
          bullets={[
            "Desarrollo web en React",
            "Optimización para SEO técnico",
            "Integración con WhatsApp y formulario de contacto",
          ]}
        />
      </section>

    </>
  )
}

export default DisenoIndustrial