import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import './Logement.scss'

const Index = () => {
  const logement = {
    id: 'c67ab8a7',
    title: 'Appartement cosy',
    cover:
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
    pictures: [
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
      'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
    ],
    description:
      "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
    host: {
      name: 'Nathalie Jean',
      picture:
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg',
    },
    rating: '4',
    location: 'Ile de France - Paris 17e',
    equipments: [
      'Équipements de base',
      'Micro-Ondes',
      'Douche italienne',
      'Frigo',
      'WIFI',
    ],
    tags: ['Batignolle', 'Montmartre'],
  }

  return (
    <div className="kasa-container kasa-logement">
      <img src={logement.cover} alt={logement.title} />
      <div className="kasa-logement__main-container">
        <div className="kasa-logement__main-container__left">
          <div className="kasa-logement__main-container__left__title">
            <h1>{logement.title}</h1>
            <span>{logement.location}</span>
          </div>
          <div className="kasa-logement__main-container__left__tags">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="kasa-logement__main-container__right">
          <span className="kasa-logement__main-container__right__host">
            {logement.host.name}
            <img src={logement.host.picture} alt={logement.host.name}></img>
          </span>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="kasa-logement__collapses-container">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            '<ul><li>' + logement.equipments.join('</li><li>') + '</li></ul>'
          }
        />
      </div>
    </div>
  )
}

export default Index
