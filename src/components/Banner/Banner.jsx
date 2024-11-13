import PropTypes from 'prop-types'
import './Banner.scss'

const Banner = ({ text, img }) => {
  return (
    <div className="kasa-banner">
      <img src={img} alt="Banner" className="kasa-banner__img" />
      <h1>{text}</h1>
    </div>
  )
}

Banner.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string.isRequired,
}

export default Banner
