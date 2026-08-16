import blogHero from '../assets/section-banner.webp'
import blog1 from '../assets/blog1.webp'
import blog2 from '../assets/blog2.webp'
import blog3 from '../assets/blog3.webp'
import blog4 from '../assets/blog4.webp'
import blog5 from '../assets/blog5.webp'
import author1 from '../assets/tst-1.webp'
import author2 from '../assets/tst-2.webp'
import author3 from '../assets/tst-3.webp'
import author4 from '../assets/tst-4.webp'

export const blogHeroImage = blogHero

export const blogCategories = [
  'All Stories',
  'Destination Guides',
  'Travel Tips',
  'Adventure',
  'Culture & Food',
]

export const allBlogArticles = [
  {
    id: 1,
    title: 'Top 10 Hidden Gem Islands to Visit in the Mediterranean',
    category: 'Destination Guides',
    author: {
      name: 'Emma Watson',
      avatar: author1,
      role: 'Senior Travel Writer',
    },
    date: 'August 12, 2026',
    readTime: '6 min read',
    image: blog5,
    isFeatured: true,
    excerpt:
      'Escape the tourist crowds with our insider guide to secluded coastlines, authentic fishing villages, and crystal-clear coves across Southern Europe.',
    tags: ['Islands', 'Beaches', 'Europe', 'Summer'],
  },
  {
    id: 2,
    title: 'Smart Packing Strategies for Multi-Country Backpacking Trips',
    category: 'Travel Tips',
    author: {
      name: 'Alex Rivera',
      avatar: author2,
      role: 'Gear & Prep Specialist',
    },
    date: 'August 08, 2026',
    readTime: '4 min read',
    image: blog1,
    isFeatured: false,
    excerpt:
      'Master the art of ultra-lightweight travel with our checklist of essential multi-purpose gear, weather adaptations, and airline carry-on hacks.',
    tags: ['Packing', 'Backpacking', 'Tips'],
  },
  {
    id: 3,
    title: 'A Culinary Journey Through Asia’s Most Vibrant Street Markets',
    category: 'Culture & Food',
    author: {
      name: 'Sophia Chen',
      avatar: author3,
      role: 'Culinary Explorer',
    },
    date: 'July 29, 2026',
    readTime: '8 min read',
    image: blog2,
    isFeatured: false,
    excerpt:
      'From Bangkok night bazaars to Tokyo alleyways, discover mouth-watering local delicacies and unforgettable culinary traditions.',
    tags: ['Food', 'Asia', 'Culture', 'Street Food'],
  },
  {
    id: 4,
    title: 'How to Plan the Ultimate 7-Day Swiss Alps Hiking Adventure',
    category: 'Adventure',
    author: {
      name: 'Marcus Vance',
      avatar: author4,
      role: 'Adventure Guide',
    },
    date: 'July 22, 2026',
    readTime: '7 min read',
    image: blog3,
    isFeatured: false,
    excerpt:
      'Step-by-step route planning, mountain hut booking tips, and breathtaking viewpoints for hiking the most iconic trails in Switzerland.',
    tags: ['Hiking', 'Mountains', 'Adventure', 'Switzerland'],
  },
  {
    id: 5,
    title: 'Sustainable Tourism: 7 Ways to Minimize Your Footprint on the Road',
    category: 'Travel Tips',
    author: {
      name: 'Emma Watson',
      avatar: author1,
      role: 'Senior Travel Writer',
    },
    date: 'July 15, 2026',
    readTime: '5 min read',
    image: blog4,
    isFeatured: false,
    excerpt:
      'Practical habits and eco-friendly choices to protect natural habitats and support local communities while exploring the world.',
    tags: ['Eco Travel', 'Sustainability', 'Tips'],
  },
  {
    id: 6,
    title: 'The Ultimate Guide to Exploring Romantic Historic Cities in Europe',
    category: 'Destination Guides',
    author: {
      name: 'Sophia Chen',
      avatar: author3,
      role: 'Culinary Explorer',
    },
    date: 'July 04, 2026',
    readTime: '6 min read',
    image: blog1,
    isFeatured: false,
    excerpt:
      'Wander cobbled streets, majestic castles, and scenic waterways in Prague, Florence, Bruges, and Vienna with our curated itinerary.',
    tags: ['Europe', 'History', 'Romantic', 'Architecture'],
  },
]

export const popularTags = [
  'Europe',
  'Beaches',
  'Adventure',
  'Hiking',
  'Culinary',
  'Luxury',
  'Budget Travel',
  'Solo Trips',
  'Family Tours',
]
