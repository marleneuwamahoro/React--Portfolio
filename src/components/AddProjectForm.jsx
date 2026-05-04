import { useState } from 'react'

function AddProjectForm({ onAdd }) {
  const [form, setForm] = useState({ title: '', description: '', tech: '', image: '' })
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title || !form.description) {
      setError('Title and description are required!')
      return
    }
    onAdd({
      title: form.title,
      description: form.description,
      tech: form.tech.split(',').map(t => t.trim()).filter(t => t),
      image: form.image || 'https://picsum.photos/400/300'
    })
    setForm({ title: '', description: '', tech: '', image: '' })
    setError('')
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
    marginBottom: '16px',
    fontFamily: 'Nunito, sans-serif',
    boxSizing: 'border-box'
  }

  const wrapStyle = {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '16px',
    padding: '30px',
    marginBottom: '30px'
  }

  const btnStyle = {
    padding: '12px 30px',
    backgroundColor: '#c0635a',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer'
  }

  return (
    <div style={wrapStyle}>
      <h3 style={{ fontFamily: 'Lora, serif', fontSize: '1.6rem', color: 'white', marginBottom: '20px' }}>
        ➕ Add New Project
      </h3>
      {error && <p style={{ color: '#fc8181', marginBottom: '16px' }}>⚠️ {error}</p>}
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Project Title *" style={inputStyle} />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Project Description *" rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
        <input name="tech" value={form.tech} onChange={handleChange} placeholder="Technologies (HTML, CSS, JS)" style={inputStyle} />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL (optional)" style={inputStyle} />
        <button type="submit" style={btnStyle}>Add Project ✓</button>
      </form>
    </div>
  )
}

export default AddProjectForm