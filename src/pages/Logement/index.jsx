import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import Slideshow from '../../components/Slideshow'
import './Logement.scss'

const Index = () => {
  // scroll to top when component is mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()
  const logements = require('../../stores/logements.json')
  const logement = logements.find((logement) => logement.id === id)

  // if logement is not found, redirect to error page
  if (!logement) {
    return <Navigate to="/error" replace />
  }

  return (
    <div className="kasa-container kasa-logement">
      <Slideshow images={logement.pictures} />
      <div className="kasa-logement__main-container">
        <div className="kasa-logement__main-container__left">
          <div className="kasa-logement__main-container__left__title">
            <h1>{logement.title}</h1>
            <span>{logement.location}</span>
          </div>
          <div className="kasa-logement__main-container__left__tags">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="kasa-logement__main-container__right">
          <span className="kasa-logement__main-container__right__host">
            {logement.host.name}
            <img src={logement.host.picture} alt={logement.host.name}></img>
          </span>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="kasa-logement__collapses-container">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            '<ul><li>' + logement.equipments.join('</li><li>') + '</li></ul>'
          }
        />
      </div>
    </div>
  )
}

export default Index
