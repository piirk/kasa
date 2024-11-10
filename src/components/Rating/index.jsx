import './Rating.scss'
import star from './assets/star.svg'
import starGrey from './assets/star-grey.svg'

const Rating = ({ rating }) => {
  return (
    <div className="kasa-rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          key={index}
          src={index < rating ? star : starGrey}
          alt="star"
          className="kasa-rating__star"
        />
      ))}
    </div>
  )
}

export default Rating
