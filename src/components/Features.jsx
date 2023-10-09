import { IconKnowledge, IconMessage, IconOptions, IconTools } from './assets/Icons'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <IconMessage className='w-16 h-16 fill-services'/>,
      title: 'Asesoramiento Personalizado',
      text: 'No creemos en soluciones genéricas. Estudiamos tus necesidades y diseñamos pólizas a medida.'
    },
    {
      id: 2,
      icon: <IconOptions className='w-16 h-16 fill-services'/>,
      title: 'Variedad de Opciones',
      text: 'Trabajamos con una amplia gama de compañías de seguros, lo que significa que tienes acceso a una amplia variedad de opciones y precios competitivos.'
    },
    {
      id: 3,
      icon: <IconTools className='w-16 h-16 fill-services'/>,
      title: 'Soporte Continuo',
      text: 'No nos olvidamos de ti una vez que has adquirido una póliza. Estamos aquí para respaldarte en caso de siniestros y para realizar revisiones periódicas de tus necesidades.'
    },
    {
      id: 4,
      icon: <IconKnowledge className='w-16 h-16 fill-services'/>,
      title: 'Experiencia y Conocimiento',
      text: 'Nuestro equipo está formado por expertos en seguros con un profundo conocimiento del mercado y las regulaciones'
    }
  ]

  return (
    <section className='py-12 lg:py-24 px-6'>
      <h3 className='text-center text-primary text-3xl font-bold'>¿Por qué Elegirnos?</h3>
      <p className='text-center max-w-2xl mx-auto text-lg'>
        En un mercado saturado de opciones, nos destacamos por nuestra dedicación a ti, nuestro cliente.
        Al elegirnos, obtendrás los siguientes beneficios:
      </p>
      <span className='block w-12 h-px bg-services my-4 mx-auto' />
      <ul className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4'>
        {features.map(({ id, icon, title, text }) => (
          <div key={id}>
            <div className='bg-gray-100 rounded-full flex flex-col items-center justify-center w-32 h-32 mx-auto mb-4'>
              {icon}
            </div>
            <h4 className='text-primary font-bold text-center text-2xl mb-3'>{title}</h4>
            <p className='text-center'>{text}</p>
          </div>
        ))}
      </ul>
    </section>
  )
}

export default Features