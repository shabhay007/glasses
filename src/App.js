import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer'
import Carousel1 from './components/Carousel1';
import Carousel2 from './components/Carousel2';
import Banner1 from './components/Banner1';
import Eyeglassesmain from './components/Eyeglassesmain';
import Banner2 from './components/Banner2';
import Sunglasses_main from './components/Sunglasses_main';
import Banner3 from './components/Banner3';
import Kids_glass_Row from './components/Kids_glass_Row';
import Youtube_content from './components/Youtube_content';
import Four_sq_banner from './components/Four_sq_banner';


/* imported files for second page */
import Nav from './Pages/ComponentsSecondPage/Nav'; 
import Slider  from "./Pages/ComponentsSecondPage/Slider";
import SwiperCardMain from './Pages/ComponentsSecondPage/SwiperCardMain';

// Page 3 components  
import Page3Nav from './Page3/Page3Component/Page3Nav';

function App() 
{
  return (
    <div className="App">
      {/* <Navbar />
      <Searchbar />
      <Navbar2 />
      <Carousel1 />
      <Carousel2 />
      <Banner1 />
      <Eyeglassesmain />
      <Banner2 />
      <Sunglasses_main />
      <Banner3 />
      <Kids_glass_Row />
      <Four_sq_banner />
      <Youtube_content />
      <Footer /> */}


      {/* <Nav />
      <Slider/>
      <SwiperCardMain /> */}


      {/* Page 3 */}

      <Page3Nav />
      
    </div>
  );
}

export default App;
