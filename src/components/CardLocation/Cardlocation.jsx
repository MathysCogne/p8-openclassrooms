// IMPORTS
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/colors'
import media from '../../style/media'

// ASSETS
import DataLocation from '../../assets/location.json'

// STYLES
const ContLocation = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;

   background-color: ${colors.backgroundCard};
   border-radius: 30px;
   padding: 35px 0;
   margin: 50px 0;

   @media ${media.mobile} {
      align-items: center;
      background-color: white;
      padding: 35px 0;
      margin: 0 0;
   }
`

const ContCard = styled.figure`
   cursor: pointer;

   width: 340px;
   height: 340px;
   margin: 30px;
   transition: 0.2s;
   &:hover{
      scale: 1.05;
   }
   
   @media ${media.mobile} {
      width: 85vw;
      height: 250px;
   }
`

const ImgLocation = styled.img`
   object-fit: cover;
   width: 340px;
   height: 340px;
   border-radius: 15px;

   @media ${media.mobile} {
      width: 85vw;
      height: 250px;
   }
`

const GradientLocation = styled.div`
   background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
   width: 100%;
   height: 100%;
   border-radius: 15px;

   position: relative;
   bottom: 345px;

   @media ${media.mobile} {
      bottom: 255px;
   }
`

const TitleLocation = styled.figcaption`
   color: white;
   font-size: 18px;
   position: relative;
   width: 240px;

   bottom: 395px;
   left: 20px;
   margin: 0;

   @media ${media.mobile} {
      bottom: 305px;
   }
`


function Cardlocation() {
   return (
      <ContLocation>
         {DataLocation.map((location) => (

            <Link to={`/location/${location.id}`} >
               <ContCard >
                  <ImgLocation src={location.cover} alt={location.title}/>
                  <GradientLocation />
                  <TitleLocation>{location.title}</TitleLocation>
               </ContCard>
            </Link>

         ))}
      </ContLocation>
   )
 }

 

export default Cardlocation