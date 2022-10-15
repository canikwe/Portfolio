import React from 'react'
import { Tech as TechType } from './Tech.type'

interface Props {
  tech: TechType
}

const Tech = ({ tech: { name, level } }: Props) => {
  return (
    <div className="tech">
      {name}
      <progress className="progress is-primary" value={level} max="100">{`${level}%`}</progress>
    </div>
  )
}

export default Tech
