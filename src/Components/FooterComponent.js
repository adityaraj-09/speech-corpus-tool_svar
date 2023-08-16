import React from 'react'
import { Container, Typography } from '@mui/material'
import Link from 'react-router-dom/Link'
export default function FooterComponent() {
  return (
    <>
        <Container style={{backgroundColor: '#0A1B29', textAlign:'center', padding: '30px'}} maxWidth='fluid'>
                <Container>
                    <img width='90px' src='./OpenSpeechWhite.png'/>
                </Container>

                <Container sx={{mt:2}}>
                        {/* <Link to='/Privacy' style={{color:'white', textDecoration:'none'}}><span style={{ margin: '20px'}}>Privacy</span></Link>
                        <Link to='/Terms' style={{color:'white', textDecoration:'none'}}><span style={{ margin: '20px'}}>Terms</span></Link> */}
               <p style = {{color:"GrayText"}}>&copy; 2023 Svar. All rights reserved. Developed by IIT Delhi students.</p>
                </Container>
        </Container>
    </>
  )
}
