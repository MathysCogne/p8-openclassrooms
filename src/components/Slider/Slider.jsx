// IMPORTS
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// ASSETS
import ArrowRight from '../../assets/arrow-right.png';
import ArrowLeft from '../../assets/arrow-left.png';

// STYLES
const ContSlider = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;

   position: relative;
`
const ImgSlider = styled.img`
   width: 100%;
   height: 415px;
   object-fit: cover;
   border-radius: 15px;
   @media ${media.mobile} {
      height: 280px;
   }
`
const ArrowSliderLeft = styled.img`
   position: absolute;
   cursor: pointer;
   right: 2%;
   @media ${media.mobile} {
      width: 7%;
   }
`
const ArrowSliderRight = styled.img`
   position: absolute;
   cursor: pointer;
   left: 2%;
   @media ${media.mobile} {
      width: 7%;
   }
`
const CountSlider = styled.p`
   position: absolute;

   bottom: 0%;

   color: white;
   font-weight: 700;
`





function Slider({ images }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   function nextImage() {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
   };

   function prevImage() {
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
   };

   return (
      <ContSlider>
         
         

         {images.length > 1 
         &&
         <>
            <CountSlider>{currentIndex + 1} / {images.length}</CountSlider>
            <ArrowSliderLeft src={ArrowLeft} alt="Flèche gauche" onClick={nextImage} />
            <ArrowSliderRight src={ArrowRight} alt="Flèche droite" onClick={prevImage} />
         </>
         }

         <ImgSlider src={images[currentIndex]} alt="Logement" />
      </ContSlider>
   );
};

export default Slider;
