import React from "react"
import { Link } from "gatsby"
import github from "../img/github-icon.svg"
import logo from "../img/logo.jpg"
import styled from "styled-components"
import posed, { PoseGroup } from "react-pose"

const Modal = posed.div({
  enter: {
    y: 0,
    transition: {
      y: 0,
      transition: { duration: 400 }
    }
  },
  exit: {
    y: -100,
    transition: { duration: 400 }
  }
})
const Nav = styled(Modal)`
  && {
    z-index: 500;
    top: 0px;
    width: 100%;
    color: white;
    background-color: ${props => props.bgColor};
    position: ${props => props.position} !important;
  }
`

const Navbar = ({ isVisible, bgColor, position }) => (
  <PoseGroup>
    {isVisible && (
      <Nav
        key="navbar"
        className="navbar"
        bgColor={bgColor}
        position={position}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" style={{}}>
              <img
                src={logo}
                alt="Kaldi"
                style={{ width: "80px", maxHeight: "none" }}
              />
            </Link>
          </div>
          <div className="navbar-start">
            <Link className="navbar-item" to="/rolunk">
              Rólunk
            </Link>
            <Link className="navbar-item" to="/telephelyek">
              Telephelyek
            </Link>
            <Link className="navbar-item" to="/elerhetosegek">
              Elérhetőségek
            </Link>
            <Link className="navbar-item" to="/archivum">
              Archívum
            </Link>
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </Nav>
    )}
  </PoseGroup>
)

export default Navbar
