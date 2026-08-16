import natureGallery from '../../data/natureGallery'
import './NatureGallery.css'

const NatureGallery = () => {
  return (
    <section className="nature-gallery" id="nature-gallery">
      <div className="container">
        <div className="nature-gallery-header text-center mx-auto">
          <div className="nature-gallery-subtitle">
            <i className="bi bi-airplane-engines" aria-hidden="true" />
            <span>TRAVEL DESTINATION</span>
            <i className="bi bi-airplane-engines" aria-hidden="true" />
          </div>
          <h2>Discover the Touch of Nature</h2>
          <p>Our clients love our seamless travel experiences, breathtaking destinations, and memorable adventures around the world.</p>
        </div>

        <div className="nature-gallery-grid">
          {natureGallery.map((item) => (
            <article className="nature-gallery-card" key={item.id}>
              <img src={item.image} alt={`${item.location} nature destination`} />

              <div className="nature-gallery-overlay">
                <span className="nature-overlay-badge">
                  <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                  {item.location}
                </span>
                <h3>{item.title}</h3>
                <span className="nature-overlay-btn" aria-hidden="true">
                  <i className="bi bi-arrow-up-right" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="nature-gallery-cta-wrap">
          <p className="nature-gallery-cta">
            <span>Want to see our top destinations?</span>
            <a href="#destinations" className="cta-link-btn">
              <span>View All Destinations</span>
              <i className="bi bi-arrow-right-short" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default NatureGallery
