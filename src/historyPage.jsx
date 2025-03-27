// HistoryPage.js
import React, { useState } from 'react';
import './historyPage.css';
import img10 from '/src/assets/images/img10.jpg';
import img11 from '/src/assets/images/img11.webp';
import img12 from '/src/assets/images/img12.webp';
import img13 from '/src/assets/images/img13.webp';
import useInView from './hooks/useView';
import Modal from './components/modalGallery';

// Timeline Data (Example) - Updated with icons
const timelineData = [
  { 
    year: "1920", 
    event: "Farm Founded", 
    description: `En lo profundo de las colinas verdes que rodean el pintoresco pueblo de San José de las Rosas, se encuentra la Hacienda Villa Blanca. Desde hace más de un siglo, esta hacienda ha sido el corazón de la familia Ramírez.`,
    icon: "🌱" // Added icon
  },
  { 
    year: "1950", 
    event: "First Barn Built", 
    description: "The iconic barn was built, a key part of the farm's infrastructure.",
    icon: "🏚️"
  },
  { 
    year: "1990", 
    event: "Modernization", 
    description: "The farm embraced new technologies to improve crop production.",
    icon: "🚜"
  },
  { 
    year: "2020", 
    event: "Farm Tours", 
    description: "We opened our farm for tours, sharing our history with the community.",
    icon: "👨‍🌾"
  }
];

const HistoryPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
    const isTimelineInView = useInView({ selector: '.timeline-section' });
    const isGalleryInView = useInView({ selector: '.gallery-section' });


    const handleImageClick = (imageSrc) => {
      setSelectedImage(imageSrc);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
      setSelectedImage(null);
    };

    return (
      <div className="history-page" >
        {/* Hero Section */}
        <section className="hero-section">
          <img src={img10} alt="Farm History" className="hero-image"/>
          <div className="hero-overlay">
            <h1>Our Farm’s Legacy</h1>
            <p>From Generations of Hard Work to the Heart of Our Community</p>
            <a href="#timeline" className="cta-button">Explore Our History</a>
          </div>
        </section>
  
        {/* Timeline Section */}
        <section id="timeline" className={`timeline-section ${isTimelineInView ? 'visible' : ''}`}>
          <h2>Farm History</h2>
     
<div className="timeline">
  {timelineData.map((item, index) => (
    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
      <div className="timeline-content">
        <span className="timeline-icon">{item.icon}</span>
        <span className="year">{item.year}</span>
        <h3>{item.event}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
  <div className="timeline-line"></div>
</div>
        </section>
  
        {/* Image Gallery Section */}
        <section  className={`gallery-section ${isGalleryInView ? 'visible' : ''}`}>
          <h2>Gallery</h2>
          <div className="gallery">
            <div className="gallery-item" onClick={() => handleImageClick(img10)}><img src={img10} alt="Farm Image 1" /></div>
            <div className="gallery-item" onClick={() => handleImageClick(img11)}  ><img src={img11} alt="Farm Image 2" /></div>
            <div className="gallery-item" onClick={() => handleImageClick(img12)} ><img src={img12} alt="Farm Image 3" /></div>
            <div className="gallery-item" onClick={() => handleImageClick(img13)} ><img src={img13} alt="Farm Image 4" /></div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="cta-section">
          <h2>Join Our Legacy</h2>
          <p>Discover more about our farms history and become part of the tradition.</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </section>
         {/* Modal for Image Display */}
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
      </div>

      
    );
  };
  
  export default HistoryPage;

