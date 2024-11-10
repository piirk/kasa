import './Collapse.scss'
import arrow from './assets/arrow.svg'

const Collapse = ({ title, content }) => {
  return (
    <details className="kasa-collapse">
      <summary>
        {title}
        <img src={arrow} alt="arrow" className="arrow"></img>
      </summary>
      <p>{content}</p>
    </details>
  )
}

export default Collapse
