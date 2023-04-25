// IMPORTS
import { useState } from 'react'
import './Collapse.css'

// ASSETS
import ArrowDown from '../../assets/arrow-down.png'
import ArrowUp from '../../assets/arrow-up.png'


function Collapse({ data }) {
  const [openIndexes, setOpenIndexes] = useState([])

  const toggleCollapse = (index) => {
    const currentIndex = openIndexes.indexOf(index)
    const newOpenIndexes = [...openIndexes]

    if (currentIndex === -1) {
      newOpenIndexes.push(index)
    } else {
      newOpenIndexes.splice(currentIndex, 1)
    }

    setOpenIndexes(newOpenIndexes)
  }

  const numCollapses = data.length
  const containerClass = numCollapses === 2 ? 'CollapseHomeTwo' : 'CollapseHome'

  return (
    <div className={containerClass}>
      {data.map((collapse, index) => (
        <div className="ContCollapse" key={index}>
          <div className="TittleCont" onClick={() => toggleCollapse(index)}>
            <h3 className='TittleCollapse'>{collapse.title}</h3>
            {openIndexes.includes(index) ? (
              <img src={ArrowUp} alt="Arrow" />
            ) : (
               <img src={ArrowDown} alt="Arrow" />
            )}
          </div>
          
          {openIndexes.includes(index) && (
            <div className="TextCollapse">{collapse.text}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Collapse