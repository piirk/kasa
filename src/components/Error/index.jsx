import { Link } from 'react-router-dom'
import './Error.scss'

const Error = () => {
  return (
    <div className="kasa-container kasa-404-container">
      <span className="kasa-404">404</span>
      <h1 className="kasa-404-title">
        Oups! La page que vous demandez n'existe pas.
      </h1>
      <Link className="kasa-404-link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
