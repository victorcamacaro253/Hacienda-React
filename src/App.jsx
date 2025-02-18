import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Carousel from './components/carousel';
//import HistoryPage from './components/history';
import HistoryPage from './components/historyPage';
import './style.css';
import useHeaderStyle from './hooks/useHeaderStyle'; // Import the custom hook

const App = () => {
  

  return (
    <Router>
      <Header  />
   

      {/* Define Routes for different pages */}
      <Routes>
        {/* Default route (Home page) */}
        <Route path="/" element={<div>   <Carousel/></div>} />

        {/* Route for HistoryPage */}
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
