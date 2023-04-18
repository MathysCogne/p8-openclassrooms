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





   
// Collapse 
function Collapsehome() {

   // State
   const [collapseState, setCollapseState] = useState([]);

   // UseEffect - On charge le state avec les données
   useEffect(() => {
      setCollapseState(DataCollapse.map(collapse => collapse.state));
   }, []);

   // Toggle Collapse
   // 
   const toggleCollapse = (index) => {
      const newState = [...collapseState];
      newState[index] = !newState[index];
      setCollapseState(newState);
   }

   return (
      <>
         {DataCollapse.map((collapse, index) => (
            <div key={collapse.id} >
               <ContCollapse>
                  <TittleCont onClick={() => toggleCollapse(index)}>
                     <TittleCollapse>{collapse.title}</TittleCollapse>

                     {collapseState[index] ? <img src={ArrowUp} alt="arrow" /> : <img src={ArrowDown} alt="arrow" />}

                  </TittleCont>
                  {collapseState[index] && <TextCollapse>{collapse.text}</TextCollapse>}
               </ContCollapse>
            </div>
         ))}
      </>
   )
 }
 
 export default Collapsehome
