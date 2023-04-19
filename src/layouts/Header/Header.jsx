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
   width: 180px;
   @media ${media.mobile} {
      height: 47px;
      width: 145px;
   }
`
               // NavLink = Link + active (Gere directement le style du lien actif)
const StyledLink = styled(NavLink)`
   color: ${colors.primary};
   text-decoration: none;
   font-size: 24px;
   padding: 0 0 0 60px;
   @media ${media.mobile} {
      font-size: 18px;
      padding: 0 0 0 30px;
   }
   // Gestion du style du lien actif grace a NavLink
   &.active {
      text-decoration: underline;
   }
   &:hover {
      filter: brightness(0.9);
   }
`

// Layout Header 
function Header() {
   return (
      <ContHeader>
         <Link to="/">
            <HomeLogo src={Logo} />
         </Link>

         <div>
            <StyledLink to="/">
               Accueil
            </StyledLink>

            <StyledLink to="/about">
               À Propos
            </StyledLink>
         </div>
      </ContHeader>
   )
 }
 
 export default Header