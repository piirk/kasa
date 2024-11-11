import React, { useState } from 'react'
import './Carousel.scss'
import leftArrow from './assets/left.svg'
import rightArrow from './assets/right.svg'

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0)
  const length = images.length
  const handlePrevious = () => {
    const newIndex = index - 1
    setIndex(newIndex < 0 ? length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = index + 1
    setIndex(newIndex >= length ? 0 : newIndex)
  }

  return (
    <div className="kasa-carousel">
      <button className="left" onClick={handlePrevious}>
        <img src={leftArrow} alt="left" />
      </button>
      <button className="right" onClick={handleNext}>
        <img src={rightArrow} alt="right" />
      </button>
      <img src={images[index]} alt={`${index + 1}`} />
    </div>
  )
}

export default Carousel
