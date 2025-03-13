import '../breedshowcase.css';
import BreedCarousel from '../BreedCarousel'; // Import the BreedCarousel component
import img1 from '../assets/images/cow1.jpg'; // Import the image
import img2 from '../assets/images/cow2.jpg'; // Import the image
import img3 from '../assets/images/cow3.jpg'; // Import the image
import img4 from '../assets/images/cow4.jpg'; // Import the image
import img5 from '../assets/images/cow.jpg'; // Import the image
import { useNavigate } from 'react-router-dom';

const BreedsShowcase = () => {
  const navigate = useNavigate();
  const breeds = [
    {
      name: "Brahman",
      description: "Conocida por su resistencia al calor y adaptabilidad. Excelente para producción de carne en climas tropicales.",
      image: "https://images.unsplash.com/photo-1584935385440-1c5a59c0803b?auto=format&fit=crop&q=80&w=1920",
      characteristics: ["Resistente al calor", "Alta adaptabilidad", "Excelente ganancia de peso"],
      carouselImages: [
        img1,
        img2,
        img3,
      ]
    },
    {
      name: "Angus",
      description: "Raza premium para carne, conocida por su marmoleo excepcional y rápido crecimiento.",
      image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
      characteristics: ["Carne premium", "Rápido crecimiento", "Excelente marmoleo"],
      carouselImages: [
        "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1548667348-5bcd92d0b72b?auto=format&fit=crop&q=80&w=1920"
      ]
    },
    {
      name: "Holstein",
      description: "La raza lechera más productiva del mundo, conocida por su alta producción de leche.",
      image: "https://images.unsplash.com/photo-1597734816317-2026d4824292?auto=format&fit=crop&q=80&w=1920",
      characteristics: ["Alta producción", "Dócil", "Adaptable"],
      carouselImages: [
        "https://images.unsplash.com/photo-1597734816317-2026d4824292?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1562564013-cf67f287abec?auto=format&fit=crop&q=80&w=1920"
      ]
    },
    {
      name: "Hereford",
      description: "Excelente para la producción de carne, conocida por su eficiencia alimenticia y temperamento dócil.",
      image: "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1920",
      characteristics: ["Eficiente", "Dócil", "Rústica"],
      carouselImages: [
        "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&q=80&w=1920",
        "https://images.unsplash.com/photo-1602127477198-1a5b6c13da0e?auto=format&fit=crop&q=80&w=1920"
      ]
    }
  ];

  return (
    <section className="breeds-section">
      <div className="breeds-container">
        <div className="breeds-header">
          <span className="breeds-subtitle">Nuestras Razas</span>
          <h2>Excelencia en Genética Bovina</h2>
          <p>
            Criamos y seleccionamos las mejores razas de ganado, 
            garantizando calidad superior y adaptabilidad a diferentes entornos.
          </p>
          <button
            onClick={() => navigate('/breeds')}
          
          >
            Ver todas las razas
           
          </button>
        </div>

        <div className="breeds-grid">
          {breeds.map((breed, index) => (
            <div key={index} className="breed-card">
              <BreedCarousel images={breed.carouselImages} /> {/* Add carousel for each breed */}
              <div className="breed-content">
                <h3>{breed.name}</h3>
                <p>{breed.description}</p>
                <div className="breed-characteristics">
                  {breed.characteristics.map((characteristic, charIndex) => (
                    <span key={charIndex} className="characteristic-tag">
                      {characteristic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreedsShowcase;
