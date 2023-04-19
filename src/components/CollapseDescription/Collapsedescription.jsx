// IMPORTS
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// ASSETS
import ArrowDown from '../../assets/arrow-down.png'
import ArrowUp from '../../assets/arrow-up.png'

// STYLES
const ContCollapse = styled.aside`
   display: flex;
   column-gap: 60px;
   @media ${media.mobile} {
      flex-direction: column;
      margin: 40px 0;
   }
`
const DivCollapse = styled.div`
   font-size: 18px;
   width: 50%;
   margin: 40px auto;
   padding-bottom: 20px;
   @media ${media.mobile} {
      width: 100%;
      margin: 5px auto;
   }
`
const TittleCont = styled.div`
   background-color: ${colors.primary};
   padding: 12px 20px;
   border-radius: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   @media ${media.mobile} {
      padding: 8px;
   }
`
const TittleCollapse = styled.h4`
   font-weight: 500;
   margin: 0;
   color: white;
   @media ${media.mobile} {
      font-size: 17px;
   }
`
const TextCont = styled.div`
   padding: 15px 20px;
   margin: 0;
   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; // Si le state est à true, on affiche le texte, sinon on le cache
   background-color: ${colors.backgroundCard};
   border-radius: 0 0 10px 10px;
`
const TextCollapse = styled.p`
   font-weight: 300;
   padding: 2px;
   margin: 0;
   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; // Si le state est à true, on affiche le texte, sinon on le cache
   color: ${colors.primary};
   @media ${media.mobile} {
      font-size: 16px;
   }
`

// Composant Collapse Description > Génere deux collapse (description et équipements) pour la page des logements (Dynamique depuis le JSON)
// Props : description & equipments 
function Collapsedescription({ description, equipments }) { 

   const [collapseState, setCollapseState] = useState([false, false]);  // State qui permet de gérer l'ouverture et la fermeture des collapse
   
   const toggleCollapse = (index) => { // Fonction qui permet de gérer l'ouverture et la fermeture des collapse Index 0 = Description // Index 1 = Equipements
   const newState = [...collapseState]; // On copie le state
   newState[index] = !newState[index]; // On inverse la valeur du state
   setCollapseState(newState); // On met à jour le state
   };
 
   return (
      <ContCollapse>
         <DivCollapse>
            {/* // On appelle la fonction toggleCollapse avec l'index 0 pour fermer/ouvrir celle-ci */}
            <TittleCont onClick={() => toggleCollapse(0)}>
               <TittleCollapse>Description</TittleCollapse>
               {collapseState[0] ? ( // Si le state est à true, on affiche la flèche vers le haut, sinon on affiche la flèche vers le bas // 
                  <img src={ArrowUp} alt="arrow" />
               ) : (
                  <img src={ArrowDown} alt="arrow" />
               )}
            </TittleCont>
            
            {/* // On affiche le texte si le state est à true */}
            <TextCont isOpen={collapseState[0]}> 
               <TextCollapse isOpen={collapseState[0]}>{description}</TextCollapse>
            </TextCont>

         </DivCollapse>
   

         <DivCollapse>
            <TittleCont onClick={() => toggleCollapse(1)}>
               <TittleCollapse>Équipements</TittleCollapse>
               
               {collapseState[1] ? (
                  <img src={ArrowUp} alt="arrow" />
               ) : (
                  <img src={ArrowDown} alt="arrow" />
               )}
            </TittleCont>

            <TextCont isOpen={collapseState[1]}>
               {equipments.map((equipment) => (
               <TextCollapse key={equipment} isOpen={collapseState[1]}>{equipment}</TextCollapse>
               ))}
            </TextCont>
         </DivCollapse>
      </ContCollapse>
   );
 }
 export default Collapsedescription;

 