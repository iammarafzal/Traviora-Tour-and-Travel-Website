import offerImage from '../../assets/offer-bg-2.webp'
import travelerCutout from '../../assets/place-image.webp'
import plane from '../../assets/plane.svg'
import './SpecialOffer.css'

const SpecialOffer = () => {
  return (
    <section className="special-offer" id="special-offer">
      <div className="container">
        <div className="special-offer-banner">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6">
              <div className="special-offer-content">
                <img className="special-offer-plane plane-one" src={plane} alt="" aria-hidden="true" />
                <img className="special-offer-plane plane-two" src={plane} alt="" aria-hidden="true" />

                <div className="special-offer-subtitle">35% OFFER</div>
                <h2>Get Special Offer</h2>
                <p>
                  Embark on an unforgettable journey with Traviora and enjoy exclusive seasonal tour discounts designed to make your dream vacation more affordable.
                </p>

                <div className="special-offer-discount" aria-label="40 percent off">
                  <span className="discount-number">40</span>
                  <span className="discount-percent">%</span>
                  <span className="discount-off">OFF</span>
                </div>

                <button className="special-offer-btn" type="button">
                  <span>LEARN MORE</span>
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="special-offer-image">
                <img src={offerImage} alt="Beach vacation special offer by Traviora" />
              </div>
            </div>
          </div>

          <div className="special-offer-cutout-card">
            <img src={travelerCutout} alt="Featured travel destination" />
            <span className="cutout-badge">
              <i className="bi bi-geo-alt-fill" aria-hidden="true" /> Top Pick
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
