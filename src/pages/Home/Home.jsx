// IMPORTS
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// ASSETS
import Banner from '../../assets/banner-home.png'

// COMPONENTS
import Cardlocation from '../../components/CardLocation/Cardlocation'

// STYLES
const HomeCont = styled.section`

`
const BannerCont = styled.div`
   width: 100%;
   height: 223px;

   display: flex;
   justify-content: center;
   align-items: center;
   @media ${media.mobile} {
      height: 150px;
   }
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
   filter: brightness(0.65);
   @media ${media.mobile} {
      height: 150px;
   }
`


// HOME
function Home() {
   return (
      <HomeCont>
         
         <BannerCont>
            <BannerImg src={Banner} />
         </BannerCont>
         <Cardlocation />

      </HomeCont>
   )
 }
 
 export default Home