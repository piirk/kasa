import React from 'react'
import PropTypes from 'prop-types'
import './Tag.scss'

const Tag = ({ text }) => {
  return <span className="kasa-tag">{text}</span>
}

Tag.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Tag
