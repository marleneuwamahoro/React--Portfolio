import { useParams, useNavigate } from 'react-router-dom'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

const allProjects = [
  {
    id: 1,
    title: 'School Management System',
    description: 'Designed a web application to manage school activities such as student records, attendance, and course management.',
    image: img4,
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Dry Cleaning Management System',
    description: 'Developed a web-based system to manage dry cleaning operations, including customer orders, service tracking, and payment management.',
    image: img5,
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: '#',
    live: '#'
  }
]

function ProjectDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = allProjects.find(p => p.id === Number(id))

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '80px', color: 'white' }}>
        <p style={{ fontSize: '4rem' }}>😕</p>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Project not found!</h2>
        <button
          onClick={() => navigate('/projects')}
          style={{ padding: '12px 30px', backgroundColor: '#00d4d4', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
          Back to Projects
        </button>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 40px', minHeight: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          style={{ marginBottom: '30px', padding: '10px 24px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>
          ← Back
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
        />

        {/* Content */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '40px' }}>

          <h1 style={{ fontFamily: 'Lora, serif', fontSize: '2.2rem', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
            {project.title}
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '30px' }}>
            {project.description}
          </p>

          {/* Tech */}
          <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '12px' }}>
            🛠 Technologies Used:
          </h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
            {project.tech.map((t, i) => (
              <span key={i} style={{ padding: '8px 18px', backgroundColor: '#00d4d4', color: '#0a2a30', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href={project.github} style={{ padding: '12px 28px', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none' }}>
              🐙 GitHub
            </a>
            <a href={project.live} style={{ padding: '12px 28px', backgroundColor: '#00d4d4', color: '#0a2a30', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none' }}>
              🌐 Live Demo
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectDetails