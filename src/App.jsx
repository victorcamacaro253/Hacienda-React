import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Carousel from './components/carousel';
//import HistoryPage from './components/history';
import HistoryPage from './historyPage';
import './style.css';
import Map from './components/maps';
import BlogSection from './components/BlogSection';
import WhatWeDo from './components/whatWeDo';
import TestimonialsSection from './components/Testimonials';
import ImageCarousel from './components/ImageCarousel';
import BreedsShowcase from './components/breedshowcase';
import BreedsDetails from './breedDetails';
import Footer from './components/Footer'; // Import the Footer component


const App = () => {
  

  return (
    <Router>
      <Header  />
   

      {/* Define Routes for different pages */}
      <Routes>
        {/* Default route (Home page) */}
        <Route path="/" element={<div>   <Carousel/> <BlogSection/>  <WhatWeDo/> <TestimonialsSection/> <ImageCarousel/> <BreedsShowcase/>  <Map/>  </div>} />

        {/* Route for HistoryPage */}
        <Route path="/history" element={<HistoryPage />} />

       <Route path='/breeds' element={<BreedsDetails/>} />


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
