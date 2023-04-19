// IMPORTS
import { useState } from 'react'
import styled from 'styled-components'
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

// Composant Slider > affiche les images du logement en slider
// Props : images du slider a afficher
function Slider({ images }) { 
   const [currentIndex, setCurrentIndex] = useState(0); // State > Index de l'image actuelle

   function nextImage() { // Passe a l'image suivante
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
   };

   function prevImage() { // Passe a l'image precedente
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
   };


   return (
      <ContSlider>
         
         {images.length > 1  // Si il n'y a qu'une seul image, on n'affiche seulement l'image
         &&
         <> 
            {/* // Affiche le compteur d'image */}
            <CountSlider>{currentIndex + 1} / {images.length}</CountSlider> 
            
            {/* // Affiche les fleches de navigation, au click on passe a l'image suivante ou precedente */}
            <ArrowSliderLeft src={ArrowLeft} alt="Flèche gauche" onClick={nextImage} />
            <ArrowSliderRight src={ArrowRight} alt="Flèche droite" onClick={prevImage} /> 
         </>
         }
         
         {/* // Affiche l'image actuelle en fonction de l'index */}
         <ImgSlider src={images[currentIndex]} alt="Logement" /> 


      </ContSlider>
   )
}

export default Slider;
