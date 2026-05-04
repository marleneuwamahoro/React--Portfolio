import { NavLink } from 'react-router-dom'

function Navbar() {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 30,
    background: 'rgba(42, 80, 95, 0.85)',
    backdropFilter: 'blur(10px)'
  }

  const logoStyle = {
    fontFamily: 'Caveat, cursive',
    fontSize: '2rem',
    color: 'white',
    letterSpacing: '1px'
  }

  const ulStyle = {
    display: 'flex',
    gap: '40px',
    listStyle: 'none',
    margin: 0,
    padding: 0
  }

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
                color: isActive ? '#00d4d4' : 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
                borderBottom: isActive ? '2px solid #00d4d4' : 'none',
                paddingBottom: isActive ? '2px' : '0'
              })}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar