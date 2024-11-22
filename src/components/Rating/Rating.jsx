import React from 'react'
import PropTypes from 'prop-types'
import './Rating.scss'
import star from './assets/star.svg'
import starGrey from './assets/star-grey.svg'

const Rating = ({ rating }) => {
  const ratingNumber = parseInt(rating)

  return (
    <div className="kasa-rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={index < ratingNumber ? star : starGrey}
          alt="star"
          className="kasa-rating__star"
        />
      ))}
    </div>
  )
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
}

export default Rating
