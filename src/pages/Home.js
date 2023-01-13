/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import img from 'assets/bg-image.jpg'
import toothIcon from '../assets/icons8-dental-64.png'
import tfLogo from '../assets/pic1.jpg'

/* Hero section */
const HeroImg = styled.div`
  position: relative;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
`
const HeroImgTextWrapper = styled.div`
text-align: center;
max-width: 600px;
margin-left: 100px;
`
const HeroImgTextBig = styled.h1`
  font-size: 66px;
  color: #fff;
  font-family: 'Inter';
  margin-bottom: 10px;
  letter-spacing: 1px;
  `
const Btn = styled.button`
background-color: #73C89A;
height: 50px;
width: 200px;
color: #fff;
text-decoration: none;
font-family: 'Montserrat';
font-weight: 600;
font-size: 20px;
letter-spacing: 1px;
text-transform: uppercase;
border: none;
border-radius: 20px;
cursor: pointer;
margin-top: 20px;
`
/* Service section */
const HomeSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`
const PinkTextWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #FDC5C6;
font-size: 36px;
max-width: 750px;
`
const HeadingWrapper = styled.div`
display: flex;
color: #73C89A;
font-size: 30px;
width: 100%;
margin-left: 80px;
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
color: #FDC5C6;
font-size: 40px;
width: 60%;
`
const Wrapper= styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin: -10px;
`
const ServicesParagraph= styled.p`
margin-left: 40px;
color: #000;
font-size: 24px;
`
/* About section */
const AboutParagraph= styled.p`
color: #000;
font-size: 24px;
`
const LogoContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 60px;
`
/* Contact section */
const ContactSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
background-color: #73C89A;
padding-bottom: 60px;
`
const ContactHeadingWrapper = styled.div`
display: flex;
color: #fff;
font-size: 30px;
width: 100%;
margin-left: 80px;
`
const ContactTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
const ContactParagraph= styled.p`
color: #fff;
font-size: 24px;
`

const Home = () => {

  return (
    <section id="home">
      <HeroImg>
      <HeroImgTextWrapper>
        <HeroImgTextBig>Din tandhygienist på Väddö</HeroImgTextBig>
        <div>
          <a href="#contact">
            <Btn>Boka tid</Btn>
          </a>
        </div>
      </HeroImgTextWrapper>
        </HeroImg>
      <HomeSection>
      <Section id="services">
        <PinkTextWrapper>
            <h3>Vi välkomnar gärna nya patienter! Ring och boka tid på 0176 - 509 92.</h3>
        </PinkTextWrapper>
        <HeadingWrapper>
            <h2>Tjänster</h2>
        </HeadingWrapper>
          <TextContainer>
            <Wrapper>
              <div>
                <img src={toothIcon} alt="Ikon tand" height="30" widht="30" />
              </div>
              <div>
                <ServicesParagraph>Basundersökning</ServicesParagraph>
              </div>
            </Wrapper>
            <Wrapper>
              <div>
                <img src={toothIcon} alt="Ikon tand" height="30" widht="30" />
              </div>
              <div>
                <ServicesParagraph>Tandhygienistbehandling</ServicesParagraph>
              </div>
            </Wrapper>
            <Wrapper>
              <div>
                <img src={toothIcon} alt="Ikon tand" height="30" widht="30" />
              </div>
              <div>
                <ServicesParagraph>Tandblekning</ServicesParagraph>
              </div>
            </Wrapper>
            <Wrapper>
              <div>
                <img src={toothIcon} alt="Ikon tand" height="30" widht="30" />
              </div>
              <div>
                <ServicesParagraph>Samarbetar med tandläkare och specialister</ServicesParagraph>
              </div>
            </Wrapper>
          </TextContainer>
      </Section>
      <Section id="about">
        <HeadingWrapper>
            <h2>Om oss</h2>
        </HeadingWrapper>
          <TextContainer>
            <div>
                <AboutParagraph>Tandhygienist Carina Andersson har över 30 års erfarenhet och erbjuder dig profesionell tandvård. Välkommen till en praktik med kort väntetid och som ligger centralt i Älmsta. 
                  <br/>Medlem i Sveriges Tandhygienistförening och Sveriges TandhygienistFöretagare.</AboutParagraph>
              </div>
              <LogoContainer>
                <img src={tfLogo} alt="Logga Sveriges Tandhygienistförening" height="100" widht="100" />
              </LogoContainer>
          </TextContainer>
      </Section>
      <ContactSection id="contact">
        <ContactHeadingWrapper>
            <h2>Kontakt</h2>
        </ContactHeadingWrapper>
          <ContactTextContainer>
            <div>
                <ContactParagraph>Ring: 0176 - 509 92</ContactParagraph>
                <ContactParagraph>Mejla: ca.andersson@live.se</ContactParagraph>
                <ContactParagraph>Besök: Grisslehamnsvägen 1, Väddö</ContactParagraph>
                <ContactParagraph>Öppettider: mån, tis, tor, fre</ContactParagraph>
            </div>
            <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=grisslehamnsv%C3%A4gen%201&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </ContactTextContainer>
      </ContactSection>
      </HomeSection>
      </section>
  )
} 

export { Home }