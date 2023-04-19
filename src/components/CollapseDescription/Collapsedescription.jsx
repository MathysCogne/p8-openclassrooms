// IMPORTS
import { useState, useEffect } from 'react'
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
`
const TittleCollapse = styled.h4`
   font-weight: 500;
   margin: 0;
   color: white;
   @media ${media.mobile} {
      font-size: 18px;
   }
`
const TextCont = styled.div`
   padding: 15px 20px;
   margin: 0;
   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
   background-color: ${colors.backgroundCard};
   border-radius: 0 0 10px 10px;
`
const TextCollapse = styled.p`
   font-weight: 300;
   padding: 2px;
   margin: 0;
   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
   color: ${colors.primary};
   @media ${media.mobile} {
      font-size: 17px;
   }
`


   
// Collapse 
function Collapsedescription({ description, equipments }) {

   const [collapseState, setCollapseState] = useState([false, false]);
   
   const toggleCollapse = (index) => {
   const newState = [...collapseState];
   newState[index] = !newState[index];
   setCollapseState(newState);
   };
 
   return (
      <ContCollapse>
         <DivCollapse>
            <TittleCont onClick={() => toggleCollapse(0)}>
               <TittleCollapse>Description</TittleCollapse>
               {collapseState[0] ? (
                  <img src={ArrowUp} alt="arrow" />
               ) : (
                  <img src={ArrowDown} alt="arrow" />
               )}
            </TittleCont>
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

 