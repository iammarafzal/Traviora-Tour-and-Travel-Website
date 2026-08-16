import desert from '../assets/price-1.webp'
import london from '../assets/price-2.webp'
import canada from '../assets/price-3.webp'
import santorini from '../assets/price-4.webp'
import maldives from '../assets/price-5.webp'
import alps from '../assets/price-6.webp'

const destinations = [
  {
    id: 1,
    title: 'United Arab Emirates Desert',
    image: desert,
    price: '$890',
    days: '5 Days',
    description: 'Private desert safaris, golden dunes, luxury camps, and Arabian starlit evenings.',
    location: 'United Arab Emirates',
  },
  {
    id: 2,
    title: 'Tower Bridge London',
    image: london,
    price: '$760',
    days: '4 Days',
    description: 'Explore royal landmarks, riverside views, boutique stays, and iconic city culture.',
    location: 'United Kingdom',
  },
  {
    id: 3,
    title: 'Canada Gananoque Islands',
    image: canada,
    price: '$940',
    days: '6 Days',
    description: 'Sail through serene island channels, forest retreats, and scenic waterfront towns.',
    location: 'Canada',
  },
  {
    id: 4,
    title: 'Santorini Greece',
    image: santorini,
    price: '$1,120',
    days: '7 Days',
    description: 'Whitewashed villages, caldera sunsets, private terraces, and Aegean dining.',
    location: 'Greece',
  },
  {
    id: 5,
    title: 'Maldives Beach Resort',
    image: maldives,
    price: '$1,450',
    days: '6 Days',
    description: 'Overwater villas, turquoise lagoons, spa rituals, and reef-side adventures.',
    location: 'Maldives',
  },
  {
    id: 6,
    title: 'Swiss Alps Adventure',
    image: alps,
    price: '$1,280',
    days: '8 Days',
    description: 'Alpine rail journeys, glacier views, chalet comfort, and crisp mountain air.',
    location: 'Switzerland',
  },
]

export default destinations
