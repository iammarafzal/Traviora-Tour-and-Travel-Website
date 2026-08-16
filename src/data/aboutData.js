import heroImage from '../assets/section-banner.webp'
import destOne from '../assets/price-1.webp'
import destTwo from '../assets/price-2.webp'
import destThree from '../assets/price-3.webp'
import gridOne from '../assets/Discover-image-1.webp'
import gridTwo from '../assets/Discover-image-2.webp'
import gridThree from '../assets/Discover-image-3.webp'
import gridFour from '../assets/Discover-image-4.webp'
import familyImage from '../assets/gallery-image5.webp'
import avatarOne from '../assets/tst-1.webp'
import avatarTwo from '../assets/tst-2.webp'
import avatarThree from '../assets/tst-3.webp'
import testimonialAvatar from '../assets/tst-4.webp'
import packageOne from '../assets/blog1.webp'
import packageTwo from '../assets/blog2.webp'
import packageThree from '../assets/blog3.webp'

export const aboutHeroImage = heroImage
export const aboutFamilyImage = familyImage
export const aboutTestimonialAvatar = testimonialAvatar

export const aboutDestinations = [
  { id: 1, title: 'Rome, Italy', price: '$999', days: '4 Days', image: destOne },
  { id: 2, title: 'Paris, France', price: '$1299', days: '8 Days', image: destTwo },
  { id: 3, title: 'New York, USA', price: '$1199', days: '7 Days', image: destThree },
]

export const experienceFeatures = [
  { icon: 'bi-buildings-fill', title: 'Best of Hotel' },
  { icon: 'bi-tags-fill', title: 'Friendly Price' },
]

export const gridImages = [
  { id: 1, label: 'America', image: gridOne },
  { id: 2, label: 'Africa', image: gridTwo },
  { id: 3, label: 'Asia', image: gridThree },
  { id: 4, label: 'Europe', image: gridFour },
]

export const brands = ['Charter', 'Pontoon', 'Lineup', 'Zwitserleven', 'BoomTown!']
export const checklist = ['Expert Travel Planning', 'Safe Family Tours', '24/7 Support']

export const packages = [
  { id: 1, price: '$99/month', title: 'Turkey Tour', images: [packageOne, packageTwo] },
  { id: 2, price: '$79/month', title: 'Full Travel', images: [packageTwo, packageThree] },
  { id: 3, price: '$49/month', title: 'World Tour', images: [packageThree, packageOne] },
]

export const packageFeatures = ['Hotel Booking', 'Guided Tours', 'Airport Pickup', 'Travel Support']
export const avatars = [avatarOne, avatarTwo, avatarThree]
