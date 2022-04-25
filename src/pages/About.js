/* eslint-disable */
import React from 'react';
import styled from 'styled-components'

const AboutWrapper = styled.section`
  background-color: #f9f7f6;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding-bottom: 40px;
  padding-top: 70px;
`
const TextSection = styled.div`
  background-color: #f9f7f6;
  padding: 40px;
  width: 60%;

  h1 {
    font-family: "Lora", Sans-serif;
    font-size: 5rem;
    font-weight: 100;
    font-style: italic;
  }

  p {
    font-family: "Times New Roman", Sans-serif;
    font-size: 1.4rem;
    line-height: 1.6em;
  }
`
const ImgSection = styled.div`
  background-color: #bac4b5;
  width: 40%;
  height: 20%;
`
const Image = styled.img`
  width: 70%;
  height: auto;
  object-fit: cover;
  margin: 10px 15px 10px -15px;
`

const About = () => {

  return (
      <AboutWrapper>
        <TextSection>
        <h1 className="about-h1">The Full Story</h1>
        <p>Nargle Photography has a deeply personal story. Growing up, I still lived in a society where playing outside with friends and letting your imagination run wild was the norm. 
          This creative side of me is a key part of my personality and shines through in my work. 
          Coming from a large family and possessing this creative mind, meant that nicknames formed fast and although my nickname &apos;May&apos; never stuck, 
          the nickname Nargle Fly stayed with me through to my teens. 
          Nargle Photography was born from the meeting of my young creative mind and my professional career and the deep personal meaning of the name portrays my deep passion for photography 
          and the imagination I like to incorporate into my work. </p>
        <p>I have been studying photography for 5/6 years - graduating in 2021 with a Higher National Diploma (Photography) from Milton Keynes College. </p>
        <p>Throughout my time studying, I have enjoyed surrealism, conceptual self portraits in and out of the studio. While specialising in those areas, 
          I enjoy capturing memorable, good quality portrait photographs of others and helping them to realise their dream photographs.</p>
          </TextSection>
          <ImgSection>
          <Image src="https://res.cloudinary.com/denrrpqab/image/upload/v1645388023/Nargle/noemi-macavei-katocz-zrk7WirlxgM-unsplash_sb8exy.jpg" />
          </ImgSection>
      </AboutWrapper>
  )
} 

export { About }