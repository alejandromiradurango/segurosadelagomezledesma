import React from 'react'
import { TitlePage } from '../components'

const AboutUs = () => {
  return (
    <section>
        <TitlePage title='Quiénes somos' urlImage='https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/primer-plano-pareja-irreconocible-que-firma-contrato-asesor-financiero-2880w.jpg'/>
        <div className='max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10 py-12 lg:py-24'>
          <div className='lg:w-1/2'>
            <h2 className="font-bold text-3xl">Adela Gomez Ledesma</h2>
            <span className='block w-12 h-px bg-services my-4' />
            <p className='text-lg mb-4'>Técnico-Analista de Seguros, Consultora y Mediadora de Seguros del Grupo A, especializada en seguros de No Vida y Vida, con más de 20 años de experiencia profesional en empresas aseguradoras, he trabajado en posiciones del Área Técnica Actuarial y Operaciones, participando en proyectos estratégicos relacionados con el análisis y mejora continua de procesos de negocio y soporte de las Compañías. Buena conocedora de las interrelaciones entre departamentos con una orientación a resultados, sólida formación y experiencia en gestión de equipos.</p>
            <button className="px-12 text-lg py-2 text-white bg-secondary rounded-full border-2 border-transparent hover:bg-transparent hover:border-primary hover:text-black transition-all">Descargar CV</button>
          </div>
          <div className='lg:w-1/2'>
            <img src="https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/adela-2880w.jpg" alt="" />
          </div>
        </div>
    </section>
  )
}

export default AboutUs