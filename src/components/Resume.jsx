function Resume() {

  const linkStyle = {
    display: 'inline-block',
    padding: '14px 40px',
    backgroundColor: '#c0635a',
    color: 'white',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '1rem',
    textDecoration: 'none'
  }

  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh'
  }

  const containerStyle = {
    textAlign: 'center',
    maxWidth: '600px'
  }

  const titleStyle = {
    fontFamily: 'Lora, serif',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px'
  }

  const paraStyle = {
    color: 'rgba(255,255,255,0.8)',
    fontSize: '1rem',
    lineHeight: '1.8',
    marginBottom: '32px'
  }

  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>

        <h2 style={titleStyle}>
          Resume
        </h2>

        <p style={paraStyle}>
          Download my resume to learn more 
          about my education, skills, 
          and experience.
        </p>

        <a href="/cv.pdf" download style={linkStyle}>
          ⬇ Download CV
        </a>

      </div>
    </div>
  )
}

export default Resume