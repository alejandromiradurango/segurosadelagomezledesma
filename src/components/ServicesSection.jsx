import { IconService } from './assets/Icons'

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      text: 'Seguros de Vida'
    },
    {
      id: 2,
      text: 'Seguros de Hogar'
    },
    {
      id: 3,
      text: 'Seguros de Automóviles'
    },
    {
      id: 4,
      text: 'Seguros de Negocios'
    },
    {
      id: 5,
      text: 'Seguros de Salud'
    },
    {
      id: 6,
      text: 'Seguros de Responsabilidad Civil'
    }
  ]

  return (
    <section className='flex flex-col lg:flex-row'>
      <div className='lg:w-1/2'>
        <img className='h-full object-cover' src="https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/empresarios-estrechar-mano-reunion-1920w.jpg" alt="" />
      </div>
      <div className='lg:w-1/2 py-12 lg:py-24 px-12 bg-gray-100'>
        <h5 className='text-services text-3xl font-bold'>Nuestros servicios</h5>
        <span className='block w-12 h-px bg-services my-4' />
        <p>Ofrecemos una amplia gama de servicios de seguros, que incluyen:</p>
        <ul className='flex flex-col gap-4 my-5'>
          {services.map(({ id, text }) => (
            <li key={id} className='flex items-center lg:px-5 lg:gap-24'>
              <IconService className='fill-services w-10' />
              {text}
            </li>
          ))}
        </ul>
        <button className='mt-8 text-lg w-56 border-2 border-primary rounded-full py-2.5 hover:border-transparent hover:bg-secondary hover:text-white transition-all'>Contáctanos</button>
      </div>
    </section>
  )
}

export default ServicesSection