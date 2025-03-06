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
const App = () => {
  

  return (
    <Router>
      <Header  />
   

      {/* Define Routes for different pages */}
      <Routes>
        {/* Default route (Home page) */}
        <Route path="/" element={<div>   <Carousel/> <BlogSection/>  <WhatWeDo/> <TestimonialsSection/>  <Map/>  </div>} />

        {/* Route for HistoryPage */}
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
