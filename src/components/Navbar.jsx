import { NavLink } from 'react-router-dom'

function Navbar() {
  const navStyle = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 80px', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(15,23,42,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(59,130,246,0.15)' }
  const logoStyle = { fontFamily: 'Caveat, cursive', fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', letterSpacing: '2px' }
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
                color: isActive ? '#3b82f6' : '#e2e8f0',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
                letterSpacing: '0.5px',
                borderBottom: isActive ? '2px solid #3b82f6' : 'none',
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