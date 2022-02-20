/* eslint-disable */
import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
color: black;
text-decoration: none;
font-family: 'Nunito Sans', sans-serif;
font-weight: 700;
text-transform: capitalize; 
`
const Cards = () => {
  return (
    <>
    <Card sx={{ maxWidth: 300, textAlign: "center" }}>
      <StyledLink to={'/Gallery'} color="inherit" underline="none">
        <CardMedia
          component="img"
          height="300"
          image={require("../assets/pic1.jpg")}
          alt="cosy baby"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontFamily="lora">
            Gallery
          </Typography>
        </CardContent>
      </StyledLink>
    </Card>
    <Card sx={{ maxWidth: 300, textAlign: "center" }}>
      <StyledLink to={'/Pricing'} color="inherit" underline="none">
      <CardMedia
        component="img"
        height="300"
        image={require("../assets/pic2.jpg")}
        alt="baby with toys"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontFamily="lora">
          Pricing
        </Typography>
      </CardContent>
     </StyledLink>
    </Card>
    <Card sx={{ maxWidth: 300, textAlign: "center" }}>
      <StyledLink to={'/FAQ'} color="inherit" underline="none">
        <CardMedia
          component="img"
          height="300"
          image={require("../assets/pic3.jpg")}
          alt="baby in star blanket"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontFamily="lora">
            FAQ
          </Typography>
        </CardContent>
      </StyledLink>
    </Card>
    </>
  )
}

export default Cards