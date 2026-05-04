import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen"
    style={{
      background: 
      'linear-gradient(135deg, #4a7f90 0%, #3a6b7a 40%, #2e5562 100%)'
    }}>

      {/* Navbar always visible */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App