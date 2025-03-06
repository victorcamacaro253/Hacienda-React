import { useEffect, useRef, useState } from 'react';
import Thumbnail from './thumbnail';
import { Link } from 'react-router-dom';  // Importa el Link de React Router
import img1 from '../assets/images/img6.webp'
import img2 from '../assets/images/img7.webp'
import img3 from '../assets/images/img8.png'
import img4 from '../assets/images/img9.png'




const Carousel = () => {
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const carouselRef = useRef(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    // Example dynamic data (can be fetched from an API or defined elsewhere)
    const carouselItems = [
        {
            img: img1,
            thumbnail: img1,
            author: 'LUNDEV',
            topic: 'ANIMAL',
            description: 'Principales criadores de la Ganado Raza Carora'
        },
        {
            img: img2,
            thumbnail: img2,
            author: 'LUNDEV',
            topic: 'ANIMAL',
            description: 'Principales criadores de la Ganado Raza Carora'
        },
        {
          img: img3,
          title: 'Una vida entera dedicada a la ganadería y agricultura',
          author: 'LUNDEV',
          topic: 'ANIMAL',
          description: 'Conoce nuestra Historia',
          path: '/history' 
        },
        {
          img: img4,
          title: 'Producción de Queso',
          author: 'LUNDEV',
          topic: 'ANIMAL',
          description: 'En nuestra hacienda, nos enorgullecemos de ofrecer lo mejor en producción de leche...',
        },
        // Add more items as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const nextButton = nextRef.current;
        const prevButton = prevRef.current;
        const carousel = carouselRef.current;

        const showSlider = (type) => {
          //  const sliderItems = carousel.querySelectorAll('.carousel .list .item');
          //  const thumbnailItems = carousel.querySelectorAll('.carousel .thumbnail .item');

            if (type === 'next') {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
            } else {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
            }

            carousel.classList.add(type);
            setTimeout(() => {
                carousel.classList.remove(type);
            }, timeRunning);
        };

        nextButton.onclick = () => showSlider('next');
        prevButton.onclick = () => showSlider('prev');

        const autoNext = setInterval(() => {
            showSlider('next');
        }, timeAutoNext);

        return () => clearInterval(autoNext);
    }, [carouselItems.length]);

    return (
        <div className="carousel" ref={carouselRef}>
            <div className="list">
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className={`item ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={item.img} alt={`Slide ${index + 1}`} />
                        <div className="content">
                            <div className="author">{item.author}</div>
                            <div className="title">{item.title}</div>
                            <div className="topic">{item.topic}</div>
                            <div className="des">{item.description}</div>
                            <div className="buttons">
                            {item.path ? (
                                    <Link to={item.path}>
                                        <button>VER MAS</button>
                                    </Link>
                                ) : (
                                    <button>VER MAS</button>
                                )}
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           

            <Thumbnail items={carouselItems} currentIndex={currentIndex} />

            <div className="arrows">
                <button ref={prevRef} id="prev">&lt;</button>
                <button ref={nextRef} id="next">&gt;</button>
            </div>
            <div className="time"></div>
        </div>
    );
};

export default Carousel;
