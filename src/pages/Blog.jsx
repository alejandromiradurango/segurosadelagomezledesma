import { TitlePage } from '../components'

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: '¿Qué vehículos deben tener concertado el seguro obligatorio?',
      description: '¿Qué Vehículos Deben Tener Concertado el Seguro Obligatorio? La seguridad en las carreteras es esencial para proteger a conductores, pasajeros y peatones. Es por eso que en la mayoría de los lugares, es obligatorio que ciertos vehículos tengan contratado un seguro de responsabilidad civil. Aquí te explicamos qué vehículos suelen estar sujetos a esta obligación: 1. Automóviles y Motocicletas: En la mayoría de los países, los propietarios de automóviles y motocicletas',
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/concepto-exito-empresarial-vista-superior-mesa-madera-manos-protegiendo-figuras-madera-personas-1920w.jpg'
    },
    {
      id: 2,
      title: '¿Es obligatorio el seguro para perros? Todo lo que necesitas saber',
      description: 'La pregunta sobre si es obligatorio el seguro para perros es común entre los dueños de mascotas, y la respuesta varía según la ubicación y las regulaciones locales. Aquí te proporcionamos una visión general de lo que necesitas saber sobre este tema: 1. Varía según el lugar: La obligación de tener un seguro para perros varía de un lugar a otro. En algunos países, estados o ciudades, es un requisito legal, mientras que en otros no lo es. 2. Responsabilidad del dueño: ',
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/retrato-grupo-adorables-cachorros-1920w.jpg'
    },
    {
      id: 3,
      title: '¿Cuándo es obligatorio contratar el seguro de Responsabilidad Civil?',
      description: 'El seguro de Responsabilidad Civil es una herramienta fundamental que puede proteger tus activos y tu bienestar financiero en situaciones inesperadas. Pero, ¿alguna vez te has preguntado cuándo es obligatorio contratarlo? Aquí te ofrecemos una guía para entender cuándo puede ser necesario contar con un seguro de Responsabilidad Civil: 1. Seguro de Responsabilidad Civil para Vehículos Motorizados: En la mayoría de los lugares, es obligatorio tener un ',
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/concepto-exito-empresarial-vista-superior-mesa-madera-manos-protegiendo-figuras-madera-personas-1920w.jpg'
    },
    {
      id: 4,
      title: '¿Cuál es la mejor edad para contratar un seguro de salud?',
      description: 'La pregunta sobre cuál es la mejor edad para contratar un seguro de salud es importante y no tiene una respuesta única. La elección de cuándo obtener un seguro de salud depende de varios factores individuales y circunstancias personales. Aquí te ofrecemos algunas consideraciones clave: 1. Cuanto antes, mejor: En general, la edad temprana es ideal para contratar un seguro de salud. Los jóvenes suelen pagar primas más bajas, ya que tienen menos ',
      urlImage: 'https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/iStock-1435078862-1920w.jpg'
    }
  ]

  return (
    <section>
      <TitlePage title='Blog' urlImage='https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/iStock-1416166526-2880w.jpg'/>
      <div className='max-w-6xl mx-auto px-6 space-y-6 py-12 lg:py-24'>
        {articles.map(({ id, title, description, urlImage }) => (
          <article key={id} className='flex flex-col md:flex-row'>
            <div className='md:aspect-square lg:aspect-auto lg:w-4/12'>
              <img className='object-cover h-full w-full' src={urlImage} alt="" />
            </div>
            <div className='lg:w-8/12 px-10 py-5 bg-gray-50'>
              <h2 className='text-3xl font-bold text-primary leading-snug mb-4'>{title}</h2>
              <p className='text-sm opacity-50 mb-4'>{description}</p>
              <a href="#">Leer más</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog