import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import './Gallery.scss'

const Gallery = ({ elements }) => {
  return (
    <div className="kasa-gallery">
      {elements.map((element) => {
        return <Card key={element.id} {...element} />
      })}
    </div>
  )
}

Gallery.propTypes = {
  elements: PropTypes.array.isRequired,
}

export default Gallery
