//import './HistoryPage.css';  // Import the CSS file
import imgLogo from '/src/assets/images/img5.1.png';  // Adjust the path as necessary
import img10 from '/src/assets/images/img10.jpg';
import img11 from '/src/assets/images/img11.webp';
import img12 from '/src/assets/images/img12.webp';
import img13 from '/src/assets/images/img13.webp';

const HistoryPage = () => {
  return (
    <div className="history-page">
      <header className="text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo" style={{ marginTop: '30px' }}>
            <img src={imgLogo} alt="Logo" className="img-fluid" />
          </div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="victor.html" className="nav-link text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                      Contacto
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                      Info
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white"
                      onClick={() => (window.location.href = '/history')}
                    >
                      Nuestra Historia
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-white">
                      Intranet
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="body" style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap' }}>
        <h1 style={{ color: '#8f2f07', textAlign: 'center', fontStyle: 'italic' }}>
          La Hacienda Villa Blanca: Un Legado de Trabajo y Pasión
        </h1>

        <div className="container b">
          <img src={img10} alt="Hacienda Image" className="img-fluid" />

          <div className="content">
            <p className="descripcion">
              En lo profundo de las colinas verdes que rodean el pintoresco pueblo de San José de las Rosas, se
              encuentra la Hacienda Villa Blanca. Desde hace más de un siglo, esta hacienda ha sido el corazón de la
              familia Ramírez, una historia que comenzó con don José Ramírez y su esposa María, quienes se
              establecieron en estas tierras en busca de nuevas oportunidades.
            </p>

            <div className="primera-generacion">
              <h3>Primera Generación: Los Fundadores</h3>
              <div className="acomodo">
                <p className="descripcion">
                  Don José y María llegaron a estas tierras fértiles con una visión clara: establecer un hogar y una
                  fuente de sustento para su familia. Con trabajo arduo y determinación, comenzaron con un pequeño
                  rebaño de vacas lecheras y unos cuantos terneros. Cada día, desde el amanecer hasta el anochecer,
                  trabajaban incansablemente para cuidar del ganado y asegurar la calidad de la producción de leche.
                </p>
                <img src={img11} alt="Founders Image" style={{ width: '40%' }} />
              </div>
            </div>

            <div className="segunda-generacion">
              <h3>Segunda Generación: La Expansión</h3>
              <div className="acomodo">
                <img src={img12} alt="Expansion Image" style={{ width: '40%' }} />
                <p className="descripcion">
                  Con el paso de los años, la Hacienda Villa Blanca creció. El hijo de José y María, Antonio Ramírez,
                  heredó la pasión por el negocio ganadero y expandió la hacienda. Aprovechando las nuevas técnicas
                  agrícolas y de manejo de ganado, Antonio diversificó la producción hacia la carne de res, manteniendo
                  siempre el compromiso con la calidad y el bienestar animal que sus padres le enseñaron.
                </p>
              </div>
            </div>

            <div className="tercer-generacion">
              <h3>Tercera Generación: Innovación y Sostenibilidad</h3>
              <div className="acomodo">
                <p className="descripcion">
                  Hoy en día, la hacienda es dirigida por la tercera generación de la familia Ramírez. Roberto y María,
                  nietos de don José y María, han llevado la hacienda hacia nuevos horizontes. Con un enfoque renovado
                  en la sostenibilidad y la innovación, han implementado prácticas agrícolas responsables y
                  tecnologías avanzadas para mejorar la eficiencia y reducir el impacto ambiental.
                </p>
                <img src={img13} alt="Innovation Image" style={{ width: '40%' }} />
              </div>
            </div>

            <h3>Un Futuro Prometedor</h3>
            <p className="descripcion">
              Mirando hacia el futuro, la familia Ramírez está comprometida con preservar el legado de la Hacienda Villa
              Blanca. Con cada nueva generación, el amor por la tierra y el ganado sigue siendo el motor que impulsa
              este negocio familiar. Sueñan con expandir sus mercados, ofreciendo sus productos no solo a nivel local,
              sino también a nivel nacional e internacional, siempre manteniendo los valores y la tradición que han
              guiado a la familia desde sus inicios.
            </p>
            <p className="descripcion">
              Así es como la Hacienda Villa Blanca ha pasado de generación en generación, con una dedicación
              inquebrantable hacia el cuidado del ganado, la producción de leche y carne de calidad, y un compromiso
              firme con la comunidad y el medio ambiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
