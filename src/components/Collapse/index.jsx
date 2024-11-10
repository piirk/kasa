import React, { useState, useRef } from 'react'
import './Collapse.scss'
import arrow from './assets/arrow.svg'

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef()

  return (
    <div className="kasa-collapse">
      <button
        className="kasa-collapse__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <img
          src={arrow}
          alt="arrow"
          className={`kasa-collapse__arrow ${isOpen ? 'kasa-collapse__arrow--open' : ''}`}
        />
      </button>

      <div
        className="content-parent"
        ref={contentRef}
        style={
          isOpen
            ? { height: contentRef.current.scrollHeight + 'px' }
            : { height: '0px' }
        }
      >
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  )
}

export default Collapse
