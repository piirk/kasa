import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import logements from '../../stores/logements.json'

const Home = () => {
  return (
    <div className="kasa-container">
      <Banner text="Chez vous, partout et ailleurs" img="home" />
      <Gallery elements={logements} />
    </div>
  )
}

export default Home
