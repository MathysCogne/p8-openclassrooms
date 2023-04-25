// IMPORTS
import styled from 'styled-components'
import media from '../../style/media'

// ASSETS
import Banner from '../../assets/banner-home.png'

// COMPONENTS
import Cardlocation from '../../components/CardLocation/Cardlocation'

// STYLES
const BannerCont = styled.div`
   width: 100%;
   height: 223px;
   margin: 70px 0;

   display: flex;
   justify-content: center;
   align-items: center;
   @media ${media.mobile} {
      height: 150px;
      margin: 0 0;
   }
   &::after {
      content: "Chez vous, partout et ailleurs...";
      z-index: 1;
      position: absolute;
      color: white;
      font-size: 38px;
      @media ${media.mobile} {
         font-size: 18px;
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


// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Home() {
   return (
      <section>
         
         <BannerCont>
            <BannerImg src={Banner} />
         </BannerCont>
         
         <Cardlocation />

      </section>
   )
 }
 
 export default Home