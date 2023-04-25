// IMPORTS
import './home.css'

// ASSETS
import Banner from '../../assets/banner-home.png'

// COMPONENTS
import Cardlocation from '../../components/CardLocation/Cardlocation'



// Page d'acceuil > Contient une bannière et le composant Cardlocation
function Home() {
   return (
      <section>
         
         <div className='BannerCont'>
            <img className='BannerImg' src={Banner} alt='Paysage' />
         </div>
         
         <Cardlocation />

      </section>
   )
 }
 
 export default Home