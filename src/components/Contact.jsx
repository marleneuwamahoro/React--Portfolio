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

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    backgroundColor: 'rgba(255,255,255,0.18)',
    border: 'none',
    borderRadius: '6px',
    color: 'white',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'Nunito, sans-serif',
    boxSizing: 'border-box'
  }

  const styles = {
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '50px',
      padding: '80px 60px',
      minHeight: '100vh'
    },
    title: {
      fontFamily: 'Lora, serif',
      fontSize: '2.4rem',
      fontWeight: 'bold',
      color: 'white',
      width: '100%',
      textAlign: 'center'
    },
    titleSpan: {
      color: '#c0635a',
      fontStyle: 'italic'
    },
    body: {
      display: 'flex',
      gap: '60px',
      width: '100%',
      flexWrap: 'wrap'
    },
    infoTitle: {
      fontFamily: 'Lora, serif',
      fontSize: '1.6rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '16px'
    },
    infoPara: {
      fontSize: '0.95rem',
      lineHeight: '1.75',
      color: 'rgba(255,255,255,0.8)',
      marginBottom: '28px',
      maxWidth: '340px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      marginBottom: '20px'
    },
    icon: {
      fontSize: '1.6rem',
      flexShrink: 0,
      marginTop: '2px'
    },
    itemLabel: {
      display: 'block',
      fontSize: '0.85rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '2px'
    },
    itemValue: {
      fontSize: '0.9rem',
      color: 'rgba(255,255,255,0.8)'
    },
    formRow: {
      display: 'flex',
      gap: '16px',
      marginBottom: '16px'
    },
    sendBtn: {
      padding: '14px 44px',
      backgroundColor: '#c0635a',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontFamily: 'Nunito, sans-serif'
    }
  }

  const contactItems = [
    { icon: '✉️', label: 'Email', value: 'marleneuwamahoro422@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+250789660816' },
    { icon: '📍', label: 'Location', value: 'Kigali – Rwanda' }
  ]

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>
        Contact <span style={styles.titleSpan}>Me!</span>
      </h2>

      <div style={styles.body}>
        {/* Left info */}
        <div style={{ flex: 1, minWidth: '260px' }}>
          <h3 style={styles.infoTitle}>Contact Information</h3>
          <p style={styles.infoPara}>
            Feel free to reach out to me through any of the following channels.
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
          {contactItems.map((item, i) => (
            <div key={i} style={styles.contactItem}>
              <span style={styles.icon}>{item.icon}</span>
              <div>
                <strong style={styles.itemLabel}>{item.label}</strong>
                <span style={styles.itemValue}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right form */}
        <div style={{ flex: 1.2, minWidth: '280px' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontSize: '4rem' }}>✅</p>
              <h3 style={{ color: '#48bb78', fontSize: '1.8rem', margin: '16px 0' }}>Message Sent!</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Thanks {form.firstName}! I will reply soon.</p>
              <button
                style={{ ...styles.sendBtn, marginTop: '20px' }}
                onClick={() => { setSent(false); setForm({ firstName: '', lastName: '', phone: '', email: '', message: '' }) }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={styles.formRow}>
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" style={inputStyle} />
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" style={inputStyle} />
              </div>
              <div style={styles.formRow}>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone NO" style={inputStyle} />
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email" style={inputStyle} />
              </div>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={6} style={{ ...inputStyle, resize: 'vertical', marginBottom: '20px', display: 'block' }} />
              <button type="submit" style={styles.sendBtn}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact