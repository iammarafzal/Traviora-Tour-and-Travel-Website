import heroImage from '../assets/section-banner.webp'
import canadaImage from '../assets/price-3.webp'
import franceImage from '../assets/price-2.webp'
import londonImage from '../assets/blog2.webp'
import emiratesImage from '../assets/price-1.webp'
import bridgeImage from '../assets/blog3.webp'
import niagaraImage from '../assets/Discover-image-3.webp'

export const tourHeroImage = heroImage

export const filterGroups = [
  {
    key: 'destination',
    title: 'Destination',
    field: 'category',
    options: [
      { label: 'Canada', count: 2 },
      { label: 'Emirates', count: 2 },
      { label: 'Europe', count: 1 },
      { label: 'France', count: 2 },
    ],
  },
  {
    key: 'activities',
    title: 'Activities',
    field: 'activity',
    options: [
      { label: 'Boating', count: 7 },
      { label: 'City Tour', count: 8 },
      { label: 'Kayaking', count: 7 },
      { label: 'Niagara Falls', count: 6 },
    ],
  },
  {
    key: 'tripTypes',
    title: 'Trip Types',
    field: 'tripType',
    options: [
      { label: 'Luxury', count: 11 },
      { label: 'Premium', count: 10 },
      { label: 'Standard', count: 1 },
    ],
  },
]

export const tourPackages = [
  {
    id: 1,
    title: 'Canada, Gananoque Islands',
    location: 'Canada',
    category: 'Canada',
    activity: 'Boating',
    tripType: 'Luxury',
    image: canadaImage,
    days: '7 Days',
    price: '$1,299',
    description: 'Sail through peaceful island channels, forest-lined shores, and boutique waterfront escapes.',
  },
  {
    id: 2,
    title: 'France Eiffel Tower',
    location: 'France',
    category: 'France',
    activity: 'City Tour',
    tripType: 'Premium',
    image: franceImage,
    days: '7 Days',
    price: '$1,500',
    description: 'Enjoy Paris landmarks, charming cafes, curated museum moments, and romantic evening views.',
  },
  {
    id: 3,
    title: 'London City Experience',
    location: 'Europe',
    category: 'Europe',
    activity: 'City Tour',
    tripType: 'Standard',
    image: londonImage,
    days: '7 Days',
    price: '$1,199',
    description: 'Discover royal streets, riverside icons, historic markets, and polished city stays.',
  },
  {
    id: 4,
    title: 'United Arab Emirates Desert',
    location: 'Emirates',
    category: 'Emirates',
    activity: 'Boating',
    tripType: 'Premium',
    image: emiratesImage,
    days: '4 Days',
    price: '$999',
    description: 'Golden dunes, private desert camps, refined dinners, and warm Arabian hospitality.',
  },
  {
    id: 5,
    title: 'Tower Bridge Night Tour',
    location: 'Europe',
    category: 'Europe',
    activity: 'City Tour',
    tripType: 'Luxury',
    image: bridgeImage,
    days: '6 Days',
    price: '$1,350',
    description: 'Experience illuminated cityscapes, premium hotel stays, and guided night walks.',
  },
  {
    id: 6,
    title: 'Niagara Falls Adventure',
    location: 'Canada',
    category: 'Canada',
    activity: 'Niagara Falls',
    tripType: 'Luxury',
    image: niagaraImage,
    days: '5 Days',
    price: '$1,250',
    description: 'Feel the mist, cruise near the falls, and relax in scenic lodges with expert guides.',
  },
]
