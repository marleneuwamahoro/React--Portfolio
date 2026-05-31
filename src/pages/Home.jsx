import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import marleneImg from '../assets/pict.jpeg'

function Home() {
  const roles = ['Frontend Developer','Backend Developer', 'Full-Stack Software Developer', 'Software Engineer', 'Web Developer']
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

  const sectionStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 80px', minHeight: '100vh', gap: '60px', backgroundColor: '#0f172a' }
  const greetingStyle = { color: '#3b82f6', fontStyle: 'italic', marginBottom: '12px', fontSize: '1.1rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '600' }
  const nameStyle = { fontFamily: 'Lora, serif', fontSize: '3.5rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '12px', lineHeight: '1.15' }
  const roleStyle = { fontSize: '1.3rem', color: '#94a3b8', marginBottom: '30px' }
  const roleAnimatedStyle = { color: '#3b82f6', fontWeight: 'bold' }
  const cursorStyle = { color: '#3b82f6' }
  const bioStyle = { fontSize: '1rem', lineHeight: '1.9', color: '#94a3b8', maxWidth: '520px', marginBottom: '40px' }
  const buttonsStyle = { display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '30px' }
  const btnHireStyle = { display: 'inline-block', padding: '14px 40px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 20px rgba(59,130,246,0.4)' }
  const btnCVStyle = { display: 'inline-block', padding: '14px 40px', backgroundColor: 'transparent', color: '#e2e8f0', border: '2px solid rgba(226,232,240,0.2)', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'none' }
  const socialWrapStyle = { display: 'flex', gap: '12px' }
  const socialLinkStyle = { color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '600', padding: '8px 20px', border: '1px solid rgba(226,232,240,0.1)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.03)' }
  const photoStyle = { width: '320px', height: '320px', objectFit: 'cover', borderRadius: '16px', flexShrink: 0, boxShadow: '0 20px 60px rgba(59,130,246,0.2)', border: '2px solid rgba(59,130,246,0.3)' }
  const badgeStyle = { display: 'inline-block', padding: '6px 16px', backgroundColor: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '20px', border: '1px solid rgba(59,130,246,0.2)', letterSpacing: '1px' }

  return (
    <section style={sectionStyle}>
      <div style={{ maxWidth: '600px' }}>
        <span style={badgeStyle}>AVAILABLE FOR HIRE ✅</span>
        <p style={greetingStyle}>Hello, it's me</p>
        <h1 style={nameStyle}>Marlene Uwamahoro</h1>
        <p style={roleStyle}>
          And I'm a{' '}
          <span style={roleAnimatedStyle}>{roleText}</span>
          <span style={cursorStyle}>|</span>
        </p>
        <p style={bioStyle}>
          I am a Software Engineering student at AUCA with a strong passion 
          for web development. I build responsive and user-friendly applications using
           HTML, CSS, JavaScript, React, and Tailwind CSS, and I am continuously expanding 
           my skills in full-stack development.
        </p>
        <div style={buttonsStyle}>
          <Link to="/contact" style={btnHireStyle}>Hire Me 🚀</Link>
          <a href="/cv.pdf" download="Marlene_CV.pdf" style={btnCVStyle}>Download CV ⬇</a>
        </div>
        <div style={socialWrapStyle}>
          <a href="https://github.com/marleneuwamahoro" target="_blank" rel="noreferrer" style={socialLinkStyle}>🐙 GitHub</a>
          <a href="https://www.linkedin.com/in/marlene-uwamahoro-69a56b236/" target="_blank" rel="noreferrer" style={socialLinkStyle}>💼 LinkedIn</a>
          <a href="mailto:marleneuwamahoro422@gmail.com" style={socialLinkStyle}>✉️ Email</a>
        </div>
      </div>
      <img src={marleneImg} alt="Marlene" style={photoStyle} />
    </section>
  )
}

export default Home