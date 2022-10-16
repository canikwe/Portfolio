import React from 'react'
import { techListData } from './TechList.data'
import { Tech } from './Tech'

export const TechList = () => {
  const filteredTechList = () => {
    return techListData
      .filter(({ level }) => level > 50)
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
