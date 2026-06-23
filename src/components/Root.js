import React from "react"
import { Provider } from "react-redux"
import ReactGA from "react-ga"
import moment from "moment"
import store from "../redux/store"
import Routes from "./Routes"
import withClearCache from "../clearCache"
import packageJson from "../../package.json"
ReactGA.initialize("UA-198817097-1")

/**
 * Function returning the build date(as per provided epoch)
 * @param epoch Time in milliseconds
 */
const getBuildDate = epoch => {
  const buildDate = moment(epoch).format("DD-MM-YYYY HH:MM")
  return buildDate
}

const MainApp = () => {
  return (
    <Provider store={store}>
      <p
        style={{ position: "absolute", top: "0px", zIndex: 9999, color: "#aaaaaa", fontSize: "5px", paddingLeft: "5px" }}
      >
        Build date:{getBuildDate(packageJson.buildDate)}
      </p>
      <Routes />
    </Provider>
  )
}
const ClearCacheComponent = withClearCache(MainApp)

export default function Root() {
  return <ClearCacheComponent />
}
