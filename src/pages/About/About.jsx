// IMPORTS
import styled from 'styled-components'

// COMPONENTS
import Collapsehome from '../../components/CollapseHome/Collapsehome'

// ASSETS
import Banner from '../../assets/banner-about.png'

// STYLES
const BannerCont = styled.img`
   width: 100%;
   height: 223px;
   object-fit: cover;
   border-radius: 30px;
`


// Page About > Contient une bannière et le composant Collapsehome
function About() {
   return (
      <section>
         <BannerCont src={Banner} />
         <Collapsehome />
      </section>
   )
 }
 
 export default About