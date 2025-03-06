
import '../Testimonials.css'; // Asegúrate de crear este archivo CSS


const TestimonialsSection = () => {
  const testimonials = [
    {
      image: 'path/to/image1.jpg',
      name: 'John Doe',
      role: 'Farmer',
      content: 'This service has changed my farming experience for the better!',
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Jane Smith',
      role: 'Organic Farmer',
      content: 'I love the support and resources provided by this community.',
    },
    {
        image: 'path/to/image2.jpg',
        name: 'Jane Smith',
        role: 'Organic Farmer',
        content: 'I love the support and resources provided by this community.',
      }
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">What Our Farmers Say</h2>
        <p className="section-description">
          Discover what our farming community has to say about their experiences with us
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">&#8220;</div>
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.content}</p>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
                <div className="rating">
                  {[...Array(5)].map((_, starIndex) => (
                    <span className="star" key={starIndex}>★</span>
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