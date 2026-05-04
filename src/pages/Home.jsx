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

  const styles = {
    section: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '80px 60px',
      minHeight: '100vh',
      gap: '40px'
    },
    greeting: {
      color: 'rgba(255,255,255,0.8)',
      fontStyle: 'italic',
      marginBottom: '12px',
      fontSize: '1rem'
    },
    name: {
      fontFamily: 'Lora, serif',
      fontSize: '3rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '12px',
      lineHeight: '1.15'
    },
    role: {
      fontSize: '1.2rem',
      color: 'rgba(255,255,255,0.8)',
      marginBottom: '30px'
    },
    roleAnimated: {
      color: '#00d4d4',
      fontWeight: 'bold'
    },
    cursor: {
      color: '#00d4d4',
      fontWeight: '300'
    },
    bio: {
      fontSize: '1rem',
      lineHeight: '1.8',
      color: 'rgba(255,255,255,0.8)',
      maxWidth: '520px',
      marginBottom: '36px'
    },
    buttons: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    },
    btnHire: {
      display: 'inline-block',
      padding: '13px 36px',
      backgroundColor: '#00d4d4',
      color: '#0a2a30',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: 'bold',
      textDecoration: 'none'
    },
    btnCV: {
      display: 'inline-block',
      padding: '13px 36px',
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: 'bold',
      textDecoration: 'none'
    },
    photo: {
      width: '280px',
      height: '280px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '4px solid #00d4d4',
      boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
      flexShrink: 0
    }
  }

  return (
    <section style={styles.section}>
      <div style={{ maxWidth: '600px' }}>
        <p style={styles.greeting}>Hello, it's me</p>
        <h1 style={styles.name}>Marlene Uwamahoro</h1>
        <p style={styles.role}>
          And I'm a{' '}
          <span style={styles.roleAnimated}>{roleText}</span>
          <span style={styles.cursor}>|</span>
        </p>
        <p style={styles.bio}>
          I am a Software Engineering graduate from AUCA with a strong passion for web
          development. I build responsive and user-friendly applications using HTML, CSS,
          and JavaScript.
        </p>
        <div style={styles.buttons}>
          <Link to="/contact" style={styles.btnHire}>Hire Me</Link>
          <a href="/cv.pdf" download style={styles.btnCV}>Download CV</a>
        </div>
      </div>
      <img src={marleneImg} alt="Marlene" style={styles.photo} />
    </section>
  )
}

export default Home