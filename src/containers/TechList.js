import React from 'react'
import techList from '../data/techList'
import Tech from '../components/Tech'

const TechList = () => {
  const filteredTechList = () => {
    return techList
      .filter((t) => t.level > 50)
      .sort((a, b) => {
        const n = b.level - a.level
        if (n !== 0) return n

        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      })
  }

  return (
    <div id="tech-list-container">
      <p className="title is-4">Tech List</p>
      <div id="tech-list">
        {filteredTechList().map((t) => (
          <Tech key={t.name} tech={t} />
        ))}
      </div>
    </div>
  )
}

export default TechList
