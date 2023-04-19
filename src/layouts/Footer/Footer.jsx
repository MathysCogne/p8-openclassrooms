// IMPORTS
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import media from '../../style/media'

// ASSETS
import LogoFooter from '../../assets/logo-footer.png'

// STYLES
const ContFooter = styled.footer`
   background-color: black;
   height: 210px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const FooterText = styled.p`
   color: white;
   font-size: 18px;
   @media ${media.mobile} {
      font-size: 15px;
   }
`


// Layout Footer
function Footer() {
   return (
      <ContFooter>
         <Link to="/">
            <img src={LogoFooter} />
         </Link>

         <FooterText>© 2023 Kasa. All rights reserved</FooterText>
      </ContFooter>
   )
 }
 
 export default Footer