import React from 'react'

const TitlePage = ({ title, urlImage, subtitle = 'SEGUROS ADELA GOMEZ LEDESMA' }) => {
  return (
    <div className='relative flex flex-col items-center justify-center py-10 lg:py-20'>
        <div className='absolute top-0 left-0 w-full h-full -z-10 bg-center brightness-50 bg-cover'
            style={{
              backgroundImage: `url(${urlImage})`
            }}
        />
        <h1 className='text-center text-white text-3xl lg:text-4xl font-bold mb-2 lg:mb-4'>{title}</h1>
        <h2 className='text-center bg-secondary text-white inline px-4 lg:px-8 py-px lg:text-xl text-sm'>{subtitle}</h2>
    </div>
  )
}

export default TitlePage