import './Collapse.scss'

const Collapse = ({ title, content }) => {
  return (
    <details className="kasa-collapse">
      <summary>
        {title}
        <span className="marker"></span>
      </summary>
      <p>{content}</p>
    </details>
  )
}

export default Collapse
