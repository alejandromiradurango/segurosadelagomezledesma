import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Blog, Contact, Home, Layout, Projects } from './pages'
import { useLayoutEffect } from 'react'

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}


const App = () => {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='proyectos' element={<Projects />}/>
            <Route path='blog' element={<Blog />}/>
            <Route path='contacto' element={<Contact />}/>
          </Route>
        </Routes>
      </Wrapper>
    </Router>
  )
}

export default App
