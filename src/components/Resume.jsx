function Resume() {
  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 30 },
    { name: 'Git & GitHub', level: 75 },
    { name: 'Python', level: 00 },
    { name: 'MySQL', level: 45 }
  ]

  const categories = [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'MySQL'] },
    { category: 'Soft Skills', items: ['Teamwork', 'Communication', 'Problem Solving'] }
  ]

  const sectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '80px 60px' }
  const tagStyle = { display: 'inline-block', padding: '4px 14px', background: 'linear-gradient(90deg, #a78bfa33, #60a5fa33)', color: '#a78bfa', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '16px', border: '1px solid rgba(167,139,250,0.3)' }
  const titleStyle = { fontFamily: 'Lora, serif', fontSize: '2.6rem', fontWeight: 'bold', color: 'white', marginBottom: '12px', textAlign: 'center' }
  const subtitleStyle = { color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: '60px', textAlign: 'center' }
  const contentStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', width: '100%', maxWidth: '900px', marginBottom: '60px' }
  const skillNameStyle = { color: 'white', fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }
  const trackStyle = { width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden', marginBottom: '20px' }
  const cardStyle = { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.08)' }
  const categoryStyle = { color: '#a78bfa', fontWeight: 'bold', fontSize: '1rem', marginBottom: '14px', fontFamily: 'Lora, serif' }
  const badgeStyle = { display: 'inline-block', padding: '5px 14px', backgroundColor: 'rgba(167,139,250,0.1)', color: 'rgba(255,255,255,0.7)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600', margin: '3px', border: '1px solid rgba(167,139,250,0.2)' }
  const downloadBtnStyle = { display: 'inline-block', padding: '16px 50px', background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', color: 'white', borderRadius: '50px', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 4px 20px rgba(167,139,250,0.4)' }

  return (
    <div style={sectionStyle}>
      <span style={tagStyle}>My Resume</span>
      <h2 style={titleStyle}>Skills & Experience</h2>
      <p style={subtitleStyle}>What I bring to the table</p>

      <div style={contentStyle}>
        {/* Left — Skill bars */}
        <div>
          <h3 style={{ color: 'white', marginBottom: '24px', fontFamily: 'Lora, serif', fontSize: '1.2rem' }}>Skill Levels</h3>
          {skills.map(function(skill, i) {
            return (
              <div key={i}>
                <div style={skillNameStyle}>
                  <span>{skill.name}</span>
                  <span style={{ color: '#a78bfa' }}>{skill.level}%</span>
                </div>
                <div style={trackStyle}>
                  <div style={{ height: '100%', width: skill.level + '%', background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', borderRadius: '4px' }}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right — Categories */}
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