import React from 'react'

const Hero = () => {
  return (
    <section className='relative py-24 text-white'>
        <div
            style={{
              backgroundImage: 'url(https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/iStock-840610244-1920w.jpg)'
            }}
            className='bg-cover bg-bottom brightness-50 absolute inset-0 -z-10'
        />
        <h1 className='text-3xl lg:text-6xl max-w-3xl font-bold text-center mx-auto leading-snug'>Protegiendo tu futuro, asegurando tu tranquilidad</h1>
        <hr className='bg-white w-12 lg:w-36 h-0.5 mx-auto mt-5 mb-5 lg:mb-10'/>
        <h2 className='text-center text-xl'>Bienvenido a Adela Gómez Ledesma </h2>
        <p className='text-center text-xl'>Correduría de Seguros</p>
    </section>
  )
}

export default Hero