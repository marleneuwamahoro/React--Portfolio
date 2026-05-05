import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  const appStyle = { minHeight: '100vh', background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' }
  const footerStyle = { textAlign: 'center', padding: '20px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.1)' }

  return (
    <div style={appStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer style={footerStyle}>
        © 2025 Marlene Uwamahoro. All rights reserved.
      </footer>
    </div>
  )
}

export default App