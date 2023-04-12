// IMPORTS
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// ASSETS
import Banner from '../../assets/banner-about.png'

// STYLES
const AboutCont = styled.section`
   margin: 0 0 400px 0; 
`
const BannerCont = styled.img`
   width: 100%;
   height: 223px;
   object-fit: cover;
   border-radius: 30px;
`

// ABOUT
function About() {
   return (
      <AboutCont>
         <BannerCont src={Banner} />
         <h1>WSH PAGE A PROPOS MON GARS HIHI</h1>
      </AboutCont>
   )
 }
 
 export default About