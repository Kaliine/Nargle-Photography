/* eslint-disable */
import React from 'react'
import Cards from 'components/Cards'
import styled from 'styled-components'

const HeroImg = styled.div`
  position: relative;
  background-image: url("https://res.cloudinary.com/denrrpqab/image/upload/v1645374657/IMG_3817_jwtfnu.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`
const HeroImgTextWrapper = styled.div`
text-align: center;
background: rgba(255,255,255, .8);
padding: 20px 60px;
margin: 0 auto;
`
const HeroImgTextBig = styled.h1`
  font-size: 56px;
  color: black;
  font-family: 'Cardo', serif;
  font-weight: normal;
  margin-bottom: 10px;
  margin-top: 0;
  letter-spacing: 1px;
  `
  const HeroImgTextSmall = styled.h1`
  font-size: 14px;
  color: black;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  `
  const CardsSection = styled.section`
  align-items: center;
  `
  const CardsWrapper = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 20px;
      padding-top: 40px;
      padding-bottom: 60px;
      justify-content: space-evenly;
      justify-items: center;
      max-width: 1000px;
      margin: 0 auto;
  `

const Home = () => {

  return (
    <section className="home-section">
      <HeroImg>
      <HeroImgTextWrapper>
        <HeroImgTextBig>Beautiful memories</HeroImgTextBig>
        <HeroImgTextSmall>Specialising in family portraits and surrealistic conceptual photography</HeroImgTextSmall>
        </HeroImgTextWrapper>
        </HeroImg>
        <CardsSection>
          <CardsWrapper>
          <Cards />
          </CardsWrapper>
        </CardsSection>
      </section>
  )
} 

export { Home }