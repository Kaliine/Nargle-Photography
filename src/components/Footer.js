import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import styled from "styled-components"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"


const FooterWrapper = styled.section`
background: #bac4b5;
font-weight: bold;
`
const Link = styled.a`
text-decoration: none;
color: black;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Box
        sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        height: "auto",
        justifyContent: "space-evenly",
        textAlign: "center",
        fontWeight: "normal",
        padding: "20px",
        }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={10}>
            <Box>
                <Typography fontSize="23px" letterSpacing="1px" fontFamily="cardo">Get in touch</Typography>
                <Link href="mailto:nargle@photography.com"><Typography margin="10px" letterSpacing="2px" textTransform="uppercase" fontSize="12px" fontFamily="lora">nargle@photography.com</Typography></Link>
                <Typography margin="10px" letterSpacing="2px" textTransform="uppercase" fontSize="12px" fontFamily="lora">07946 079998 </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={10}>
              <Box>
                <Typography fontSize="23px" letterSpacing="1px" fontFamily="cardo">Based in Leighton Buzzard, Bedfordshire</Typography>
                <Typography margin="10px" letterSpacing="2px" textTransform="uppercase" fontSize="12px" fontFamily="lora">specialising in family portraits and surrealistic conceptual photography </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={10}>
              <Box>
              <Typography fontSize="23px" letterSpacing="1px" fontFamily="cardo">Follow</Typography>
              <Box sx={{
                      padding: "10px",
                    }}>
                  <Link href="https://www.instagram.com/narglephotography/"><FacebookIcon sx={{ fontSize: 30, padding: "2px", color: "black" }}/></Link>
                  <Link href="https://www.instagram.com/narglephotography/"><InstagramIcon sx={{ fontSize: 30, padding: "2px", color: "black" }}/></Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
      </Box>
    </FooterWrapper>
  )
}

export { Footer }