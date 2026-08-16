import aboutVideo from '../../assets/about-image-2.webp'
import traveler from '../../assets/about-image-1.webp'
import plane from '../../assets/plane.svg'
import avatarOne from '../../assets/tst-1.webp'
import avatarTwo from '../../assets/tst-2.webp'
import avatarThree from '../../assets/tst-3.webp'
import './AboutCompany.css'

const features = [
  'Perfect Travel Planning',
  'Certified Tour Guides',
  'Save Your Budget',
  'Free Consultations',
]

const clientAvatars = [avatarOne, avatarTwo, avatarThree]

const AboutCompany = () => {
  return (
    <section className="about-company" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-company-content">
              <div className="about-company-subtitle">
                <i className="bi bi-airplane-engines" aria-hidden="true" />
                <span>ABOUT OUR COMPANY</span>
                <i className="bi bi-airplane-engines" aria-hidden="true" />
              </div>

              <h2>Experience the World with Our Company</h2>
              <p className="about-company-text">
                Embark on a transformative journey with Traviora as we help travelers create unforgettable memories through expertly planned tours, trusted guidance, and comfortable travel experiences.
              </p>

              <div className="about-video-card">
                <img src={aboutVideo} alt="Traviora travelers exploring a scenic destination" />
                <button className="about-play-btn" type="button" aria-label="Play Traviora travel story">
                  <i className="bi bi-play-fill" aria-hidden="true" />
                </button>
              </div>

              <div className="about-feature-grid">
                {features.map((feature) => (
                  <div className="about-feature-item" key={feature}>
                    <i className="bi bi-check-circle-fill" aria-hidden="true" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="about-action-row">
                <button className="about-learn-btn" type="button">LEARN MORE</button>

                <div className="about-clients">
                  <div className="about-avatars" aria-label="Satisfied client avatars">
                    {clientAvatars.map((avatar, index) => (
                      <img src={avatar} alt={`Satisfied Traviora client ${index + 1}`} key={avatar} />
                    ))}
                  </div>
                  <strong>5.2k+ Satisfied Clients</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-visual">
              <div className="about-travel-path" aria-hidden="true" />
              <img className="about-plane" src={plane} alt="" aria-hidden="true" />
              <div className="about-image-shape" />
              <img className="about-traveler-img" src={traveler} alt="Traveler ready for a Traviora journey" />

              <div className="about-support-card">
                <span>
                  <i className="bi bi-headset" aria-hidden="true" />
                </span>
                <div>
                  <small>24/7</small>
                  <strong>Guide Support</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
