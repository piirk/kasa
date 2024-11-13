import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ id, cover, title }) => {
  return (
    <div className="kasa-thumb">
      <Link to={`/logement/${id}`}>
        <img src={cover} alt={title} />
        <div className="kasa-thumb__overlay"></div>
        <h2>{title}</h2>
      </Link>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
