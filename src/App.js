// IMPORTS
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

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
import media from './style/media'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Monteserat', sans-serif;
    }
`
const Contenair = styled.div`
  max-width: 1300px;
  min-height: 80vh;

  width: 80%;  
  margin: 0 auto;
  @media ${media.mobile} {
    width: 90%;
 }
  `



function App() {

  return (
    <>
    <GlobalStyle />
    <Contenair>

      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      
      
    </Contenair>
    <Footer />
    </>
  );
}

export default App;
