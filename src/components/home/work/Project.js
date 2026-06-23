import React from "react"

import Label from "./Label"

import "./project.css"

const Project = React.forwardRef(({ project, onClick }, ref) => {
  const className = project.highlight ? "highlight-card" : "normal-card"

  return (
    <div
      className={"project-card clickable text-unselectable " + className}
      ref={ref}
      onClick={ev => onClick(project.id)}
    >
      <img
        className="project-image"
        alt={project.name}
        src={project.imgSmall}
      />
      <div className="info-bar">
        <div className="info-bar-name">{project.name}</div>
        <div className="info-bar-skill-list">
          {project.labels.map(label => (
            <Label minimalStyle="true" key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  )
})

export default Project
