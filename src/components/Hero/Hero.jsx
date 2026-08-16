import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import slides from '../../data/slides'
import './Hero.css'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <section className="traviora-hero" id="home" aria-label="Traviora featured destinations">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        loop
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{
          clickable: true,
          el: '.traviora-hero-pagination',
        }}
        className="traviora-hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="traviora-hero-slide">
              <img src={slide.image} alt={`${slide.title} luxury travel destination`} />
              <div className="traviora-hero-overlay" />

              <div className="container h-100">
                <div className="traviora-hero-content">
                  <div className="traviora-hero-badge">
                    <i className="bi bi-compass" aria-hidden="true" />
                    <span>{slide.badge}</span>
                  </div>

                  <p className="traviora-hero-subtitle">
                    {slide.subtitle}
                  </p>

                  <h1 className="traviora-hero-title">
                    {slide.title}
                  </h1>

                  <p className="traviora-hero-desc">
                    {slide.description}
                  </p>

                  <Link to="/tour" className="traviora-hero-btn">
                    <span>{slide.buttonText}</span>
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="traviora-hero-pagination" />
      </Swiper>
    </section>
  )
}

export default Hero
