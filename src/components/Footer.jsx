import { MdLocationPin, MdPhone, MdMailOutline } from 'react-icons/md'

const Footer = () => {
  const contact = [
    {
      id: 1,
      icon: <MdLocationPin className='text-secondary text-3xl'/>,
      text: 'Madrid'
    },
    {
      id: 2,
      icon: <MdPhone className='text-secondary text-3xl'/>,
      text: '649054028'
    },
    {
      id: 3,
      icon: <MdMailOutline className='text-secondary text-3xl'/>,
      text: 'maria.adela.67@gmail.com'
    }
  ]
  const links = [
    {
      id: 1,
      text: 'Aviso legal'
    },
    {
      id: 2,
      text: 'Política de privacidad'
    },
    {
      id: 3,
      text: 'Política de cookies'
    },
    {
      id: 4,
      text: 'Accesibilidad'
    },
    {
      id: 5,
      text: 'Mapa Web'
    }
  ]

  return (
    <footer className='bg-primary'>
      <div className='max-w-6xl mx-auto py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0'>
              <img className='mx-auto' src="https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/seguros_Mesa+de+trabajo+1+copia+3-254w.png" alt="" />
              {contact.map(({ id, icon, text }) => (
                <div key={id} className='flex flex-col items-center justify-center gap-2'>
                  {icon}
                  <span className='text-white text-lg'>{text}</span>
                </div>
              ))}
          </div>
          <div className='text-white text-lg lg:text-sm mt-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2'>
                {links.map(({ id, text }, index) => (
                  <>
                    <a href="#" key={id}>{text}</a>
                    {index !== links.length - 1 ? <span className='hidden lg:block pointer-events-none'>&middot;</span> : null}
                  </>
                ))}
          </div>
      </div>
      <div className='bg-white px-6 lg:px-0'>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between py-3">
          <img className="max-w-md" src="https://irp.cdn-website.com/4179d2f9/dms3rep/multi/logos-kit-digital-2.svg" alt="" />
          <div className="flex gap-2 items-center">Created by<img className="w-24" src="https://irp.cdn-website.com/4179d2f9/dms3rep/multi/logo_captto.svg" alt=""/> </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer