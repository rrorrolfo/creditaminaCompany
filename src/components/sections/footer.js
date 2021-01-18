import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li>Canauhtli OÜ</li>
          <li>Registro No.16027735</li>
          <li>Calle Tartu 67/1-13b</li>
          <li>10115, Tallinn, Estonia</li>
        </ul>
      </FooterColumn>
      {/* <FooterColumn>
        <span>Social</span>
        <ul>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </ul>
      </FooterColumn> */}
    </FooterColumnContainer>
    <Copyright>
      &copy; 2021 Creditamina.mx todos los derechos reservados |
      <span>Sitio 100% Mexicano creado por Creditamina desarrollo.</span>
    </Copyright>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 20px;
`

const Copyright = styled.p`
  text-align: center;
`

const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  padding-bottom: 25px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${(props) => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${(props) => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
