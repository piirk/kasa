import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src="/logo.svg" alt="Logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  )
}

export default Header
