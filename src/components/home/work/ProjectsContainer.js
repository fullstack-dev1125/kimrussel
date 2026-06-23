import React, { useMemo } from "react"

import { TransitionGroup, CSSTransition } from "react-transition-group"

import Project from "./Project"

import "./projectsContainer.css"

const ProjectsContainer = ({ projects, activeLabels, projectClick }) => {
  projects = projects.sort((a, b) => a.highlight < b.highlight)

  const filterActiveProjects = project => {
    if (activeLabels.length === 0) return true

    return isProjectActive(project, activeLabels)
  }

  const isProjectActive = (project, activeLabels) => {
    for (let i = 0; i < project.labels.length; i++) {
      const label = project.labels[i]
      if (activeLabels.indexOf(label) > -1) return true
    }

    return false
  }

  const nodeRefs = useMemo(() => {
    const map = new Map()
    projects.forEach(p => {
      map.set(p.name, React.createRef())
    })
    return map
  }, [projects])

  return (
    <TransitionGroup className="projects-container">
      {projects.filter(filterActiveProjects).map(project => {
        const ref = nodeRefs.get(project.name)
        return (
          <CSSTransition
            key={project.name}
            classNames="project-fade"
            timeout={{ enter: 300, exit: 300 }}
            nodeRef={ref}
          >
            <Project
              ref={ref}
              key={project.name}
              project={project}
              onClick={projectClick}
            />
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}

export default ProjectsContainer
