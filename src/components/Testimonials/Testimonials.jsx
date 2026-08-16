import testimonials from '../../data/testimonials'
import traveler from '../../assets/tst-image-1.webp'
import './Testimonials.css'

const Testimonials = () => {
  const testimonial = testimonials[0]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonial-path testimonial-path-left" aria-hidden="true" />
      <div className="testimonial-path testimonial-path-right" aria-hidden="true" />
      <i className="bi bi-compass testimonial-decor compass" aria-hidden="true" />
      <i className="bi bi-airplane-engines testimonial-decor plane" aria-hidden="true" />
      <i className="bi bi-geo-alt testimonial-decor pin" aria-hidden="true" />

      <div className="container position-relative">
        <div className="testimonials-header text-center mx-auto">
          <div className="testimonials-subtitle">
            <i className="bi bi-airplane-engines" aria-hidden="true" />
            <span>TESTIMONIALS</span>
            <i className="bi bi-airplane-engines" aria-hidden="true" />
          </div>
          <h2>What Our Clients Are Saying!</h2>
          <p>Our clients love Traviora for seamless planning, memorable journeys, and travel experiences that exceed expectations.</p>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="testimonial-image-wrap">
              <div className="testimonial-image-bg" />
              <img src={traveler} alt="Happy Traviora traveler sharing a testimonial" />
            </div>
          </div>

          <div className="col-lg-6">
            <article className="testimonial-content">
              <div className="testimonial-quote-icon">
                <i className="bi bi-quote" aria-hidden="true" />
              </div>

              <p className="testimonial-text">“{testimonial.text}”</p>

              <div className="testimonial-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <i className="bi bi-star-fill" aria-hidden="true" key={index} />
                ))}
              </div>

              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
