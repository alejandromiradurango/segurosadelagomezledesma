import { Sling as Hamburguer } from 'hamburger-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const menu = [
    {
      id: 1,
      text: 'Inicio',
      url: '/'
    },
    {
      id: 2,
      text: 'Quiénes somos',
      url: '/quienes-somos'
    },
    {
      id: 3,
      text: 'Servicios',
      url: '/servicios'
    },
    {
      id: 4,
      text: 'Blog',
      url: '/blog'
    },
    {
      id: 5,
      text: 'Contacto',
      url: '/contacto'
    }
  ]

  const [openSubmenu, setOpenSubmenu] = useState(false)

  const { pathname } = useLocation()

  const handleClick = () => {
    if (screen.width < 1024) {
      setOpenSubmenu(!openSubmenu)
    }
  }
  return (
    <header className='bg-primary sticky top-0 z-40'>
      <div className="container flex flex-row-reverse lg:flex-row justify-between items-center py-2 px-6 relative">
        <img className="w-40 lg:w-60 z-50 relative" src="https://lirp.cdn-website.com/05f3033f/dms3rep/multi/opt/seguros_Mesa+de+trabajo+1+copia+3-296w.png" alt="" />
        <div className='block lg:hidden z-50 relative'>
          <Hamburguer color='white' toggled={openSubmenu} onToggle={handleClick}/>
        </div>
        <nav className={`text-white bg-primary lg:bg-transparent absolute w-full  left-0 lg:relative lg:w-auto flex flex-col justify-center items-center py-10 lg:py-0 lg:flex-row gap-6 text-lg ${openSubmenu ? 'translate-y-0 top-full opacity-100' : '-translate-y-full -top-full opacity-0'} transition-all duration-500 lg:opacity-100 lg:translate-y-0`}>
            {menu.map(({ id, url, text }) => (
              <Link onClick={handleClick} className={`relative lg:before:absolute ${pathname === url ? 'text-secondary lg:text-inherit lg:before:w-full lg:before:opacity-100' : 'lg:before:w-0 lg:before:opacity-0'} lg:before:hover:w-full lg:before:h-0.5 lg:before:bg-white lg:before:bottom-0 lg:before:hover:opacity-100 lg:before:transition-all lg:before:duration-500`} key={id} to={url}>{text}</Link>
            ))}
        </nav>
      </div>
    </header>
  )
}

export default Header