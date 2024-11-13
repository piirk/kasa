import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'
import logements from '../../stores/logements.json'
import banner from '../../assets/home.png'

const Home = () => {
  return (
    <div className="kasa-container">
      <Banner text="Chez vous, partout et ailleurs" img={banner} />
      <Gallery logements={logements} />
    </div>
  )
}

export default Home
