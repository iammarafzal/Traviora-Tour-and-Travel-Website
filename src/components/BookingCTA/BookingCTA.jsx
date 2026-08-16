import ctaBackground from '../../assets/section-banner.webp'
import './BookingCTA.css'

const BookingCTA = () => {
  return (
    <section
      className="booking-cta"
      style={{ backgroundImage: `url(${ctaBackground})` }}
      aria-label="Traviora booking platform call to action"
    >
      <div className="booking-cta-overlay" />
      <div className="container">
        <div className="booking-cta-content">
          <h2>
            Traviora Is a World Leading Online
            <span>Tour Booking Platform</span>
          </h2>

          <button className="booking-cta-btn" type="button">
            <i className="bi bi-arrow-right" aria-hidden="true" />
            <span>LEARN MORE</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default BookingCTA
