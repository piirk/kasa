import PropTypes from 'prop-types'
import './Banner.scss'

const Banner = ({ text, img }) => {
  return (
    <figure className="kasa-banner">
      <img src={img} alt="Banner" className="kasa-banner__img" />
      {text ? (
        <figcaption>
          <h1>{text}</h1>
        </figcaption>
      ) : null}
    </figure>
  )
}

Banner.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string.isRequired,
}

export default Banner
