import {
  aboutHeroImage,
  aboutFamilyImage,
  aboutTestimonialAvatar,
  aboutDestinations,
  experienceFeatures,
  gridImages,
  brands,
  checklist,
  packages,
  packageFeatures,
  avatars,
} from '../../data/aboutData'
import TravelImageStrip from '../../components/Shared/TravelImageStrip/TravelImageStrip'
import QuickLinks from '../../components/Shared/QuickLinks/QuickLinks'
import './About.css'

function AboutHero() {
  return (
    <section className="about-hero" style={{ backgroundImage: `url(${aboutHeroImage})` }}>
      <div className="about-hero-overlay" />
      <div className="container position-relative text-center">
        <div className="about-hero-badge">
          <i className="bi bi-airplane-engines" aria-hidden="true" />
          <span>DISCOVER OUR STORY</span>
          <i className="bi bi-airplane-engines" aria-hidden="true" />
        </div>
        <h1 className="about-hero-title">About Traviora</h1>
        <p className="about-hero-subtitle">
          Crafting unforgettable journeys, bespoke adventures, and seamless travel memories across the globe.
        </p>
        <div className="about-breadcrumb">
          <a href="/">Home</a>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span>About Us</span>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="about-label">
      <i className="bi bi-airplane-engines" aria-hidden="true" />
      <span>{children}</span>
      <i className="bi bi-airplane-engines" aria-hidden="true" />
    </div>
  )
}

function AboutTopDestinations() {
  return (
    <section className="about-destinations">
      <div className="container">
        <div className="about-section-heading text-center">
          <SectionLabel>GET TO KNOW US</SectionLabel>
          <h2>Top Destinations</h2>
          <p className="about-section-desc">
            Explore our handpicked collection of world-renowned destinations, offering scenic wonders and luxury comforts.
          </p>
        </div>
        <div className="row g-4">
          {aboutDestinations.map((destination) => (
            <div className="col-lg-4 col-md-6" key={destination.id}>
              <article className="about-destination-card">
                <div className="about-destination-img">
                  <img src={destination.image} alt={destination.title} />
                  <span className="about-card-price">{destination.price}</span>
                  <div className="about-destination-hover">
                    <button type="button" aria-label="Explore destination">
                      <i className="bi bi-arrow-up-right" />
                    </button>
                  </div>
                </div>
                <div className="about-destination-info">
                  <div>
                    <h3>{destination.title}</h3>
                    <p>
                      <i className="bi bi-geo-alt-fill" aria-hidden="true" /> {destination.days}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BestTravelExperience() {
  return (
    <section className="best-experience">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <SectionLabel>GET TO KNOW US</SectionLabel>
            <h2>Get the Best Travel Experience</h2>
            <p className="experience-lead">
              We help travelers enjoy smooth planning, comfortable five-star stays, and memorable journeys backed by dedicated 24/7 travel support.
            </p>

            <div className="experience-feature-wrap">
              {experienceFeatures.map((feature) => (
                <div className="experience-feature" key={feature.title}>
                  <span>
                    <i className={`bi ${feature.icon}`} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{feature.title}</h3>
                    <p>Experience seamless planning, certified tour leaders, and tailored itineraries for every traveler.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta-row">
              <a href="/tour" className="about-primary-btn">
                <span>FIND OUT MORE</span>
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </a>
              <div className="about-avatar-stack">
                {avatars.map((avatar, idx) => (
                  <img src={avatar} alt={`Traviora customer ${idx + 1}`} key={idx} />
                ))}
                <span>5.2k+</span>
                <strong className="avatar-label">Happy Travelers</strong>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="experience-grid">
              {gridImages.map((item) => (
                <div className="experience-grid-card" key={item.id}>
                  <img src={item.image} alt={`${item.label} destination`} />
                  <span className="grid-card-badge">
                    <i className="bi bi-geo-alt-fill" aria-hidden="true" /> {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FamilyTravelSection() {
  return (
    <section className="family-travel">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-4">
            <SectionLabel>GET TO KNOW US</SectionLabel>
            <h2>Travel Place for You &amp; Your Family</h2>
            <p className="family-lead">
              Create lifetime memories with customized vacations that delight every family member from young to old.
            </p>
            <div className="family-customers">
              <div className="about-avatar-stack">
                {avatars.map((avatar, idx) => (
                  <img src={avatar} alt={`Happy customer ${idx + 1}`} key={idx} />
                ))}
                <span>50+</span>
              </div>
              <strong>500K+ Happy Customers</strong>
            </div>
          </div>

          <div className="col-lg-4 text-center">
            <div className="family-oval">
              <img src={aboutFamilyImage} alt="Family travel destination" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="family-copy">
              <h3>Waiting for adventures? Don't miss them</h3>
              <p>Discover carefully planned travel packages designed for comfort, safety, and unforgettable family experiences.</p>
              <div className="experience-badge">
                <i className="bi bi-award-fill" aria-hidden="true" />
                <span>10+ Years of Excellence</span>
              </div>
              <ul className="family-checklist">
                {checklist.map((item) => (
                  <li key={item}>
                    <i className="bi bi-check-circle-fill" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustedBrands() {
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands]

  return (
    <section className="trusted-brands">
      <div className="container text-center">
        <span className="trusted-subhead">PROUD PARTNERS</span>
        <h2>Trusted by Global &amp; Local Travel Partners</h2>
      </div>
      <div className="brand-marquee-container">
        <div className="brand-marquee-track">
          {marqueeBrands.map((brand, index) => (
            <span
              className={`brand-item brand-${(index % brands.length) + 1}`}
              key={`${brand}-${index}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutTestimonials() {
  return (
    <section className="about-testimonials">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <SectionLabel>CLIENT TESTIMONIALS</SectionLabel>
            <h2>What People Say About Us</h2>
            <p className="testimonials-lead">
              Our travelers trust Traviora for smooth booking, attentive 24/7 guides, and unforgettable holiday adventures.
            </p>
            <a href="/tour" className="about-primary-btn">
              <span>FIND OUT MORE</span>
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </a>
          </div>

          <div className="col-lg-7">
            <div className="purple-testimonial-wrap">
              <div className="purple-testimonial">
                <div className="testimonial-quote-badge">
                  <i className="bi bi-quote" aria-hidden="true" />
                </div>
                <p>
                  "Traviora made our family trip extraordinarily simple, comfortable, and memorable. Their team handled every detail and helped us enjoy a completely stress-free holiday."
                </p>
                <div className="testimonial-card-footer">
                  <div className="testimonial-user">
                    <img src={aboutTestimonialAvatar} alt="Ishin Korma" />
                    <div className="name-pill">
                      <strong>Ishin Korma</strong>
                      <span>Verified Traveler</span>
                    </div>
                  </div>
                  <div className="about-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <i className="bi bi-star-fill" key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HolidayPackages() {
  return (
    <section className="holiday-packages">
      <div className="container">
        <div className="about-section-heading text-center">
          <SectionLabel>CURATED PACKAGES</SectionLabel>
          <h2>Best Holiday Packages</h2>
          <p className="about-section-desc">
            Choose from all-inclusive, flexible travel bundles tailored to suit your schedule and budget.
          </p>
        </div>
        <div className="row g-4">
          {packages.map((pkg) => (
            <div className="col-lg-4 col-md-6" key={pkg.id}>
              <article className="package-card">
                <div className="package-price-wrap">
                  <span className="package-price">{pkg.price}</span>
                  <span className="package-duration">/ all-inclusive</span>
                </div>
                <div className="package-images">
                  {pkg.images.map((image, i) => (
                    <img src={image} alt={pkg.title} key={i} />
                  ))}
                </div>
                <h3>{pkg.title}</h3>
                <p>Enjoy expertly organized itinerary routes, five-star accommodations, and guided excursions.</p>
                <hr />
                <ul className="package-checklist">
                  {packageFeatures.map((feature) => (
                    <li key={feature}>
                      <i className="bi bi-check-circle-fill" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="/tour" className="package-btn">
                  <span>Get Started</span>
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutTopDestinations />
      <BestTravelExperience />
      <FamilyTravelSection />
      <TrustedBrands />
      <AboutTestimonials />
      <HolidayPackages />
      <TravelImageStrip />
      <QuickLinks />
    </div>
  )
}

export default About
