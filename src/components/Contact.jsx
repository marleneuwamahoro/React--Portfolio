import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.firstName || !form.email || !form.message) {
      alert('Please fill required fields!')
      return
    }
    setSent(true)
  }

  const sectionStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '80px 80px', minHeight: '100vh', backgroundColor: '#0f172a' }
  const tagStyle = { display: 'inline-block', padding: '5px 14px', backgroundColor: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '6px', fontSize: '0.8rem', fontWeight: '700', marginBottom: '16px', border: '1px solid rgba(59,130,246,0.2)', letterSpacing: '1px' }
  const titleStyle = { fontFamily: 'Lora, serif', fontSize: '2.6rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '12px', textAlign: 'center' }
  const subtitleStyle = { color: '#94a3b8', fontSize: '1rem', marginBottom: '60px', textAlign: 'center' }
  const bodyStyle = { display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', width: '100%', maxWidth: '1000px' }
  const infoCardStyle = { backgroundColor: '#1e293b', borderRadius: '16px', padding: '40px', border: '1px solid rgba(59,130,246,0.1)' }
  const infoTitleStyle = { fontFamily: 'Lora, serif', fontSize: '1.5rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '16px' }
  const infoParaStyle = { color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '30px' }
  const itemStyle = { display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }
  const iconBoxStyle = { width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0, border: '1px solid rgba(59,130,246,0.2)' }
  const itemLabelStyle = { display: 'block', color: '#3b82f6', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }
  const itemValueStyle = { color: '#94a3b8', fontSize: '0.9rem' }
  const formCardStyle = { backgroundColor: '#1e293b', borderRadius: '16px', padding: '40px', border: '1px solid rgba(59,130,246,0.1)' }
  const inputStyle = { width: '100%', padding: '14px 18px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(226,232,240,0.1)', borderRadius: '8px', color: '#e2e8f0', fontSize: '0.95rem', outline: 'none', fontFamily: 'Nunito, sans-serif', boxSizing: 'border-box' }
  const rowStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }
  const sendBtnStyle = { width: '100%', padding: '15px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 20px rgba(59,130,246,0.3)' }

  const contactItems = [
    { icon: '✉️', label: 'Email', value: 'marleneuwamahoro422@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+250789660816' },
    { icon: '📍', label: 'Location', value: 'Kigali – Rwanda' }
  ]

  return (
    <section style={sectionStyle}>
      <span style={tagStyle}>GET IN TOUCH</span>
      <h2 style={titleStyle}>Contact Me</h2>
      <p style={subtitleStyle}>I am always open to new opportunities and collaborations</p>

      <div style={bodyStyle}>
        <div style={infoCardStyle}>
          <h3 style={infoTitleStyle}>Let's talk!</h3>
          <p style={infoParaStyle}>Feel free to reach out through any of these channels. I will get back to you as soon as possible.</p>
          {contactItems.map((item, i) => (
            <div key={i} style={itemStyle}>
              <div style={iconBoxStyle}>{item.icon}</div>
              <div>
                <strong style={itemLabelStyle}>{item.label}</strong>
                <span style={itemValueStyle}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={formCardStyle}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <p style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</p>
              <h3 style={{ color: '#3b82f6', fontSize: '1.8rem', marginBottom: '12px' }}>Message Sent!</h3>
              <p style={{ color: '#94a3b8' }}>Thanks {form.firstName}! I will reply soon.</p>
              <button style={{ ...sendBtnStyle, marginTop: '24px', width: 'auto', padding: '12px 30px' }} onClick={() => { setSent(false); setForm({ firstName: '', lastName: '', phone: '', email: '', message: '' }) }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={rowStyle}>
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name *" style={inputStyle} />
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" style={inputStyle} />
              </div>
              <div style={rowStyle}>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" style={inputStyle} />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email *" style={inputStyle} />
              </div>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message *" rows={6} style={{ ...inputStyle, resize: 'vertical', marginBottom: '20px', display: 'block' }} />
              <button type="submit" style={sendBtnStyle}>Send Message 🚀</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact