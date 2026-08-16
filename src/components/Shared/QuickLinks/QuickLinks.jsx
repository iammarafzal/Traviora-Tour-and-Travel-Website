import { quickLinks, stripImages, socialLinks } from '../../../data/sharedData'
import './QuickLinks.css'

const QuickLinks = () => {
  return (
    <section className="shared-quick-links" aria-label="Quick links and contact info">
      <div className="container">
        <h2 className="quick-links-title">Quick Links:</h2>
        <div className="row g-4">
          {quickLinks.map((column, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <ul className="quick-list">
                {column.map((link) => (
                  <li key={link}>
                    <i className="bi bi-check-circle-fill" aria-hidden="true" />
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-lg-3 col-sm-6">
            <div className="quick-contact">
              <p>Phone: 666 888 0000</p>
              <p>Email: needhelp@gmail.com</p>
              <div className="quick-socials">
                {socialLinks.map((social) => (
                  <a href={social.href} aria-label={social.label} key={social.label}>
                    <i className={`bi ${social.icon}`} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="quick-gallery">
          {stripImages.map((image, index) => (
            <img src={image} alt={`Traviora gallery thumbnail ${index + 1}`} key={index} loading="lazy" />
          ))}
        </div>

        <p className="quick-copy">&copy; Copyright 2026 Traviora. All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default QuickLinks
