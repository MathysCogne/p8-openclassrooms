// IMPORTS
import './about.css'

// COMPONENTS
import Collapse from '../../components/Collapse/Collapse'

// ASSETS
import Banner from '../../assets/banner-about.png'
import data from '../../assets/collapse.json'


// Page About > Contient une bannière et le composant Collapsehome
function About() {
   return (
      <section>
         <img className='BannerCont' alt='Paysage' src={Banner} />
         <Collapse data={data}/>
      </section>
   )
 }
 
 export default About