import PropTypes from 'prop-types'
import './Banner.scss'
import homeCover from './assets/home.png'
import aboutCover from './assets/about.png'

const Banner = ({ text, img }) => {
  let url = ''

  switch (img) {
    case 'home':
      url = homeCover
      break
    case 'about':
      url = aboutCover
      break
    default:
      return null
  }

  return (
    <div className="kasa-banner">
      <img src={url} alt="Banner" className="kasa-banner__img" />
      <h1>{text}</h1>
    </div>
  )
}

Banner.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string.isRequired,
}

export default Banner
