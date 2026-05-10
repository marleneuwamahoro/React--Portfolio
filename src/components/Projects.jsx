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

  const sectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 80px', minHeight: '100vh', backgroundColor: '#0f172a' }
  const tagStyle = { display: 'inline-block', padding: '5px 14px', backgroundColor: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '16px', border: '1px solid rgba(59,130,246,0.2)', letterSpacing: '1px' }
  const titleStyle = { fontFamily: 'Lora, serif', fontSize: '2.6rem', fontWeight: 'bold', color: '#e2e8f0', textAlign: 'center', marginBottom: '12px' }
  const subtitleStyle = { color: '#94a3b8', textAlign: 'center', marginBottom: '50px', fontSize: '1rem' }
  const addBtnStyle = { padding: '12px 30px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', marginBottom: '50px', boxShadow: '0 4px 20px rgba(59,130,246,0.3)' }
  const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', width: '100%', maxWidth: '1100px' }

  return (
    <section style={sectionStyle}>
      <span style={tagStyle}>MY WORK</span>
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