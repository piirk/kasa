import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ index, cover, title }) => {
  return (
    <div key={index} className="kasa-thumb">
      <img src={cover} alt={title} />
      <div className="kasa-thumb__overlay"></div>
      <h2>{title}</h2>
    </div>
  )
}

export default Card
