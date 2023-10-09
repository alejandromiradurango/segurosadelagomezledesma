import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout