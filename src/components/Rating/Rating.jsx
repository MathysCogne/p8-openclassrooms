// IMPORTS
import styled from 'styled-components'
import media from '../../style/media'

// ASSETS
import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';

// STYLES
const Stars = styled.img`
   @media ${media.mobile} {
      width: 30px;
      height: 30px;
   }
`

// Composant Rating > affiche les étoiles en fonction de la note
// Props : rating (note de 1 à 5)
function Rating({ rating }) { 
   const stars = []; // Creer un tableau pour stocker les étoiles
 
   for (let i = 1; i <= 5; i++) { // Boucle pour afficher les étoiles
      if (i <= rating) { // Tant que i est inférieur ou égal à la note
         stars.push(<Stars key={i} src={StarActive} alt="star-filled" />);
      } else { // Sinon on affiche une étoile vide
         stars.push(<Stars key={i} src={StarInactive} alt="star-empty" />);
      }
   }

   return <div>{stars}</div>; // Retourne les etoiles
}
export default Rating;