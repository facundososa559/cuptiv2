import React from 'react'
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

      <section className='section'>
        <ProjectDetail
          id="copagran"
          image={engineer}
          title="Copagran"
          bullets={[
            "Desarrollo web en React",
            "Optimización para SEO técnico",
            "Integración con WhatsApp y formulario de contacto",
          ]}
        />

        <ProjectDetail
          id="ctc"
          image={engineer}
          title="CTC"
          bullets={[
            "Desarrollo web en React",
            "Optimización para SEO técnico",
            "Integración con WhatsApp y formulario de contacto",
          ]}
        />

        <ProjectDetail
          id="funsa"
          image={engineer}
          title="Funsa"
          bullets={[
            "Desarrollo web en React",
            "Optimización para SEO técnico",
            "Integración con WhatsApp y formulario de contacto",
          ]}
        />

        <ProjectDetail
          id="ucot"
          image={engineer}
          title="UCOT"
          bullets={[
            "Desarrollo web en React",
            "Optimización para SEO técnico",
            "Integración con WhatsApp y formulario de contacto",
          ]}
        />

        <ProjectDetail
          id="coleme"
          image={engineer}
          title="COLEME"
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

export default EficienciaEnergética