// src/components/BlogSection.js
import img1 from '/src/assets/images/fiesta-cosecha.jpg';
import img2 from '/src/assets/images/ganaderia-sostenible.jpg';
import img3 from '/src/assets/images/DIA-LACTEA.jpg';
import '../blogSection.css'; // Import the CSS file for styling

const BlogSection = () => { 
    return (
        <section className="blog-section">
            <div className="container">
                <h2 className="section-title-blog">Últimas Noticias</h2>
                <p className="section-description-blog">Mantente al día con todo lo que sucede en Hacienda Villa Blanca. Conoce nuestros eventos, nuevos productos y más.</p>

                <div className="blog-posts">
                    {/* Post 1 */}
                    <div className="blog-post">
                        <img src={img1} alt="Evento especial en la hacienda" className="post-image" />
                        <div className="post-content">
                            <h3 className="post-title">Fiesta de la Cosecha 2025</h3>
                            <p className="post-date">Publicado el 25 de Marzo, 2025</p>
                            <p className="post-excerpt">Únete a nosotros para celebrar la temporada de cosecha. Habrá actividades para toda la familia, degustación de nuestros productos frescos y mucho más.</p>
                            <a href="/blog/fiesta-de-la-cosecha-2025" className="read-more">Leer más</a>
                        </div>
                    </div>

                    {/* Post 2 */}
                    <div className="blog-post">
                        <img src={img2} alt="Consejos para una ganadería sostenible" className="post-image" />
                        <div className="post-content">
                            <h3 className="post-title">Cómo Practicar una Ganadería Sostenible</h3>
                            <p className="post-date">Publicado el 15 de Marzo, 2025</p>
                            <p className="post-excerpt">La sostenibilidad es clave en nuestra operación. En este artículo, compartimos consejos prácticos sobre cómo cuidar nuestros animales y el medio ambiente.</p>
                            <a href="/blog/ganaderia-sostenible" className="read-more">Leer más</a>
                        </div>
                    </div>

                    {/* Post 3 */}
                    <div className="blog-post">
                        <img src={img3} alt="Lanzamiento de productos lácteos" className="post-image" />
                        <div className="post-content">
                            <h3 className="post-title">Nuevo Lanzamiento de Productos Lácteos</h3>
                            <p className="post-date">Publicado el 5 de Marzo, 2025</p>
                            <p className="post-excerpt">Estamos emocionados de anunciar el lanzamiento de nuestra línea de productos lácteos orgánicos, hechos con la mejor leche de nuestra hacienda.</p>
                            <a href="/blog/nuevo-lanzamiento-productos-lacteos" className="read-more">Leer más</a>
                        </div>
                    </div>


                    {/* Post 4 - Nueva noticia */}
                    <div className="blog-post">
                        <img src={img2} alt="Taller de Agricultura Sostenible" className="post-image" />
                        <div className="post-content">
                            <h3 className="post-title">Taller de Agricultura Sostenible en Hacienda Villa Blanca</h3>
                            <p className="post-date">Publicado el 10 de Abril, 2025</p>
                            <p className="post-excerpt">Te invitamos a participar en nuestro taller de agricultura sostenible, donde aprenderás técnicas innovadoras para cultivar de manera responsable y respetuosa con el medio ambiente. ¡No te lo pierdas!</p>
                            <a href="/blog/taller-agricultura-sostenible" className="read-more">Leer más</a>
                        </div>
                    </div>

                    {/* Enlace a más posts */}
                    <div className="view-more-posts">
                        <a href="/blog" className="cta-button">Ver más artículos</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;