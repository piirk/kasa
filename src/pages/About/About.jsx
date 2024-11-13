import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import './About.scss'

const mockData = [
  {
    title: 'Fiabilité',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec dolor vehicula tincidunt. Nullam euismod, purus nec ultricies ultricies, mi tortor ultricies metus, at lacinia magna odio nec nunc. Donec et velit sit amet ligula eleifend rutrum. Nulla facilisi. Curabitur sed nisl sit amet lacus luctus tincidunt. Integer nec lacus in augue lacinia luctus. Sed nec risus ac justo ultrices lacinia. Nam auctor, sapien quis fermentum aliquet, mi nisi fermentum metus, eget ultricies nunc nunc nec nunc. Nullam nec nunc nec nunc.',
  },
  {
    title: 'Respect',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec dolor vehicula tincidunt. Nullam euismod, purus nec ultricies ultricies, mi tortor ultricies metus, at lacinia magna odio nec nunc. Donec et velit sit amet ligula eleifend rutrum. Nulla facilisi. Curabitur sed nisl sit amet lacus luctus tincidunt. Integer nec lacus in augue lacinia luctus. Sed nec risus ac justo ultrices lacinia. Nam auctor, sapien quis fermentum aliquet, mi nisi fermentum metus, eget ultricies nunc nunc nec nunc. Nullam nec nunc nec nunc.',
  },
  {
    title: 'Service',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec dolor vehicula tincidunt. Nullam euismod, purus nec ultricies ultricies, mi tortor ultricies metus, at lacinia magna odio nec nunc. Donec et velit sit amet ligula eleifend rutrum. Nulla facilisi. Curabitur sed nisl sit amet lacus luctus tincidunt. Integer nec lacus in augue lacinia luctus. Sed nec risus ac justo ultrices lacinia. Nam auctor, sapien quis fermentum aliquet, mi nisi fermentum metus, eget ultricies nunc nunc nec nunc. Nullam nec nunc nec nunc.',
  },
  {
    title: 'Sécurité',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis nec dolor vehicula tincidunt. Nullam euismod, purus nec ultricies ultricies, mi tortor ultricies metus, at lacinia magna odio nec nunc. Donec et velit sit amet ligula eleifend rutrum. Nulla facilisi. Curabitur sed nisl sit amet lacus luctus tincidunt. Integer nec lacus in augue lacinia luctus. Sed nec risus ac justo ultrices lacinia. Nam auctor, sapien quis fermentum aliquet, mi nisi fermentum metus, eget ultricies nunc nunc nec nunc. Nullam nec nunc nec nunc.',
  },
]

const About = () => {
  return (
    <div className="kasa-container">
      <Banner img="about" />
      <div className="kasa-collapses">
        {mockData.map((data, index) => (
          <Collapse key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  )
}

export default About
