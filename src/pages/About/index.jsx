import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import './About.scss'

const Index = () => {
  return (
    <div className="kasa-container">
      <Banner img="about" />
      <div className="kasa-collapses">
        <Collapse
          title="Fiabilité"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero fermentum nisl dui ipsum facilisis platea. Nisl natoque aenean viverra sit himenaeos parturient per bibendum? Nisi ridiculus in sed; interdum sagittis enim adipiscing tempus. Velit erat platea dapibus feugiat senectus vehicula. Neque potenti mus augue auctor ad. Dapibus semper at posuere sodales justo semper ipsum sapien. Donec vehicula quisque cras justo non litora elementum. Diam faucibus sodales curae rutrum dui."
        />
        <Collapse
          title="Respect"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero fermentum nisl dui ipsum facilisis platea. Nisl natoque aenean viverra sit himenaeos parturient per bibendum? Nisi ridiculus in sed; interdum sagittis enim adipiscing tempus. Velit erat platea dapibus feugiat senectus vehicula. Neque potenti mus augue auctor ad. Dapibus semper at posuere sodales justo semper ipsum sapien. Donec vehicula quisque cras justo non litora elementum. Diam faucibus sodales curae rutrum dui."
        />
        <Collapse
          title="Service"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero fermentum nisl dui ipsum facilisis platea. Nisl natoque aenean viverra sit himenaeos parturient per bibendum? Nisi ridiculus in sed; interdum sagittis enim adipiscing tempus. Velit erat platea dapibus feugiat senectus vehicula. Neque potenti mus augue auctor ad. Dapibus semper at posuere sodales justo semper ipsum sapien. Donec vehicula quisque cras justo non litora elementum. Diam faucibus sodales curae rutrum dui."
        />
        <Collapse
          title="Sécurité"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Libero fermentum nisl dui ipsum facilisis platea. Nisl natoque aenean viverra sit himenaeos parturient per bibendum? Nisi ridiculus in sed; interdum sagittis enim adipiscing tempus. Velit erat platea dapibus feugiat senectus vehicula. Neque potenti mus augue auctor ad. Dapibus semper at posuere sodales justo semper ipsum sapien. Donec vehicula quisque cras justo non litora elementum. Diam faucibus sodales curae rutrum dui."
        />
      </div>
    </div>
  )
}

export default Index
