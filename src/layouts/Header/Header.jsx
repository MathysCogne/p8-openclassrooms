// IMPORTS
import { Link, NavLink } from 'react-router-dom'
import './header.css'

// ASSETS
import Logo from '../../assets/logo.png'




// Layout Header 
function Header() {
   return (
      <nav className='ContHeader'>
         <Link to="/">
            <img className='HomeLogo' alt='Logo de kasa' src={Logo} />
         </Link>

         <div>
            <NavLink to="/" className='StyledLink'>
               Accueil
            </NavLink>

            <NavLink to="/about" className='StyledLink'>
               À Propos
            </NavLink>
         </div>
      </nav>
   )
 }
 
 export default Header