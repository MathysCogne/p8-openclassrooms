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

function Rating({ rating }) {
   const stars = [];
 
   for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
         stars.push(<Stars key={i} src={StarActive} alt="star-filled" />);
      } else {
         stars.push(<Stars key={i} src={StarInactive} alt="star-empty" />);
      }
   }
 
   return <div>{stars}</div>;
}

export default Rating;