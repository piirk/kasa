import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ id, cover, title }) => {
  return (
    <article className="kasa-thumb">
      <Link to={`/logement/${id}`}>
        <figure>
          <img src={cover} alt={title} />
          <figcaption>
            <h2>{title}</h2>
          </figcaption>
        </figure>
      </Link>
    </article>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
