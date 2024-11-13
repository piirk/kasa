import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card/Card'
import './Gallery.scss'

const Gallery = ({ logements }) => {
  return (
    <div className="kasa-gallery">
      {logements.map((element) => {
        return <Card key={element.id} {...element} />
      })}
    </div>
  )
}

Gallery.propTypes = {
  logements: PropTypes.array.isRequired,
}

export default Gallery
