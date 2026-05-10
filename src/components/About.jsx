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
        <h2 style={titleStyle}>Software Engineer & Web Developer</h2>
        <div style={statsStyle}>
          {[
            { num: '2+', label: 'Years Learning' },
            { num: '5+', label: 'Projects Built' },
            { num: '10+', label: 'Skills' }
          ].map((s, i) => (
            <div key={i}>
              <div style={statNumStyle}>{s.num}</div>
              <div style={statLabelStyle}>{s.label}</div>
            </div>
          ))}
        </div>
        <p style={paraStyle}>
          I am a motivated Software Engineering graduate with hands-on experience in
          web development and IT support. During my training and externship, I worked on
          real-world projects such as building data visualization dashboards and web applications.
        </p>
        {showMore && (
          <div>
            <p style={paraStyle}>
              I have experience using HTML, CSS, JavaScript, and version control tools
              like Git and GitHub. I am passionate about creating clean, responsive,
              and user-friendly interfaces.
            </p>
            <p style={paraStyle}>
              I am currently improving my skills in React and backend development,
              with the goal of becoming a full-stack developer.
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