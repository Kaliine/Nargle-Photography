/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

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
const ImgWrapper= styled.div`
margin-top: 50px;
`

const Services = () => {

  return (
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
          <img src={toothIcon} alt="Ikon tand" height="24" width="24" />
        </div>
        <div>
          <ServicesParagraph>Undersökning med röntgenbilder</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <img src={toothIcon} alt="Ikon tand" height="24" width="24" />
        </div>
        <div>
          <ServicesParagraph>Registrering av karies och parodontit (tandlossning) samt kontroll av munslemhinnor och bettförhållande. Avvikelser rapporteras till ansvarig tandläkare.</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <img src={toothIcon} alt="Ikon tand" height="24" width="24" />
        </div>
        <div>
          <ServicesParagraph>Individuell information och instruktion om hur man behåller sin munhälsa.</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <img src={toothIcon} alt="Ikon tand" height="24" width="24" />
        </div>
        <div>
          <ServicesParagraph>Förebyggande behandling av karies, framförallt med olika fluorbehandlingsbehandlingsmetoder.</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <img src={toothIcon} alt="Ikon tand" height="24" width="24" />
        </div>
        <div>
          <ServicesParagraph>Förebyggande och behandling av tandlossningssjukdomar.</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <img src={toothIcon} alt="Ikon tand" height="24" width="24" />
        </div>
        <div>
          <ServicesParagraph>Borttagning av tandsten.</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <img src={toothIcon} alt="Ikon tand" height="24" width="24" />
        </div>
        <div>
          <ServicesParagraph>Polering av tänder samt puts av fyllningar.</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <img src={toothIcon} alt="Ikon tand" height="24" width="24" />
        </div>
        <div>
          <ServicesParagraph>Tandblekning för hemmabruk och klinikblekning.</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <img src={toothIcon} alt="Ikon tand" height="24" width="24" />
        </div>
        <div>
          <ServicesParagraph>Receptföreskrivning på flourpreparat.</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <img src={toothIcon} alt="Ikon tand" height="30" width="30" />
        </div>
        <div>
          <ServicesParagraph>Har du frågor angående priser, hör gärna av dig till mig!</ServicesParagraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <ServicesParagraph>Jag är ansluten till Försäkringskassan och har naturligtvis såväl patient- som ansvarsförsäkring. Behandling hos mig ligger till grund för ditt högkostnadsskydd.</ServicesParagraph>
        </div>
      </Wrapper>
    </TextContainer>
    <ImgWrapper>
      <img src={patient} alt="Leende patient" height="auto" width="1400" />
    </ImgWrapper>
  </Section>

)
} 

export { Services }