// IMPORTS
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// ASSETS
import ArrowDown from '../../assets/arrow-down.png'
import ArrowUp from '../../assets/arrow-up.png'
import DataCollapse from '../../assets/collapse.json'

// STYLES
const ContCollapse = styled.aside`
   font-size: 24px;
   width: 80%;
   margin: 40px auto;
   background-color: ${colors.backgroundCard};
   border-radius: 5px;
   @media ${media.mobile} {
      width: 100%;
   }
`
const TittleCont = styled.div`
   background-color: ${colors.primary};
   padding: 10px 20px;
   border-radius: 5px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
`
const TittleCollapse = styled.h4`
   font-weight: 500;
   margin: 0;
   color: white;
   @media ${media.mobile} {
      font-size: 18px;
   }
`
const TextCollapse = styled.p`
   font-weight: 300;
   padding: 30px 20px;
   margin: 0;
   color: ${colors.primary};
   @media ${media.mobile} {
      font-size: 17px;
   }
`

// Composant Collapse Home > Génere les collapses de la page a propos depuis le fichier json
function Collapsehome() {

   const [collapseState, setCollapseState] = useState([]); // State des collapses

   useEffect(() => { 
      setCollapseState(DataCollapse.map(collapse => collapse.state)); // Initialisation de l'état des collapses
   }, []);

   const toggleCollapse = (index) => { // Fonction qui gère l'ouverture et la fermeture des collapses
      const newState = [...collapseState]; // Copie du state des collapses
      newState[index] = !newState[index]; // Inverse l'état du collapse cliqué
      setCollapseState(newState); // Met à jour le state des collapses
   }

   return (
      <>
         {DataCollapse.map((collapse, index) => ( // Boucle sur le fichier json
            // Génère un collapse par élément du fichier json
            <div key={collapse.id} > 
               <ContCollapse>
                  {/* // Gère l'ouverture et la fermeture des collapses au click */}
                  <TittleCont onClick={() => toggleCollapse(index)}> 
                     <TittleCollapse>{collapse.title}</TittleCollapse>

                     {/* // Gère l'affichage de la flèche en fonction de l'état du collapse */}
                     {collapseState[index] ? <img src={ArrowUp} alt="arrow" /> : <img src={ArrowDown} alt="arrow" />} 

                  </TittleCont>
                  {/* // Gère l'affichage du texte en fonction de l'état du collapse */}
                  {collapseState[index] && <TextCollapse>{collapse.text}</TextCollapse>}
               </ContCollapse>
            </div>
         ))}
      </>
   )
}
 export default Collapsehome
