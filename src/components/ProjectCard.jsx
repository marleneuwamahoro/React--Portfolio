import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const styles = {
    card: {
      borderRadius: '16px',
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
      transition: 'transform 0.3s'
    },
    image: {
      width: '100%',
      height: '320px',
      objectFit: 'cover',
      display: 'block'
    },
    desc: {
      padding: '28px',
      backgroundColor: 'rgba(20,55,70,0.97)',
      borderTop: '3px solid #c0635a'
    },
    descTitle: {
      fontFamily: 'Lora, serif',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#00d4d4',
      marginBottom: '12px'
    },
    descPara: {
      fontSize: '0.95rem',
      lineHeight: '1.8',
      color: 'rgba(255,255,255,0.8)',
      marginBottom: '18px'
    },
    techBadge: {
      display: 'inline-block',
      padding: '4px 12px',
      backgroundColor: 'rgba(255,255,255,0.1)',
      color: 'white',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      marginRight: '6px',
      marginBottom: '6px'
    },
    btnView: {
      padding: '8px 18px',
      backgroundColor: '#00d4d4',
      color: '#0a2a30',
      border: 'none',
      borderRadius: '20px',
      fontWeight: 'bold',
      fontSize: '0.85rem',
      cursor: 'pointer',
      marginRight: '8px'
    },
    btnClose: {
      padding: '8px 18px',
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: '20px',
      fontSize: '0.85rem',
      cursor: 'pointer'
    }
  }

  return (
    <div style={styles.card} onClick={() => setIsOpen(!isOpen)}>
      <img src={project.image} alt={project.title} style={styles.image} />
      {isOpen && (
        <div style={styles.desc}>
          <h3 style={styles.descTitle}>{project.title}</h3>
          <p style={styles.descPara}>{project.description}</p>
          <div style={{ marginBottom: '16px' }}>
            {project.tech && project.tech.map((t, i) => (
              <span key={i} style={styles.techBadge}>{t}</span>
            ))}
          </div>
          <div>
            <button
              style={styles.btnView}
              onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.id}`) }}>
              View Details →
            </button>
            <button
              style={styles.btnClose}
              onClick={(e) => { e.stopPropagation(); setIsOpen(false) }}>
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard