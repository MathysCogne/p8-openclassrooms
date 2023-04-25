// IMPORTS
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './location.css';

// COMPONENTS
import Error from '../../pages/Error/Error';
import Slider from '../../components/Slider/Slider';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse'

// ASSETS
import DataLocation from '../../assets/location.json';



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

   // Crréer un JSON pour le passer en props au composant Collapsehome
   const data = [
      {
         title: 'Description',
         text: logement.description
      },
      {
         title: 'Equipements',
         // Créer une liste avec les équipements
         text: logement.equipments.map(equipment => (
            <p className='TextCollapse' key={equipment}>{equipment}</p>
         ))
      }
   ]


   return ( 
      <>
         {logement.pictures && <Slider images={logement.pictures} />}

         <section className='ContInfo'>

            <div className='ContInfoLogement'>
               <h1 className='TittleInfo'>{logement.title}</h1>
               <p className='TextInfo'>{logement.location}</p>
               <ul className='TagUl'>
                  {logement.tags.map(tag => (
                     <li className='TagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>

            <div className='ContInfoOwner'>
               <div className='TEST'>
                  <p className='TextInfoOwner'>{logement.host.name}</p>
                  <img className='ImgOwner' src={logement.host.picture} alt={logement.host.name} />
               </div>

               <Rating rating={logement.rating} />
            </div>

         </section>

         <Collapse data={data}/>

      </>
  );
}


export default Logement;