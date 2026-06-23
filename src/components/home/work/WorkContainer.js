import React, { Component } from "react"
import { withRouter } from "react-router"
import { Route, Switch } from "react-router-dom"

import Work from "./Work"
import ProjectDetails from "./projectDetails/ProjectDetails"

class WorkContainer extends Component {
  componentDidMount = () => {
    this.unlisten = this.props.history.listen((location, action) => {
      if (action === "PUSH" && location && location.pathname !== "/") {
        this.props.onShowProjectDetails && this.props.onShowProjectDetails()
      }
    })
  }

  componentWillUnmount = () => {
    if (this.unlisten) this.unlisten()
  }

  render() {
    const { location } = this.props

    return (
      <div className="work">
        <Switch location={location}>
          <Route path={"/:projectId"} exact component={ProjectDetails} />
          <Route path={"/"} component={Work} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(WorkContainer)
