import { useState } from 'react'
import marleneImg from '../assets/pict.jpeg'

function About() {
  const [showMore, setShowMore] = useState(false)

  const sectionStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '80px', padding: '80px', minHeight: '100vh', backgroundColor: '#0f172a' }
  const photoStyle = { width: '320px', height: '380px', objectFit: 'cover', borderRadius: '16px', flexShrink: 0, boxShadow: '0 20px 60px rgba(59,130,246,0.15)', border: '2px solid rgba(59,130,246,0.2)' }
  const tagStyle = { display: 'inline-block', padding: '5px 14px', backgroundColor: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '16px', border: '1px solid rgba(59,130,246,0.2)', letterSpacing: '1px' }
  const titleStyle = { fontFamily: 'Lora, serif', fontSize: '2.6rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '16px' }
  const paraStyle = { fontSize: '1rem', lineHeight: '1.9', color: '#94a3b8', marginBottom: '20px' }
  const btnStyle = { display: 'inline-block', padding: '12px 32px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '0.95rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 20px rgba(59,130,246,0.3)' }
  const statsStyle = { display: 'flex', gap: '40px', marginBottom: '32px', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.06)' }
  const statNumStyle = { fontSize: '2.2rem', fontWeight: 'bold', color: '#3b82f6' }
  const statLabelStyle = { color: '#94a3b8', fontSize: '0.8rem', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }

  return (
    <section style={sectionStyle}>
    <img src={marleneImg} alt="Marlene" style={photoStyle} />

    <div style={{ maxWidth: '560px' }}>
      <span style={tagStyle}>ABOUT ME</span>

      <h2 style={titleStyle}>
        Software Engineer & Full-Stack Web Developer
      </h2>

      <div style={statsStyle}>
        {[
          { num: '2+', label: 'Years of Learning Experience' },
          { num: '5+', label: 'Real Projects Built' },
          { num: '8+', label: 'Technologies Used' }
        ].map((s, i) => (
          <div key={i}>
            <div style={statNumStyle}>{s.num}</div>
            <div style={statLabelStyle}>{s.label}</div>
          </div>
        ))}
      
        </div>
     <p style={paraStyle}>
  I am a Software Engineering graduate with practical experience in web development and IT support.
  During my studies, bootcamp training, and externship, I worked on real-world projects including
  responsive web applications, dashboards, and system support tasks.
</p>

{showMore && (
  <div>
    <p style={paraStyle}>
      I have strong skills in HTML, CSS, JavaScript, and version control using Git and GitHub.
      I also have experience working with Python and Flask for backend development, building simple
      APIs and server-side applications. I enjoy creating clean, responsive, and user-friendly interfaces.
    </p>

    <p style={paraStyle}>
      I am currently strengthening my expertise in React and backend development, with growing
      experience in full-stack application development using modern frontend and backend technologies.
    </p>
  
          </div>
        )}
        <button style={btnStyle} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See Less ↑' : 'Read More ↓'}
        </button>
      </div>
    </section>
  )
}

export default About