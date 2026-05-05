import { NavLink } from 'react-router-dom'

function Navbar() {
  const navStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 60px', position: 'sticky', top: 0, zIndex: 100, background: 'rgba(15,12,41,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }
  const logoStyle = { fontFamily: 'Caveat, cursive', fontSize: '2rem', color: 'white', letterSpacing: '2px', background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
  const ulStyle = { display: 'flex', gap: '40px', listStyle: 'none', margin: 0, padding: 0 }

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Project' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Portfolio</div>
      <ul style={ulStyle}>
        {links.map((link, i) => (
          <li key={i}>
            <NavLink
              to={link.path}
              end={link.path === '/'}
              style={({ isActive }) => ({
                color: isActive ? '#a78bfa' : 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
                transition: 'color 0.3s',
                borderBottom: isActive ? '2px solid #a78bfa' : 'none',
                paddingBottom: isActive ? '4px' : '0'
              })}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar