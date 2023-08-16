import React from 'react'
import Container from '@mui/material/Container'
import HeaderComponent from '../Components/HeaderComponent'
import FooterComponent from '../Components/FooterComponent'
import { Box } from '@mui/system'

export default function ContactScreen() {
    return (
        <>
            <HeaderComponent />
  
            <Container sx={{mt:10}}>
            <section class="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, please reach out to us using the form below:</p>

        <form action="/submit_contact" method="post">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required style={{width: '100%' , marginRight:"50px"}}/>
            </div>

            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="10" required style={{ width: '100%', marginRight: '50px' }}></textarea>
            </div>

            <input type="submit" value="Submit"/>
        </form>
    </section>

            </Container>
  
            <Box sx={{mt:6}} >
                <FooterComponent />
            </Box>
         </>
    )
}