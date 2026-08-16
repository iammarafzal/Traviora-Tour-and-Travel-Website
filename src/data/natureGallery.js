import eiffel from '../assets/gallery-image1.webp'
import cappadocia from '../assets/gallery-image2.webp'
import windsurf from '../assets/gallery-image3.webp'
import chefchaouen from '../assets/gallery-image4.webp'

const natureGallery = [
  {
    id: 1,
    image: eiffel,
    location: 'Paris, France',
    title: 'Iconic Architecture & Lush Riverside Vistas',
    isActive: false,
  },
  {
    id: 2,
    image: cappadocia,
    location: 'Cappadocia, Turkey',
    title: 'Ancient Cave Dwellings & Historic Landscapes',
    isActive: true,
  },
  {
    id: 3,
    image: windsurf,
    location: 'Red Sea, Egypt',
    title: 'Thrilling Ocean Waves & Coastal Watersports',
    isActive: false,
  },
  {
    id: 4,
    image: chefchaouen,
    location: 'Chefchaouen, Morocco',
    title: 'Picturesque Blue Streets & Mountain Paths',
    isActive: false,
  },
]

export default natureGallery
