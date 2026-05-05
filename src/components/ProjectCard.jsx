import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  const cardStyle = { borderRadius: '20px', overflow: 'hidden', cursor: 'pointer', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', transform: hovered ? 'translateY(-8px)' : 'translateY(0)', transition: 'all 0.3s ease', boxShadow: hovered ? '0 20px 60px rgba(167,139,250,0.2)' : '0 4px 20px rgba(0,0,0,0.2)' }
  const imageStyle = { width: '100%', height: '240px', objectFit: 'cover', display: 'block' }
  const descStyle = { padding: '28px', background: 'rgba(15,12,41,0.95)', borderTop: '2px solid #a78bfa' }
  const titleStyle = { fontFamily: 'Lora, serif', fontSize: '1.3rem', fontWeight: 'bold', color: 'white', marginBottom: '10px' }
  const paraStyle = { fontSize: '0.9rem', lineHeight: '1.7', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }
  const badgeStyle = { display: 'inline-block', padding: '4px 12px', background: 'rgba(167,139,250,0.15)', color: '#a78bfa', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', marginRight: '6px', marginBottom: '6px', border: '1px solid rgba(167,139,250,0.3)' }
  const btnViewStyle = { padding: '8px 20px', background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', color: 'white', border: 'none', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer', marginRight: '8px' }
  const btnCloseStyle = { padding: '8px 20px', backgroundColor: 'transparent', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '0.85rem', cursor: 'pointer' }

  return (
    <div
      style={cardStyle}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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