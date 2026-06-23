import React from "react"

import profilePic from "../../../assets/images/profile.jpg"

import "../../_common/common.css"
import "./about.css"

import ReactGA from "react-ga"

const About = () => {
  const onLinkClick = () => {
    ReactGA.event({
      category: "User",
      action: "Click on CV"
    })
  }

  return (
    <div className="home-section container-about">
      <img
        className="profile-picture-about"
        alt="profilepic"
        src={profilePic}
      />
      <div className="about-text">
        <div className="about-text-main">
          Hi, I'm Kim Russel Antonio Soriano
        </div>
        I specialize in creating visually stunning and user-friendly SaaS applications that delight users and drive business growth. My passion for software development as a creative endeavor, combined with my deep knowledge of engineering and design principles, allows me to build elegant solutions that consistently exceed expectations.
        <br />
        <br />
        Keep scrolling to see some of the projects I've worked on.
      </div>
    </div>
  )
}

export default About
