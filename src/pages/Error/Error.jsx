// IMPORTS
import { Link } from 'react-router-dom'
import './error.css' 



// Page erreur 404
function Error() {
   return (
      <section className='ContError'>
         <h1 className='TitleError'>404</h1>
         <p className='TextError'>Oups 🙈 La page que vous demandez n'existe pas..</p>
         <Link to="/" className='LinkError'>Retourner sur la page d’accueil</Link>
      </section>
   )
 }
 
 export default Error