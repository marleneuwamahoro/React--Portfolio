import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  const cardStyle = { borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', backgroundColor: '#1e293b', border: '1px solid rgba(59,130,246,0.15)', transform: hovered ? 'translateY(-6px)' : 'translateY(0)', transition: 'all 0.3s ease', boxShadow: hovered ? '0 20px 40px rgba(59,130,246,0.15)' : '0 4px 20px rgba(0,0,0,0.3)' }
  const imageStyle = { width: '100%', height: '240px', objectFit: 'cover', display: 'block' }
  const descStyle = { padding: '28px', backgroundColor: '#1e293b', borderTop: '2px solid #3b82f6' }
  const titleStyle = { fontFamily: 'Lora, serif', fontSize: '1.3rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '10px' }
  const paraStyle = { fontSize: '0.9rem', lineHeight: '1.7', color: '#94a3b8', marginBottom: '16px' }
  const badgeStyle = { display: 'inline-block', padding: '4px 12px', backgroundColor: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '600', marginRight: '6px', marginBottom: '6px', border: '1px solid rgba(59,130,246,0.2)' }
  const btnViewStyle = { padding: '8px 20px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer', marginRight: '8px', boxShadow: '0 4px 12px rgba(59,130,246,0.3)' }
  const btnCloseStyle = { padding: '8px 20px', backgroundColor: 'transparent', color: '#94a3b8', border: '1px solid rgba(226,232,240,0.1)', borderRadius: '8px', fontSize: '0.85rem', cursor: 'pointer' }

  return (
    <div style={cardStyle} onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={project.image} alt={project.title} style={imageStyle} />
      {isOpen && (
        <div style={descStyle}>
          <h3 style={titleStyle}>{project.title}</h3>
          <p style={paraStyle}>{project.description}</p>
          <div style={{ marginBottom: '16px' }}>
            {project.tech && project.tech.map((t, i) => (
              <span key={i} style={badgeStyle}>{t}</span>
            ))}
          </div>
          <div>
            <button style={btnViewStyle} onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.id}`) }}>View Details →</button>
            <button style={btnCloseStyle} onClick={(e) => { e.stopPropagation(); setIsOpen(false) }}>✕ Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard