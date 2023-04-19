// IMPORTS
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// COMPONENTS
import Error from '../../pages/Error/Error';
import Slider from '../../components/Slider/Slider';
import Rating from '../../components/Rating/Rating';
import Collapsedescription from '../../components/CollapseDescription/Collapsedescription';

// ASSETS
import DataLocation from '../../assets/location.json';

// STYLES
const ContInfo = styled.section`
   color: ${colors.primary};
   margin: 60px 0 30px 0;

   display: flex;
   justify-content: space-between;

   @media ${media.mobile} {
      flex-direction: column;
      margin: 30px 0;
   }
`


const ContInfoLogement = styled.div`
   width: 70%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   @media ${media.mobile} {
      width: 100%;
   }
`
const TittleInfo = styled.h1`
   font-size: 36px;
   font-weight: 500;
   margin: 0;
   @media ${media.mobile} {
      font-size: 25px;
   }
`
const TextInfo = styled.p`
   margin: 0;
   font-size: 18px;
   
   @media ${media.mobile} {
      font-size: 13px;
}
`
const TagUl = styled.ul`
   padding: 0;
   margin: 25px 0 0 0;
`
const TagLi = styled.li`
   font-size: 14px;
   display: inline-block;
   background-color: ${colors.primary};
   color: white;
   padding: 7px 20px;
   border-radius: 10px;
   margin: 0 20px 0 0;
   @media ${media.mobile} {
      font-size: 12px;
      padding: 4px 10px;
      margin: 0 15px 10px 0;
   }
`



const ContInfoOwner = styled.div`
   width: 30%;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   @media ${media.mobile} {
      margin: 20px 0 0 0;
      width: 100%;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
   }
`
const ImgOwner = styled.img`
   width: 90px;
   height: 90px;
   border-radius: 50%;
   margin: 0 0 0 30px;
   @media ${media.mobile} {
      width: 70px;
      height: 70px;
      border-radius: 50%;
   }
`
const TextInfoOwner = styled.p`
   margin: 0;
   width: 60px;
   font-size: 18px;
   
   @media ${media.mobile} {
      width: 40px;
      font-size: 13px;
}
`
const TEST = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   @media ${media.mobile} {
      margin-bottom: 0;
   }
`




// Page Logement > Contient le Composant Slider, compo Rating et le composant Collapsedescription ainsi que les infos du logement et du propriétaire
function Logement() {
   const [logement, setLogement] = useState(null); 
   const { id } = useParams(); // Récupère l'id du logement dans l'url

   useEffect(() => {  // Récupère les infos du logement en fonction de l'id
      const data = DataLocation.find(location => location.id === id);
      if (data) {
      setLogement(data);
   } else { 
      setLogement(null);
   }
   }, [id]);

   if (!logement) { // Si l'id n'existe pas, affiche la page d'erreur
      return (<Error />);
   }

   return ( 
      <>
         {logement.pictures && <Slider images={logement.pictures} />}

         <ContInfo>

            <ContInfoLogement>
               <TittleInfo>{logement.title}</TittleInfo>
               <TextInfo>{logement.location}</TextInfo>
               <TagUl>
                  {logement.tags.map(tag => (
                     <TagLi key={tag}>{tag}</TagLi>
                  ))}
               </TagUl>
            </ContInfoLogement>

            <ContInfoOwner>
               <TEST>
                  <TextInfoOwner>{logement.host.name}</TextInfoOwner>
                  <ImgOwner src={logement.host.picture} alt={logement.host.name} />
               </TEST>

               <Rating rating={logement.rating} />
            </ContInfoOwner>

         </ContInfo>

         <Collapsedescription description={logement.description} equipments={logement.equipments}/>

      </>
  );
}


export default Logement;