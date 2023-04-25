// IMPORTS
import {Routes, Route} from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Location from './pages/Location/Location';
import About from './pages/About/About';

// LAYOUTS
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';

// COMPONENTS


// GLOBAL STYLES
import './style/app.css';



// Routes de l'application // Layouts de l'application
function App() {

  return (
    <>
    <div className='contenair'>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
      
    </div>
    <Footer />
    </>
  );
}

export default App;
