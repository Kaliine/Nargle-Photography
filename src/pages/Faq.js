/* eslint-disable */
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from 'styled-components'

const AccordionWrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #f9f7f6;
`

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <AccordionWrapper>
      <Typography variant="h5" color="black" textTransform="uppercase" textAlign="center" marginBottom={3} fontFamily="Montserrat" fontWeight="bold">
        Frequently asked questions
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ width: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography fontWeight="bold" sx={{ width: '66%', flexShrink: 0 }}>
          How Do you book Sessions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Booking sessions are currently done through email or by phone.
          Sessions can be viewed on the 'pricing page'.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ width: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography fontWeight="bold" sx={{ width: '66%', flexShrink: 0 }}>
            Do you have to pay a deposit?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. A non-refundable deposit is required when booking. Once a deposit has been paid you will receive a confirmation email of your booking.
          Deposits are 50% of your session fee. This will be taken off your total amount on your session day.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ width: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography fontWeight="bold" sx={{ width: '66%', flexShrink: 0 }}>
          Can you change your date for your session?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sessions can be moved. However only if moved 72 hours (3 days) before your session.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ width: '700px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography fontWeight="bold" sx={{ width: '66%', flexShrink: 0 }}>
            Cancellation Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Deposits are non-refundable.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionWrapper>
  )
}

export { Faq }