import '../Testimonials.css';
import img1 from '../assets/images/dicaprio.webp';
import img2 from '../assets/images/messi.jpg';
import img3 from '../assets/images/selenagomez.webp';

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: img1,
      name: 'Leonardo DiCaprio',
      role: 'Environmental Advocate',
      content: 'Their sustainable practices are revolutionizing modern agriculture!',
      rating: 5,
    },
    {
      image: img2,
      name: 'Lionel Messi',
      role: 'Sports Nutrition Partner',
      content: 'The quality of their organic produce keeps our athletes at peak performance.',
      rating: 4,
    },
    {
      image: img3,
      name: 'Selena Gomez',
      role: 'Wellness Ambassador',
      content: 'Their farm-to-table approach aligns perfectly with my health philosophy.',
      rating: 5,
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
        <h2 className="section-title">What Our Farmers Say</h2>
<p className="section-description">
Discover what our farming community has to say about their experiences with us
</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="card-header">
                <div className="quote-icon" aria-hidden="true">“</div>
                <div className="testimonial-image">
                  <img 
                    src={testimonial.image} 
                    alt={`Portrait of ${testimonial.name}`} 
                    loading="lazy"
                    className="avatar"
                  />
                </div>
              </div>
              <div className="card-body">
                <p className="testimonial-text">{testimonial.content}</p>
                <div className="user-info">
                  <h3 className="user-name">{testimonial.name}</h3>
                  <p className="user-role">{testimonial.role}</p>
                </div>
                <div className="rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span 
                      key={i} 
                      className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                    >★</span>
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

export default TestimonialsSection;