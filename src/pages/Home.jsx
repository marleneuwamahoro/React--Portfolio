import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import marleneImg from '../assets/pict.jpeg'

function Home() {
  const roles = ['Frontend Developer', 'Full-Stack Developer', 'Software Engineer', 'Web Developer']
  const [roleText, setRoleText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 60 : 100
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setRoleText(currentRole.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setRoleText(currentRole.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setRoleIndex(prev => (prev + 1) % roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  const sectionStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 80px', minHeight: '100vh', gap: '60px' }
  const greetingStyle = { color: '#a78bfa', fontStyle: 'italic', marginBottom: '12px', fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase' }
  const nameStyle = { fontFamily: 'Lora, serif', fontSize: '3.5rem', fontWeight: 'bold', color: 'white', marginBottom: '12px', lineHeight: '1.15' }
  const roleStyle = { fontSize: '1.3rem', color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }
  const roleAnimatedStyle = { background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }
  const cursorStyle = { color: '#a78bfa', fontWeight: '300' }
  const bioStyle = { fontSize: '1rem', lineHeight: '1.9', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', marginBottom: '40px' }
  const buttonsStyle = { display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '30px' }
  const btnHireStyle = { display: 'inline-block', padding: '14px 40px', background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', color: 'white', borderRadius: '50px', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 20px rgba(167,139,250,0.4)' }
  const btnCVStyle = { display: 'inline-block', padding: '14px 40px', backgroundColor: 'transparent', color: 'white', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '50px', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none' }
  const socialWrapStyle = { display: 'flex', gap: '12px' }
  const socialLinkStyle = { color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '600', padding: '8px 20px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '25px', transition: 'all 0.3s' }
  const photoWrapStyle = { flexShrink: 0, position: 'relative' }
  const photoStyle = { width: '320px', height: '320px', objectFit: 'cover', borderRadius: '50%', border: '4px solid transparent', background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #a78bfa, #60a5fa) border-box', boxShadow: '0 20px 60px rgba(167,139,250,0.3)' }
  const photoBgStyle = { position: 'absolute', inset: '-8px', borderRadius: '50%', background: 'linear-gradient(135deg, #a78bfa33, #60a5fa33)', zIndex: -1 }

  return (
    <section style={sectionStyle}>
      <div style={{ maxWidth: '600px' }}>
        <p style={greetingStyle}>Hello, it's me</p>
        <h1 style={nameStyle}>Marlene Uwamahoro</h1>
        <p style={roleStyle}>
          And I'm a{' '}
          <span style={roleAnimatedStyle}>{roleText}</span>
          <span style={cursorStyle}>|</span>
        </p>
        <p style={bioStyle}>
          I am a Software Engineering graduate from AUCA with a strong passion for
          web development. I build responsive and user-friendly applications using
          HTML, CSS, and JavaScript.
        </p>
        <div style={buttonsStyle}>
          <Link to="/contact" style={btnHireStyle}>Hire Me 🚀</Link>
          <a href="/cv.pdf" download="Marlene_CV.pdf" style={btnCVStyle}>Download CV ⬇</a>
        </div>
        <div style={socialWrapStyle}>
          <a href="https://github.com/marleneuwamahoro" target="_blank" rel="noreferrer" style={socialLinkStyle}>🐙 GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={socialLinkStyle}>💼 LinkedIn</a>
          <a href="mailto:marleneuwamahoro422@gmail.com" style={socialLinkStyle}>✉️ Email</a>
        </div>
      </div>
      <div style={photoWrapStyle}>
        <div style={photoBgStyle}></div>
        <img src={marleneImg} alt="Marlene" style={photoStyle} />
      </div>
    </section>
  )
}

export default Home