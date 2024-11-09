import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
import logements from '../../stores/logements.json'

const Index = () => {
  return (
    <div className="kasa-container">
      <Banner text="Chez vous, partout et ailleurs" img="home" />
      <Gallery elements={logements} />
    </div>
  )
}

export default Index
