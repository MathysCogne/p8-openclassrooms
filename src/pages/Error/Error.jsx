// IMPORTS
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// STYLES
const ContError = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 57vh;
   color: ${colors.primary};
`
const TitleError = styled.h1`
   font-size: 288px;
   font-weight: 900;
   margin: 0;
   @media ${media.mobile} {
      font-size: 96px;
   }
`
const TextError = styled.p`
   font-size: 36px;
   margin: 0;
   @media ${media.mobile} {
      font-size: 22px;
   }
`
const LinkError = styled(Link)`
   color: ${colors.primary};
   font-size: 18px;
   margin-top: 100px;
   @media ${media.mobile} {
      font-size: 14px;
   }
   &:hover {
      filter: brightness(0.95);
   }
`



// Page erreur 404
function Error() {
   return (
      <ContError>
         <TitleError>404</TitleError>
         <TextError>Oups 🙈 La page que vous demandez n'existe pas..</TextError>
         <LinkError to="/">Retourner sur la page d’accueil</LinkError>
      </ContError>
   )
 }
 
 export default Error