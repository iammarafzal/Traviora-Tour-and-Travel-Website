import Hero from '../components/Hero/Hero'
import Destinations from '../components/Destinations/Destinations'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import NatureGallery from '../components/NatureGallery/NatureGallery'
import WorkingSteps from '../components/WorkingSteps/WorkingSteps'
import SpecialOffer from '../components/SpecialOffer/SpecialOffer'
import Testimonials from '../components/Testimonials/Testimonials'
import BookingCTA from '../components/BookingCTA/BookingCTA'
import BlogIntro from '../components/BlogIntro/BlogIntro'
import BlogNews from '../components/BlogNews/BlogNews'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <AboutCompany />
      <NatureGallery />
      <WorkingSteps />
      <SpecialOffer />
      <Testimonials />
      <BookingCTA />
      <BlogIntro />
      <BlogNews />
      <Footer />
    </>
  )
}

export default Home
