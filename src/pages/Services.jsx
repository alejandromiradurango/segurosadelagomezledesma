import { TitlePage } from '../components'

const Services = () => {
  const services = [
    {
      id: 1,
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/empresarios-estrechar-mano-reunion-640w.jpg',
      title: 'Seguro de Vida'
    },
    {
      id: 2,
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/primer-plano-mujer-escribiendo-640w.jpg',
      title: 'Seguro de Salud'
    },
    {
      id: 3,
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/proyectos-ambientales-planificacion-femenina-640w.jpg',
      title: 'Seguro de Hogar'
    },
    {
      id: 4,
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/dama-colocando-cinturon-seguridad-automovil-antes-conducir-cerca-hebilla-cinturon-concepto-manejo-seguro-640w.jpg',
      title: 'Seguro de Coche'
    },
    {
      id: 5,
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/mujer-poniendose-casco-viaje-carretera-motocicleta-640w.jpg',
      title: 'Seguro de Moto'
    },
    {
      id: 6,
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/imagen-accidente-automovilistico-que-involucra-dos-autos-640w.jpg',
      title: 'Seguro de Accidente'
    },
    {
      id: 7,
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/doctor-tomados-mano-paciente-640w.jpg',
      title: 'Seguro de Decesos'
    },
    {
      id: 8,
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/empresarios-que-estudian-terminos-contrato-c40b7ae6-640w.jpg',
      title: 'Seguro de Responsabilidad Civil'
    }
  ]
  return (
    <section>
        <TitlePage title='Servicios' urlImage='https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/primer-plano-pareja-irreconocible-que-firma-contrato-asesor-financiero-2880w.jpg'/>
        <div className='max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-2 py-12 lg:py-24'>
          {services.map(({ id, urlImage, title }) => (
            <article key={id} className='aspect-square group relative'>
              <img className='object-cover h-full w-full' src={urlImage} alt="" />
              <div className='bg-white/50 lg:bg-white/70 shadow-lg lg:shadow-none absolute inset-0 w-full h-full opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all flex flex-col gap-4 justify-center items-center'>
                <h2 className='text-2xl lg:text-3xl font-bold text-primary'>{title}</h2>
                <button className='px-10 py-2 text-white border-2 border-transparent hover:border-primary hover:text-primary hover:bg-transparent bg-secondary text-lg rounded-full'>Información</button>
              </div>
            </article>
          ))}
        </div>
    </section>
  )
}

export default Services