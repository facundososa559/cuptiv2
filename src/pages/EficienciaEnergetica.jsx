import React from 'react'
import { motion } from "framer-motion"
import Hero from '../components/Hero/Hero'
import About from "../components/About/About"
import Opportunities from "../components/Opportunities/Opportunities"
import ProjectDetail from '../components/Projects/ProjectDetail'

import heroBg1 from "../assets/hero-backrounds/hero-background-1.svg"
import heroBg2 from "../assets/hero-backrounds/hero-background-2.svg"

import engineer from "../assets/about/quienes-somos-img.jpeg"

function EficienciaEnergética() {
  const heroItems = [
    {
      title: "Eficiencia energética",
      subtitle: "Soluciones especializadas en energías renovables y eficiencia energética para empresas que buscan optimizar costos y ser más sostenibles.",
      image: heroBg1,
      cta: "Calcular mi ahorro",
      ctaLink: "#calculadora",
    },
    {
      title: "Eficiencia energética",
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
        title="Eficiencia energética"
        paragraphs={
          [
            "Somos una empresa cooperativa especializada en soluciones energéticas eficientes y sostenibles.",
            "CUPTI Ingeniería fue fundada en el año 2013 por seis socios, en aquel entonces estudiantes de ingeniería, con el objetivo de convertirse en la referencia en el sector de la ingeniería y la eficiencia energética.",
            "Desde nuestra fundación, hemos incorporado nuevos socios y áreas de especialización para ofrecer soluciones integrales que ayudan a nuestros clientes a optimizar sus recursos energéticos y mejorar sus procesos industriales.",
          ]
        }
      />
      <Opportunities />

      <section className='project-detail-section'>
        <div className='container'>
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
            id="copagran"
            image={engineer}
            title="Copagran"
            bullets={[
              "Auditoria Energética realizada en planta de Young departamento de Rio Negro",
              "Se realizaron los siguientes estudios:",
              "Análisis de secador de granos a GLP.",
              "Análisis y registro eléctrico de los motores del Sistema de Transporte de granos.",
              "Análisis y registro eléctrico de los motores del Sistema de Aireación de silos.",
              "Análisis y registro eléctrico de los motores ventiladores de aspiración de polvos.",
              "Análisis de Iluminación.",
              "Análisis de humos de combustión de leña en caldera Humotubular.",
            ]}
          />

          <ProjectDetail
            id="ctc"
            image={engineer}
            title="CTC"
            bullets={[
              "Auditoria energética realiza en la planta de fabricación de productos cerámicos de empalme Olmos.",
              "Se realizaron los siguientes estudios:",
              "Sistema de aire comprimido.",
              "Sistema de molienda.",
              "Sistema de secado de pasta cerámica.",
              "Análisis de consumo de GLP en el horno.",
              "Análisis de consumo energético en ambientes controlados.",
            ]}
          />

          <ProjectDetail
            id="funsa"
            image={engineer}
            title="Funsa"
            bullets={[
              "Auditoria Energética en planta de fabricación de cubiertas de FUNSA",
              "Se realizaron los siguientes estudios:",
              "Sistema de aire comprimido.",
              "Sistema de generación y distribución de vapor.",
              "Sistema de bombeo de agua.",
              "Análisis de generador de corriente continúa de 500KW.",
              "Análisis de consumo energético en ambientes controlados.",
            ]}
          />

          <ProjectDetail
            id="ucot"
            image={engineer}
            title="UCOT"
            bullets={[
              "Se realizó una auditoria sobre el consumo de combustible y funcionamiento de la flota de unidades de transporte de la empresa UCOT.",
              "La Auditoria se centró en un análisis estadístico de los datos disponibles por la empresa, una caracterización detallada de la ruta por donde se efectúan los recorridos y finalmente ensayos de campo con registro instantáneo de consumo de combustible en diferentes condiciones de manejo y funcionamiento.",
              "La auditoría arrojo buenos resultados llegando a considerar ahorros de hasta un 10% en el consumo de combustible.",
            ]}
          />

          <ProjectDetail
            id="coleme"
            image={engineer}
            title="COLEME"
            bullets={[
              "Auditoria energética en la planta de producción de leche pausterizada y fabricación de quesos.",
              "Se realizaron los siguientes estudios:",
              "Sistema de generación de frio y banco de hielo.",
              "Sistema de bombeo de agua.",
              "Sistema de generación y distribución de vapor.",
            ]}
          />
        </div>
      </section>

    </>
  )
}

export default EficienciaEnergética