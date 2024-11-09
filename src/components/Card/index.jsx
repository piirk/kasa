import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ id, cover, title }) => {
  return (
    <div className="kasa-thumb">
      <Link to={`/article/${id}`}>
        <img src={cover} alt={title} />
        <div className="kasa-thumb__overlay"></div>
        <h2>{title}</h2>
      </Link>
    </div>
  )
}

export default Card
