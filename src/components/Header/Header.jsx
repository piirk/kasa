import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header className="kasa-header">
      <img src="/logo.svg" alt="Logo" className="kasa-header__logo" />
      <nav className="kasa-header__nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
