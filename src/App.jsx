import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Blog, Contact, Home, Layout, Projects } from './pages'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='proyectos' element={<Projects />}/>
          <Route path='blog' element={<Blog />}/>
          <Route path='contacto' element={<Contact />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App