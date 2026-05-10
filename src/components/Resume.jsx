function Resume() {
  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 50 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Python', level: 0 },
    { name: 'MySQL', level: 5 }
  ]

  const categories = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'MySQL'] },
    { category: 'Soft Skills', items: ['Teamwork', 'Communication', 'Problem Solving'] }
  ]

  const sectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', padding: '80px 80px', backgroundColor: '#0f172a' }
  const tagStyle = { display: 'inline-block', padding: '5px 14px', backgroundColor: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '16px', border: '1px solid rgba(59,130,246,0.2)', letterSpacing: '1px' }
  const titleStyle = { fontFamily: 'Lora, serif', fontSize: '2.6rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '12px', textAlign: 'center' }
  const subtitleStyle = { color: '#94a3b8', fontSize: '1rem', marginBottom: '60px', textAlign: 'center' }
  const contentStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', width: '100%', maxWidth: '960px', marginBottom: '60px' }
  const skillNameStyle = { color: '#e2e8f0', fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }
  const trackStyle = { width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden', marginBottom: '20px' }
  const cardStyle = { backgroundColor: '#1e293b', borderRadius: '12px', padding: '20px', border: '1px solid rgba(59,130,246,0.1)' }
  const categoryStyle = { color: '#3b82f6', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }
  const badgeStyle = { display: 'inline-block', padding: '4px 12px', backgroundColor: 'rgba(59,130,246,0.08)', color: '#94a3b8', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '600', margin: '3px', border: '1px solid rgba(59,130,246,0.15)' }
  const downloadBtnStyle = { display: 'inline-block', padding: '16px 50px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(59,130,246,0.4)' }

  return (
    <div style={sectionStyle}>
      <span style={tagStyle}>MY RESUME</span>
      <h2 style={titleStyle}>Skills & Experience</h2>
      <p style={subtitleStyle}>What I bring to the table</p>

      <div style={contentStyle}>
        <div>
          <h3 style={{ color: '#e2e8f0', marginBottom: '28px', fontFamily: 'Lora, serif', fontSize: '1.2rem' }}>Skill Levels</h3>
          {skills.map(function(skill, i) {
            return (
              <div key={i}>
                <div style={skillNameStyle}>
                  <span>{skill.name}</span>
                  <span style={{ color: '#3b82f6' }}>{skill.level}%</span>
                </div>
                <div style={trackStyle}>
                  <div style={{ height: '100%', width: skill.level + '%', backgroundColor: '#3b82f6', borderRadius: '3px' }}></div>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {categories.map(function(group, i) {
            return (
              <div key={i} style={cardStyle}>
                <h4 style={categoryStyle}>{group.category}</h4>
                <div>
                  {group.items.map(function(skill, j) {
                    return (
                      <span key={j} style={badgeStyle}>{skill}</span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <a href="/cv.pdf" download="Marlene_Uwamahoro_CV.pdf" style={downloadBtnStyle}>⬇ Download Full CV</a>
    </div>
  )
}

export default Resume