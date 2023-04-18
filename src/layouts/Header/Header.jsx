// IMPORTS
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// ASSETS
import Logo from '../../assets/logo.png'

// STYLES
const ContHeader = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 50px 0;
`
const HomeLogo = styled.img`
   height: 68px;
   width: 210px;
   @media ${media.mobile} {
      height: 47px;
      width: 145px;
   }
`
const StyledLink = styled(NavLink)`
                           // NavLink = Link + active (Gere directement le style du lien actif)
   color: ${colors.primary};
   text-decoration: none;
   font-size: 24px;
   padding: 0 0 0 60px;
   @media ${media.mobile} {
      font-size: 18px;
      padding: 0 0 0 30px;
   }
   &.active {
      text-decoration: underline;
   }
`


// HEADER
function Header() {

   return (
      <ContHeader>
         <Link to="/">
            <HomeLogo src={Logo} />
         </Link>

         <div>
            <StyledLink to="/">
               <a>Accueil</a>
            </StyledLink>

            <StyledLink to="/about">
               <a>À Propos</a>
            </StyledLink>
         </div>
      </ContHeader>
   )
 }
 
 export default Header