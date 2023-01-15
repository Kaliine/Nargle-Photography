/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import img from 'assets/bg-image.jpg'
import imgMobile from 'assets/bg-image-mobile.jpg'
import toothIcon from '../assets/icons8-dental-64.png'
import tfLogo from '../assets/pic1.jpg'
import patient from '../assets/patient.jpg'

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
  @media (max-width: 768px) {
  background-image: url(${imgMobile});
}
`
const HeroImgTextWrapper = styled.div`
text-align: center;
max-width: 600px;
margin-left: 100px;
@media (max-width: 768px) {
  justify-content: center;
  margin: 0 20px;
  margin-bottom: 100px;
}
`
const HeroImgTextBig = styled.h1`
  font-size: 66px;
  color: #fff;
  font-family: 'Inter';
  margin-bottom: 10px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
  font-size: 44px;
}
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
overflow: hidden;
`
const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 40px;
`
const PinkTextWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #FDC5C6;
font-size: 36px;
max-width: 750px;
margin-bottom: 40px;
@media (max-width: 768px) {
  font-size: 26px;
  padding: 0 20px;
  text-align: center;
}
`
const HeadingWrapper = styled.div`
display: flex;
color: #73C89A;
font-size: 30px;
width: 100%;
margin-left: 80px;
margin-bottom: 20px;
@media (max-width: 768px) {
  font-size: 26px;
  margin-left: 40px;
}
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 60%;
@media (max-width: 768px) {
  width: 80%;
  max-width: 350px
}
`
const Wrapper= styled.div`
display: flex;
justify-content: flex-start;
align-items: top;
margin-bottom: 15px;
`
const ToothImg= styled.img`
margin-right: 15px;
margin-top: 8px;
@media (max-width: 768px) {
  margin-top: 5px;
}
`
const ServicesParagraph= styled.p`
color: #000;
font-size: 24px;
@media (max-width: 768px) {
  font-size: 18px;
}
`
const ServicesParagraphBold= styled.p`
color: #000;
font-size: 24px;
font-weight: bold;
margin-top: 15px;
@media (max-width: 768px) {
  font-size: 18px;
}
`
const ImgWrapper= styled.div`
margin-top: 50px;
`
/* About section */
const AboutParagraphBold= styled.p`
color: #000;
font-size: 24px;
font-weight: bold;
@media (max-width: 768px) {
  font-size: 18px;
}
`
const AboutParagraph= styled.p`
color: #000;
font-size: 24px;
@media (max-width: 768px) {
  font-size: 18px;
}
`
const LastAboutParagraph= styled.p`
color: #000;
font-size: 24px;
margin-top: 15px;
@media (max-width: 768px) {
  font-size: 18px;
}
`
const LogoContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
margin-bottom: 40px;
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
padding-top: 40px;
`
const ContactHeadingWrapper = styled.div`
display: flex;
color: #fff;
font-size: 30px;
width: 100%;
margin-left: 80px;
margin-bottom: 20px;
@media (max-width: 768px) {
  font-size: 26px;
  margin-left: 40px;
}
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
@media (max-width: 768px) {
  font-size: 18px;
  margin-bottom: 5px;
}
`
const LastContactParagraph= styled.p`
color: #fff;
font-size: 24px;
margin-bottom: 20px;
@media (max-width: 768px) {
  font-size: 18px;
  margin-bottom: 20px;
}
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
                  <ToothImg src={toothIcon} alt="Ikon tand" height="20" width="20" />
                  <ServicesParagraph>Undersökning med röntgenbilder</ServicesParagraph>
              </Wrapper>
              <Wrapper>
                  <ToothImg src={toothIcon} alt="Ikon tand" height="20" width="20" />
                  <ServicesParagraph>Registrering av karies och parodontit (tandlossning) samt kontroll av munslemhinnor och bettförhållande. Avvikelser rapporteras till ansvarig tandläkare.</ServicesParagraph>
              </Wrapper>
              <Wrapper>
                  <ToothImg src={toothIcon} alt="Ikon tand" height="20" width="20" />
                  <ServicesParagraph>Individuell information och instruktion om hur man behåller sin munhälsa.</ServicesParagraph>
              </Wrapper>
              <Wrapper>
                  <ToothImg src={toothIcon} alt="Ikon tand" height="20" width="20" />
                  <ServicesParagraph>Förebyggande behandling av karies, framförallt med olika fluorbehandlingsmetoder.</ServicesParagraph>
              </Wrapper>
              <Wrapper>
                  <ToothImg src={toothIcon} alt="Ikon tand" height="20" width="20" />
                  <ServicesParagraph>Förebyggande och behandling av tandlossningssjukdomar.</ServicesParagraph>
              </Wrapper>
              <Wrapper>
                  <ToothImg src={toothIcon} alt="Ikon tand" height="20" width="20" />
                  <ServicesParagraph>Borttagning av tandsten.</ServicesParagraph>
              </Wrapper>
              <Wrapper>
                  <ToothImg src={toothIcon} alt="Ikon tand" height="20" width="20" />
                  <ServicesParagraph>Polering av tänder samt puts av fyllningar.</ServicesParagraph>
              </Wrapper>
              <Wrapper>
                  <ToothImg src={toothIcon} alt="Ikon tand" height="20" width="20" />
                  <ServicesParagraph>Tandblekning för hemmabruk och klinikblekning.</ServicesParagraph>
              </Wrapper>
              <Wrapper>
                  <ToothImg src={toothIcon} alt="Ikon tand" height="20" width="20" />
                  <ServicesParagraph>Receptföreskrivning på flourpreparat.</ServicesParagraph>
              </Wrapper>
              <Wrapper>
                  <ServicesParagraphBold>Har du frågor angående priser, hör gärna av dig till mig!</ServicesParagraphBold>
              </Wrapper>
              <Wrapper>
                  <ServicesParagraph>Jag är ansluten till Försäkringskassan och har naturligtvis såväl patient- som ansvarsförsäkring. Behandling hos mig ligger till grund för ditt högkostnadsskydd.</ServicesParagraph>
              </Wrapper>
            </TextContainer>
            <ImgWrapper>
              <img src={patient} alt="Leende patient" height="auto" width="1400"/>
            </ImgWrapper>
          </Section>
          <Section id="about">
            <HeadingWrapper>
              <h2>Om oss</h2>
            </HeadingWrapper>
            <TextContainer>
              <div>
                <AboutParagraphBold>En välskött mun är en bra grund till en god allmänhälsa</AboutParagraphBold>
                <AboutParagraph>Välkommen till Tandhygienist Carina Andersson!
                  <br />Jag tog min tandhygienistexamen 1988 i Stockholm och har nu över 35 års erfarenhet i branschen. Jag har arbetat både inom folktandvården och privat. Sedan 25 år är jag egen företagare.
                  <br />Som tandhygienist är jag specialutbildad i munnens friskvård. Hos mig kan du få hjälp med allt från förebyggande vård såsom skräddarsydda råd och tips om hur du bäst ska sköta dina tänder, till tandstensborttagning, puts, polering och blekning.
                </AboutParagraph>
                <LastAboutParagraph>Medlem i Sveriges Tandhygienistförening och Sveriges TandhygienistFöretagare.</LastAboutParagraph>
              </div>
              <LogoContainer>
                <img src={tfLogo} alt="Logga Sveriges Tandhygienistförening" height="100" widht="100" id="contact" />
              </LogoContainer>
            </TextContainer>
          </Section>
          <ContactSection>
            <ContactHeadingWrapper>
              <h2>Kontakt</h2>
            </ContactHeadingWrapper>
            <ContactTextContainer>
              <div>
                <ContactParagraph>Telefon: 0176 - 509 92</ContactParagraph>
                <ContactParagraph>E-post: ca.andersson@live.se</ContactParagraph>
                <ContactParagraph>Adress: Grisslehamnsvägen 1, Väddö</ContactParagraph>
                <LastContactParagraph>Öppet: mån, tis, tor, fre</LastContactParagraph>
              </div>
              <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=grisslehamnsv%C3%A4gen%201&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </ContactTextContainer>
          </ContactSection>
        </HomeSection>
      </section>
  )
} 

export { Home }