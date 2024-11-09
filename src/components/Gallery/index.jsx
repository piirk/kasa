import Card from '../Card'
import './Gallery.scss'

const Gallery = ({ elements }) => {
  return (
    <div className="kasa-gallery">
      {elements.map((element, index) => {
        return <Card key={index} {...element} />
      })}
    </div>
  )
}

export default Gallery
