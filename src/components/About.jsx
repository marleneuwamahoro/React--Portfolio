import { useState } from 'react'
import marleneImg from '../assets/pict.jpeg'

function About() {
  const [showMore, setShowMore] = useState(false)

  const styles = {
    section: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '60px',
      padding: '80px 60px',
      minHeight: '100vh'
    },
    photo: {
      width: '280px',
      height: '280px',
      objectFit: 'cover',
      borderRadius: '50%',
      border: '4px solid #4a8eac',
      boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
      flexShrink: 0
    },
    title: {
      fontFamily: 'Lora, serif',
      fontSize: '2.4rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '30px'
    },
    para: {
      fontSize: '1.05rem',
      lineHeight: '1.85',
      color: 'rgba(255,255,255,0.8)',
      marginBottom: '30px'
    },
    btn: {
      display: 'inline-block',
      padding: '14px 40px',
      backgroundColor: '#d96ab0',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer'
    }
  }

  return (
    <section style={styles.section}>
      <img src={marleneImg} alt="Marlene" style={styles.photo} />
      <div style={{ maxWidth: '580px' }}>
        <h2 style={styles.title}>About Me</h2>
        <p style={styles.para}>
          I am a motivated Software Engineering graduate with hands-on experience in
          web development and IT support. During my training and externship, I worked on
          real-world projects such as building data visualization dashboards and web applications.
        </p>
        {showMore && (
          <div>
            <p style={styles.para}>
              I have experience using HTML, CSS, JavaScript, and version control tools
              like Git and GitHub. I am passionate about creating clean, responsive,
              and user-friendly interfaces.
            </p>
            <p style={styles.para}>
              I am currently improving my skills in React and backend development,
              with the goal of becoming a full-stack developer.
            </p>
          </div>
        )}
        <button style={styles.btn} onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  )
}

export default About