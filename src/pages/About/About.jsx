// IMPORTS
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// COMPONENTS
import Collapsehome from '../../components/CollapseHome/Collapsehome'

// ASSETS
import Banner from '../../assets/banner-about.png'

// STYLES
const AboutCont = styled.section`

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

         <Collapsehome />
      </AboutCont>
   )
 }
 
 export default About