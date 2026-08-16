import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import destinations from '../../data/destinations'
import './Destinations.css'

const Destinations = () => {
  return (
    <section className="top-destinations" id="destinations">
      <div className="container">
        <div className="top-destinations-header text-center mx-auto">
          <div className="top-destinations-subtitle">
            <i className="bi bi-airplane-engines" aria-hidden="true" />
            <span>TRAVEL DESTINATION</span>
            <i className="bi bi-airplane-engines" aria-hidden="true" />
          </div>
          <h2>Top Destinations</h2>
          <p>Explore our top destinations voted by more than 100,000+ customers around the world.</p>
        </div>

        <div className="top-destinations-carousel">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            speed={850}
            spaceBetween={22}
            autoplay={{
              delay: 3800,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.destinations-prev',
              nextEl: '.destinations-next',
            }}
            pagination={{
              clickable: true,
              el: '.destinations-pagination',
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 22,
              },
            }}
            className="destinations-swiper"
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.id}>
                <article className="destination-card">
                  <div className="destination-image">
                    <img src={destination.image} alt={destination.title} loading="lazy" />
                    <span className="destination-price">{destination.price}</span>
                  </div>

                  <div className="destination-info">
                    <button className="destination-arrow" type="button" aria-label={`View ${destination.title}`}>
                      <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </button>
                    <span className="destination-location">
                      <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                      {destination.location}
                    </span>
                    <h3>{destination.title}</h3>
                    <p>{destination.description}</p>
                    <hr />
                    <div className="destination-days">
                      <i className="bi bi-send-fill" aria-hidden="true" />
                      <span>{destination.days}</span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="destinations-nav destinations-prev" type="button" aria-label="Previous destination">
            <i className="bi bi-chevron-left" aria-hidden="true" />
          </button>
          <button className="destinations-nav destinations-next" type="button" aria-label="Next destination">
            <i className="bi bi-chevron-right" aria-hidden="true" />
          </button>
          <div className="destinations-pagination" />
        </div>
      </div>
    </section>
  )
}

export default Destinations
