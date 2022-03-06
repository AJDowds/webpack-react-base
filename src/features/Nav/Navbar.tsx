import * as React from "react"
import { useState } from "react"
import { Container, Navbar as Nav } from "react-bootstrap"
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledLink = styled(ScrollLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: orange;
  }
`

export const Navbar: React.FC = () => {
  const [scrolling, setScrolling] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  window.onscroll = function (e) {
    if (window.pageYOffset === 0) {
      setScrolling(false)
    } else {
      setScrolling(true)
    }
  }

  return (
    <Nav
      fixed="top"
      expand="lg"
      variant="light"
      style={{ backgroundColor: scrolling ? "transparent" : "transparent" }}
    >
      <Container style={{ justifyContent: "space-evenly" }}>
        <StyledLink
          to="section0"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={200}
        >
          Section0
        </StyledLink>
        <StyledLink
          to="section1"
          spy={true}
          hashSpy={true}
          smooth={true}
          duration={200}
        >
          Section1
        </StyledLink>
      </Container>
    </Nav>
  )
}
