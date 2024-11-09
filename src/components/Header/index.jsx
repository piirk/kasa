import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header className="kasa-header">
      <img src="/logo.svg" alt="Logo" className="kasa-header__logo" />
      <nav className="kasa-header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
