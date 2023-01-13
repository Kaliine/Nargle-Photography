/* eslint-disable */
import React from "react"
import styled from "styled-components"
import logo from "../assets/logga3.png"

const FooterWrapper = styled.section`
background: #fff;
font-weight: bold;
height: 150px;
display: flex;
align-items: center;
justify-content: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
      <a href="#home">
        <img src={logo} alt="Logga Tandhygienist Carina Andersson" height="100" widht="200" />
      </a>
      </div>
    </FooterWrapper>
  )
}

export { Footer }