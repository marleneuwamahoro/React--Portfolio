import { useState } from 'react'
import ProjectCard from './ProjectCard'
import AddProjectForm from './AddProjectForm'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, title: 'School Management System', description: 'Designed a web application to manage school activities such as student records, attendance, and course management.', image: img4, tech: ['HTML', 'CSS', 'JavaScript'] },
    { id: 2, title: 'Dry Cleaning Management System', description: 'Developed a web-based system to manage dry cleaning operations, including customer orders, service tracking, and payment management.', image: img5, tech: ['HTML', 'CSS', 'JavaScript'] }
  ])

  const [showForm, setShowForm] = useState(false)

  function addProject(newProject) {
    setProjects([...projects, { ...newProject, id: Date.now() }])
    setShowForm(false)
  }

  const sectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 60px', minHeight: '100vh' }
  const tagStyle = { display: 'inline-block', padding: '4px 14px', background: 'linear-gradient(90deg, #a78bfa33, #60a5fa33)', color: '#a78bfa', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '16px', border: '1px solid rgba(167,139,250,0.3)' }
  const titleStyle = { fontFamily: 'Lora, serif', fontSize: '2.6rem', fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: '12px' }
  const subtitleStyle = { color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: '40px', fontSize: '1rem' }
  const addBtnStyle = { padding: '12px 30px', background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', marginBottom: '50px', boxShadow: '0 4px 20px rgba(167,139,250,0.4)' }
  const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', width: '100%', maxWidth: '1100px' }

  return (
    <section style={sectionStyle}>
      <span style={tagStyle}>My Work</span>
      <h2 style={titleStyle}>Featured Projects</h2>
      <p style={subtitleStyle}>Things I have built so far</p>
      <button style={addBtnStyle} onClick={() => setShowForm(!showForm)}>
        {showForm ? '✕ Cancel' : '➕ Add New Project'}
      </button>
      {showForm && <AddProjectForm onAdd={addProject} />}
      <div style={gridStyle}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects