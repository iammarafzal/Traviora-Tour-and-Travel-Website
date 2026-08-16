import { useState } from 'react'
import contactHeroImg from '../../assets/contact-bg.webp'
import TravelImageStrip from '../../components/Shared/TravelImageStrip/TravelImageStrip'
import QuickLinks from '../../components/Shared/QuickLinks/QuickLinks'
import './Contact.css'

function ContactHero() {
  return (
    <section className="contact-hero" style={{ backgroundImage: `url(${contactHeroImg})` }}>
      <div className="contact-hero-overlay" />
      <div className="container position-relative text-center">
        <div className="contact-hero-badge">
          <i className="bi bi-airplane-engines" aria-hidden="true" />
          <span>GET IN TOUCH WITH US</span>
          <i className="bi bi-airplane-engines" aria-hidden="true" />
        </div>
        <h1 className="contact-hero-title">Contact Us</h1>
        <p className="contact-hero-subtitle">
          Have questions about destinations, custom itineraries, or reservations? Our team of dedicated travel specialists is available 24/7.
        </p>
        <div className="contact-breadcrumb">
          <a href="/">Home</a>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span>Contact Us</span>
        </div>
      </div>
    </section>
  )
}

function ContactCards() {
  const contactInfo = [
    {
      icon: 'bi-geo-alt-fill',
      title: 'Our Headquarters',
      primary: '742 Evergreen Terrace, Suite 500',
      secondary: 'New York, NY 10001, USA',
      actionText: 'View on Google Maps',
      actionUrl: '#map',
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Call Us Anytime',
      primary: '+1 (800) 456-7890',
      secondary: '+1 (234) 567-8900 (Toll Free)',
      actionText: 'Call Now',
      actionUrl: 'tel:+18004567890',
    },
    {
      icon: 'bi-envelope-paper-fill',
      title: 'Email Support',
      primary: 'support@traviora.com',
      secondary: 'bookings@traviora.com',
      actionText: 'Send Email',
      actionUrl: 'mailto:support@traviora.com',
    },
    {
      icon: 'bi-clock-fill',
      title: 'Working Hours',
      primary: 'Mon – Fri: 8:00 AM – 8:00 PM',
      secondary: 'Sat – Sun: 9:00 AM – 5:00 PM',
      actionText: '24/7 Live Chat Active',
      actionUrl: '#contact-form',
    },
  ]

  return (
    <section className="contact-cards-section">
      <div className="container">
        <div className="row g-4">
          {contactInfo.map((card, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <div className="contact-info-card">
                <div className="contact-card-icon">
                  <i className={`bi ${card.icon}`} aria-hidden="true" />
                </div>
                <h3>{card.title}</h3>
                <p className="contact-primary-text">{card.primary}</p>
                <p className="contact-secondary-text">{card.secondary}</p>
                <a href={card.actionUrl} className="contact-card-action">
                  <span>{card.actionText}</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactMain() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: 'General Inquiry',
    guests: '2 Guests',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        destination: 'General Inquiry',
        guests: '2 Guests',
        date: '',
        message: '',
      })
    }, 1000)
  }

  const faqs = [
    {
      q: 'How do I book a tour package with Traviora?',
      a: 'You can explore our curated tours on the Tour page, choose your preferred dates, and submit a booking request. Our travel advisor will reach out within 2 hours to confirm your personalized itinerary and accommodations.',
    },
    {
      q: 'What is your cancellation and refund policy?',
      a: 'We offer flexible booking options with 100% full refunds on cancellations made up to 14 days before your departure date. For custom luxury itineraries, partial credits apply.',
    },
    {
      q: 'Can you create custom itineraries for private groups or families?',
      a: 'Yes, absolutely! We specialize in tailored travel experiences. Simply let us know your dream destinations, dates, and group preferences in the message box, and we will craft a bespoke journey for you.',
    },
    {
      q: 'Are airport transfers and tour guides included?',
      a: 'All our premium and luxury holiday packages include private airport transfers, certified multilingual tour guides, and 24/7 on-trip concierge assistance.',
    },
  ]

  return (
    <section className="contact-main-section" id="contact-form">
      <div className="container">
        <div className="row g-5">
          {/* Contact Form Column */}
          <div className="col-lg-7">
            <div className="contact-form-wrap">
              <div className="form-header">
                <span className="form-label-pill">SEND US A MESSAGE</span>
                <h2>Let's Plan Your Next Dream Holiday</h2>
                <p>
                  Fill out the form below with your travel plans or questions, and our tour specialists will provide a custom quote within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="contact-success-banner">
                  <div className="success-icon">
                    <i className="bi bi-check-circle-fill" />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out to Traviora. One of our travel concierge experts will review your request and get back to you shortly.
                  </p>
                  <button
                    type="button"
                    className="contact-new-msg-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="traviora-contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="destination">Interested Destination</label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Europe & Mediterranean">Europe &amp; Mediterranean</option>
                        <option value="Swiss Alps Hiking">Swiss Alps Hiking</option>
                        <option value="Canada & Niagara">Canada &amp; Niagara</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Asia Street & Culture">Asia Street &amp; Culture</option>
                        <option value="Custom Family Tour">Custom Family Tour</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="guests">Number of Travelers</label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        <option value="Solo Traveler">Solo Traveler (1 Person)</option>
                        <option value="2 Guests">Couple (2 Guests)</option>
                        <option value="Small Group (3-5)">Small Group (3-5 Guests)</option>
                        <option value="Large Group (6+)">Large Group (6+ Guests)</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="message">Your Travel Vision / Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        placeholder="Tell us about your desired travel dates, preferences, special celebrations, or questions..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="contact-submit-btn">
                        <span>Send Message</span>
                        <i className="bi bi-airplane-engines" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: FAQ & Office Hours Card */}
          <div className="col-lg-5">
            <div className="contact-side-column">
              {/* FAQ Accordion Card */}
              <div className="contact-faq-card">
                <div className="faq-card-header">
                  <span className="faq-badge">
                    <i className="bi bi-question-circle-fill me-1" /> FAQ
                  </span>
                  <h3>Frequently Asked Questions</h3>
                </div>

                <div className="faq-accordion">
                  {faqs.map((faq, index) => (
                    <div
                      className={`faq-item ${activeFaq === index ? 'is-expanded' : ''}`}
                      key={index}
                    >
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                        aria-expanded={activeFaq === index}
                      >
                        <span>{faq.q}</span>
                        <i
                          className={`bi bi-chevron-${activeFaq === index ? 'up' : 'down'}`}
                          aria-hidden="true"
                        />
                      </button>
                      {activeFaq === index && (
                        <div className="faq-answer">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Assistance Card */}
              <div className="contact-concierge-card">
                <div className="concierge-badge">
                  <i className="bi bi-headset" />
                </div>
                <h3>Need Immediate Assistance?</h3>
                <p>Our 24/7 dedicated travel concierge is ready to assist with urgent reservations and live updates.</p>
                <div className="concierge-cta-row">
                  <a href="tel:+18004567890" className="concierge-call-btn">
                    <i className="bi bi-telephone-fill me-2" />
                    +1 (800) 456-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactCards />
      <ContactMain />
      <TravelImageStrip />
      <QuickLinks />
    </div>
  )
}

export default Contact
