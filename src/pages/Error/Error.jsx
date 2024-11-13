import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './Error.scss'

const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
