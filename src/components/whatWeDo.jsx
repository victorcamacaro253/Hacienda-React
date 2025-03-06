// WhatWeDo.jsx
import { Wheat, Cog as Cow, Leaf, Mountain } from 'lucide-react';
import '../whatWeDo.css';

const WhatWeDo = () => {
  const activities = [
    {
      title: "Producción Agrícola",
      description: "Nos especializamos en la siembra de cultivos orgánicos, garantizando productos frescos y de alta calidad.",
      icon: Wheat,
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Ganadería",
      description: "Criamos ganado de manera sostenible, asegurando el bienestar animal y la producción de productos lácteos de calidad.",
      icon: Cow,
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Proyectos de Conservación",
      description: "Implementamos iniciativas para proteger el medio ambiente y promover la biodiversidad en nuestra región.",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Ecoturismo",
      description: "Ofrecemos experiencias únicas para los visitantes, conectándolos con la naturaleza y nuestras prácticas sostenibles.",
      icon: Mountain,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="header">
          <span className="subtitle">Nuestras Actividades</span>
          <h2>Lo que Hacemos</h2>
          <p>
            En Hacienda Villa Blanca, nos dedicamos a diversas actividades que promueven 
            la sostenibilidad y el bienestar de nuestra comunidad. 
            Aquí te presentamos nuestras principales áreas de trabajo.
          </p>
        </div>

        <div className="grid">
          {activities.map((activity, index) => (
            <div key={index} className="card" tabIndex={0}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={activity.image} alt={activity.title} />
                  <div className="overlay" />
                  <div className="icon-wrapper">
                    <activity.icon className="icon" />
                  </div>
                  <h3>{activity.title}</h3>
                </div>
                <div className="card-back">
                  <activity.icon className="icon" />
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  <button className="learn-more">Saber más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;