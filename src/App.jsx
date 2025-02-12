import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Carousel from './components/carousel';
import HistoryPage from './components/history';
import './style.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Carousel />

      {/* Define Routes for different pages */}
      <Routes>
        {/* Default route (Home page) */}
        <Route path="/" element={<div>Welcome to the home page!</div>} />

        {/* Route for HistoryPage */}
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
