import { useState } from 'react'
import ProjectCard from './ProjectCard'
import AddProjectForm from './AddProjectForm'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'School Management System',
      description: 'Designed a web application to manage school activities such as student records, attendance, and course management.',
      image: img4,
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      title: 'Dry Cleaning Management System',
      description: 'Developed a web-based system to manage dry cleaning operations, including customer orders, service tracking, and payment management.',
      image: img5,
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ])

  const [showForm, setShowForm] = useState(false)

  function addProject(newProject) {
    setProjects([...projects, { ...newProject, id: Date.now() }])
    setShowForm(false)
  }

  const styles = {
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '80px 40px',
      minHeight: '100vh',
      gap: '40px'
    },
    title: {
      fontFamily: 'Lora, serif',
      fontSize: '2.6rem',
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: '20px',
      color: 'white'
    },
    titleSpan: {
      color: '#c0635a'
    },
    addBtn: {
      padding: '12px 30px',
      backgroundColor: '#00d4d4',
      color: '#0a2a30',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
      marginBottom: '30px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '28px',
      width: '100%',
      maxWidth: '1100px'
    }
  }

  return (
    <section style={styles.section}>
      <div style={{ width: '100%', maxWidth: '1100px' }}>
        <h2 style={styles.title}>
          My <span style={styles.titleSpan}>Project</span>
        </h2>

        <div style={{ textAlign: 'center' }}>
          <button style={styles.addBtn} onClick={() => setShowForm(!showForm)}>
            {showForm ? '✕ Cancel' : '➕ Add New Project'}
          </button>
        </div>

        {showForm && <AddProjectForm onAdd={addProject} />}

        <div style={styles.grid}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects