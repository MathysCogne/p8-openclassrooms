// IMPORTS
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// ASSETS
import Banner from '../../assets/banner-home.png'

// STYLES
const HomeCont = styled.section`
   margin: 0 0 400px 0; 
`
const BannerCont = styled.div`
   width: 100%;
   height: 223px;

   display: flex;
   justify-content: center;
   align-items: center;
   &::after {
      content: "Chez vous, partout et ailleurs...";
      z-index: 1;
      position: absolute;
      color: white;
      font-size: 38px;
      @media ${media.mobile} {
         font-size: 24px;
      }
   }
`
const BannerImg = styled.img`
   width: 100%;
   height: 223px;
   object-fit: cover;
   border-radius: 30px;
   filter: brightness(0.85);
`


// HOME
function Home() {
   return (
      <HomeCont>
         
         <BannerCont>
            <BannerImg src={Banner} />
         </BannerCont>

         <h1>LANDING PAGE 🙈🙈 HIHI</h1>
      </HomeCont>
   )
 }
 
 export default Home