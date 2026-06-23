import React, { Component } from "react"
import { withRouter } from "react-router"
import { connect } from "react-redux"

import "./projectDetails.css"

import ReactGA from "react-ga"

class ProjectDetails extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)

    const logPageView = () => {
      ReactGA.set({ page: window.location.pathname + window.location.search })
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
    logPageView()
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = event => {
    if (event.keyCode === 27) this.close()
  }

  close = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    const projectId = this.props.location.pathname.substring(1)
    const project = this.props.projects.find(
      project => project.id === projectId
    )

    return (
      <div className="project-details-root home-section">
        <div className="project-details-topbar">
          <button
            className="project-details-back clickable"
            onClick={this.close}
            aria-label="Back to projects"
          >
            <i className="fa fa-arrow-left" aria-hidden="true" />
            <span>Back</span>
          </button>
        </div>
        {project ? (
          <ProjectDetailsCard project={project} />
        ) : (
          <div className="project-not-found">
            Ouch, the project you are looking for doesn't exist .. yet!
          </div>
        )}
      </div>
    )
  }
}

const ProjectDetailsCard = ({ project, onClick }) => {
  return (
    <div className="project-details-card" onClick={onClick}>
      <div className="project-details-hero">
        <img
          className="project-details-image"
          alt={project.name}
          src={project.img}
        />
      </div>

      <div className="project-details-content">
        <div className="project-details-heading">
          <div className="project-details-title">{project.name}</div>
          {project.subtitle && (
            <div className="project-details-subtitle">{project.subtitle}</div>
          )}
        </div>
        {project.labels && project.labels.length > 0 && (
          <div className="project-details-labels">
            {project.labels.map(label => (
              <span key={label} className="project-details-chip">{label}</span>
            ))}
          </div>
        )}

        {project.description && (
          <div className="project-details-description">
            <MultilineText text={project.description} />
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className="project-details-actions">
            {project.links.map((link, index) => (
              <button
                key={index}
                className="project-details-button primary"
                onClick={() => window.open(link.url, "_blank")}
              >
                <i className={link.icon} aria-hidden="true" />
                <span>{link.name}</span>
              </button>
            ))}
          </div>
        )}

        {project.secondaryLinks && project.secondaryLinks.length > 0 && (
          <div className="project-details-secondary">
            {project.secondaryLinks.map(link => (
              <a
                key={link.url}
                className="project-details-button ghost"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon} aria-hidden="true" />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const MultilineText = ({ text }) => {
  return (
    <div>
      {text.split("<br/>").map((textLine, index) => (
        <span key={index}>
          {textLine}
          <br />
        </span>
      ))}
    </div>
  )
}

const mapStateToProps = store => ({
  projects: store.projects
})

export default withRouter(connect(mapStateToProps)(ProjectDetails))
