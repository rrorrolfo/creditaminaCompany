import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"

import { Container } from "../../global"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
} from "./style"

const NAV_ITEMS = ["Ventajas", "Paises donde trabajamos"]

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState((prevState) => ({
      mobileMenuOpen: !prevState.mobileMenuOpen,
    }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = (item) => (
    <AnchorLink
      href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
      onClick={this.closeMobileMenu}
    >
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map((item) => item.toLowerCase().replace(/\s/g, "-"))}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map((navItem) => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        <StyledContainer>
          <Brand>
            <Scrollspy offset={-64} item={["top"]} currentClassName="active">
              <AnchorLink href="#top" onClick={this.closeMobileMenu}>
                <img
                  src="https://storage.googleapis.com/creditamina/logos/creditamina-c-logo.png"
                  alt="Creditamina icono"
                  className="logo-icon"
                  loading="lazy"
                  style={{ height: "60px", marginRight: "15px" }}
                />
                <img
                  src="https://storage.googleapis.com/creditamina/logos/creditamina-logo.svg"
                  alt="Creditamina"
                  className="logo"
                  loading="lazy"
                  style={{ height: "30px", marginBottom: "15px" }}
                />
              </AnchorLink>
            </Scrollspy>
          </Brand>
          <Mobile>
            <button
              onClick={this.toggleMobileMenu}
              style={{ color: "black", background: "none" }}
            >
              {this.state.mobileMenuOpen ? (
                <X size={24} alt="close menu" />
              ) : (
                <Menu size={24} alt="open menu" />
              )}
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
          <ActionsContainer>
            <span />
          </ActionsContainer>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}
