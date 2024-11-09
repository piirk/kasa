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

export default Gallery