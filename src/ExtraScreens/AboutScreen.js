import React from 'react'
import Container from '@mui/material/Container'
import HeaderComponent from '../Components/HeaderComponent'
import FooterComponent from '../Components/FooterComponent'
import { Box } from '@mui/system'
export default function AboutScreen() {
  return (
    <>
      <HeaderComponent />

          <Container sx={{mt:10}}>

                <h2 style={{fontWeight:'600', fontSize:'30px'}}>What is Svar Speech Corpus Tool</h2>

                <p>

                At Svar, we are passionate about harnessing the power of technology to create meaningful change. Founded by a team of dedicated <strong fontSize='40px'>IIT Delhi</strong> students, our mission is to assist children with speech disabilities in finding their voice.

Our Voice Sample Collection Interface is a pivotal part of this journey. It serves as a platform to collect voice samples which are crucial for the development of our AI-assisted speech therapy app. These samples play a vital role in training our advanced machine learning models to recognize and assist with various speech patterns.


                  <br/>
                </p>

                <h2 style={{fontWeight:'600', fontSize:'30px'}}>Your Contribution Matters</h2>
                <p>
                By sharing your voice samples, you're not just contributing data; you're becoming a part of a community dedicated to empowering children around the world. Your voice will play a direct role in helping children communicate more effectively and confidently.
                </p>

          </Container>

          {/* <Container sx={{mt:10}}>

               <h2 style={{fontWeight:'600', fontSize:'30px'}}>Credits</h2>

                <p>The tool is part of project submitted at Department of Computer Science and Engineering, Baba Ghulam Shah Badshah University, J&K</p>
                  <ul>
                        <li>Ms. Rukhsana Thaker - Lecturer</li>
                        <li>Syed Vikas Shabir - Student</li>
                        <li>Safoora Mir - Student</li>
                        <li>Umar Ayoub - Student</li>
                        <li>Owais Bin Amin - Student</li>
                  </ul>

          </Container> */}
    
      <Box sx={{mt:6}} >
       <FooterComponent />
     </Box>
    </>
  )
}
