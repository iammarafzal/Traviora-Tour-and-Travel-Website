import footerImage from '../../assets/footer.webp'
import './Footer.css'

const footerColumns = [
  {
    title: 'Company',
    links: ['About', 'Services', 'Login', 'Flights'],
  },
  {
    title: 'Support',
    links: ['Booking', 'FAQ', 'Hotels', 'Teams'],
  },
  {
    title: 'Legal',
    links: ['Terms & Use', 'Sitemap', 'Contact Us'],
  },
]

const socialLinks = [
  { icon: 'bi-facebook', label: 'Facebook' },
  { icon: 'bi-youtube', label: 'YouTube' },
  { icon: 'bi-instagram', label: 'Instagram' },
  { icon: 'bi-linkedin', label: 'LinkedIn' },
]

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <h2>
                Subscribe for latest update
                <span>about Travelling</span>
              </h2>
            </div>

            <div className="col-lg-7">
              <form className="footer-subscribe" aria-label="Subscribe to Traviora newsletter">
                <input type="email" placeholder="Enter your Email" aria-label="Email address" />
                <button type="submit">
                  <span>SUBSCRIBE</span>
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container-fluid px-0">
          <div className="row g-0">
            <div className="col-xl-8">
              <div className="footer-content">
                <div className="row g-4">
                  <div className="col-lg-5">
                    <a className="footer-logo" href="#home">Traviora</a>
                    <p className="footer-description">
                      Go on a journey of unforgettable adventure with Traviora, where every detail is planned with care, helping you explore the world and create cherished memories.
                    </p>

                    <div className="footer-socials">
                      {socialLinks.map((social) => (
                        <a href="#home" aria-label={social.label} key={social.label}>
                          <i className={`bi ${social.icon}`} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {footerColumns.map((column) => (
                    <div className="col-6 col-lg" key={column.title}>
                      <h3>{column.title}</h3>
                      <ul>
                        {column.links.map((link) => (
                          <li key={link}>
                            <a href="#home">{link}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="footer-image">
                <img src={footerImage} alt="Luxury travel destination by Traviora" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Traviora - All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
