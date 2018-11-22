import React, { PureComponent } from "react"
import Helmet from "react-helmet"

import Navbar from "../components/Navbar"
import "./all.sass"

const opacolor = "rgba(224, 224, 224, 0.31)"
class TemplateWrapper extends PureComponent {
  scrollDir = "none"
  scrollCount = 0
  scrollY = 0
  state = {
    showNav: true,
    navBgColor: opacolor
  }
  scrollListener = event => {
    if (window.scrollY > 100 && this.state.navBgColor !== "white") {
      this.setState({
        navBgColor: "white"
      })
    } else if (window.scrollY <= 100 && this.state.navBgColor !== opacolor) {
      this.setState({
        navBgColor: opacolor
      })
    }
    if (this.scrollY < window.scrollY) {
      if (this.scrollDir === "none" || this.scrollDir === "up") {
        this.scrollCount = 1
        this.scrollDir = "down"
      } else if (this.scrollDir === "down") {
        this.scrollCount = this.scrollCount + 1
        if (this.scrollCount > 10) {
          console.log("down")
          this.setState({
            showNav: false
          })
        }
      }
    }
    if (this.scrollY > window.scrollY) {
      if (this.scrollDir === "none" || this.scrollDir === "down") {
        this.scrollCount = 1
        this.scrollDir = "up"
      } else if (this.scrollDir === "up") {
        this.scrollCount = this.scrollCount + 1
        if (this.scrollCount > 4) {
          console.log("up")
          this.setState({
            showNav: true
          })
        }
      }
    }
    this.scrollY = window.scrollY
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollListener)
  }
  render() {
    const { children } = this.props
    const { showNav, navBgColor } = this.state
    return (
      <div>
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <Navbar bgColor={navBgColor} isVisible={showNav} />
        <div>{children}</div>
      </div>
    )
  }
}

export default TemplateWrapper
