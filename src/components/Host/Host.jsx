import React from 'react'
import PropTypes from 'prop-types'
import './Host.scss'

const Host = ({ host }) => {
  return (
    <span style={{ whiteSpace: 'pre-wrap' }} className="kasa-host">
      {host.name.replace(' ', '\u000A')}
      <img src={host.picture} alt={host.name}></img>
    </span>
  )
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
}

export default Host
