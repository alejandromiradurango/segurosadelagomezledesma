import { MdMailOutline, MdPhone } from 'react-icons/md'
import { TitlePage } from '../components'

const Contact = () => {
  const contact = [
    {
      id: 1,
      icon: <MdPhone className='text-white text-3xl'/>,
      text: '649054028'
    },
    {
      id: 2,
      icon: <MdMailOutline className='text-white text-3xl'/>,
      text: 'maria.adela.67@gmail.com'
    }
  ]
  return (
    <section>
      <TitlePage title='Contacto' urlImage='https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/hombre-negocios-usando-computadora-portatil-telefono-movil-2880w.jpg' />
      <div className='max-w-6xl mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row gap-5'>
        <div className='lg:w-5/12'>
          <h2 className='font-bold text-3xl text-primary'>¡Contáctanos para más información!</h2>
          <ul className='space-y-10 mt-10'>
            {contact.map(({ id, text, icon }) => (
              <li key={id} className='flex items-center gap-10'>
                <div className='w-20 h-20 rounded-full flex flex-col items-center justify-center bg-secondary'>{icon}</div>
                <p className='text-lg'>{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <form className='lg:w-7/12 space-y-4'>
          <label htmlFor="">
            Nombre:
            <input className='bg-gray-200 w-full p-2' type="text" />
          </label>
          <div className='flex gap-4'>
            <label htmlFor="" className='w-full'>
              Correo:
              <input className='bg-gray-200 w-full p-2' type="text" />
            </label>
            <label htmlFor="" className='w-full'>
              Teléfono:
              <input className='bg-gray-200 w-full p-2' type="text" />
            </label>
          </div>
          <label htmlFor="" className='w-full inline-block'>
            Mensaje:
            <textarea className='bg-gray-200 w-full p-2'></textarea>
          </label>
          <label htmlFor="" className='block'>
            <input className='mr-2' type="checkbox" name="" id="" />
            He leído y acepto la política de privacidad
          </label>
          <label htmlFor="" className='block'>
            <input className='mr-2' type="checkbox" name="" id="" />
            Acepto recibir publicidad por parte de Adela Gómez Ledesma
          </label>
          <p><b>Necesitamos su consentimiento para cargar el servicio.</b> No se permite la carga de este contenido debido a los rastreadores ocultos al visitante. El propietario del sitio web debe configurar el sitio con su CMP (plataforma de gestión del consentimiento) para añadir este contenido a la lista de tecnologías utilizadas. </p>
          <input type="submit" value="Enviar mensaje" className='py-3 px-12 text-white bg-secondary rounded-full text-lg hover:bg-transparent hover:border-primary border-2 border-transparent transition-all hover:text-primary'/>
        </form>
      </div>
    </section>
  )
}

export default Contact