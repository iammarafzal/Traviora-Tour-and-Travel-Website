import { useState, useMemo } from 'react'
import {
  blogHeroImage,
  blogCategories,
  allBlogArticles,
  popularTags,
} from '../../data/blogPageData'
import TravelImageStrip from '../../components/Shared/TravelImageStrip/TravelImageStrip'
import QuickLinks from '../../components/Shared/QuickLinks/QuickLinks'
import './Blogs.css'

function BlogsHero() {
  return (
    <section className="blogs-hero" style={{ backgroundImage: `url(${blogHeroImage})` }}>
      <div className="blogs-hero-overlay" />
      <div className="container position-relative text-center">
        <div className="blogs-hero-badge">
          <i className="bi bi-airplane-engines" aria-hidden="true" />
          <span>STORIES &amp; TRAVEL GUIDES</span>
          <i className="bi bi-airplane-engines" aria-hidden="true" />
        </div>
        <h1 className="blogs-hero-title">Our Travel Blog</h1>
        <p className="blogs-hero-subtitle">
          Inspiring stories, destination guides, insider packing hacks, and authentic wanderlust moments from passionate globetrotters.
        </p>
        <div className="blogs-breadcrumb">
          <a href="/">Home</a>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span>Blog</span>
        </div>
      </div>
    </section>
  )
}

function BlogsContent() {
  const [activeCategory, setActiveCategory] = useState('All Stories')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState(null)
  const [subscribedEmail, setSubscribedEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const featuredArticle = allBlogArticles.find((art) => art.isFeatured) || allBlogArticles[0]

  const filteredArticles = useMemo(() => {
    return allBlogArticles.filter((article) => {
      const matchCategory =
        activeCategory === 'All Stories' || article.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      const matchSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      const matchTag = !selectedTag || article.tags.includes(selectedTag)

      return matchCategory && matchSearch && matchTag
    })
  }, [activeCategory, searchQuery, selectedTag])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (subscribedEmail.trim()) {
      setIsSubscribed(true)
      setSubscribedEmail('')
      setTimeout(() => setIsSubscribed(false), 4000)
    }
  }

  return (
    <div className="blogs-main-section">
      <div className="container">
        {/* Featured Article Card */}
        {featuredArticle && activeCategory === 'All Stories' && !searchQuery && !selectedTag && (
          <article className="featured-blog-card">
            <div className="row g-0 align-items-center">
              <div className="col-lg-7">
                <div className="featured-img-wrap">
                  <img src={featuredArticle.image} alt={featuredArticle.title} />
                  <span className="featured-label">
                    <i className="bi bi-star-fill me-1" /> Featured Story
                  </span>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="featured-body">
                  <div className="featured-meta">
                    <span className="blog-cat-pill">{featuredArticle.category}</span>
                    <span className="blog-read-time">
                      <i className="bi bi-clock-history me-1" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <h2 className="featured-title">{featuredArticle.title}</h2>
                  <p className="featured-excerpt">{featuredArticle.excerpt}</p>
                  <div className="featured-footer">
                    <div className="blog-author-info">
                      <img src={featuredArticle.author.avatar} alt={featuredArticle.author.name} />
                      <div>
                        <strong>{featuredArticle.author.name}</strong>
                        <span>{featuredArticle.date}</span>
                      </div>
                    </div>
                    <button type="button" className="blogs-read-btn">
                      <span>Read Story</span>
                      <i className="bi bi-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Category Tabs */}
        <div className="blogs-filter-bar">
          <div className="blogs-cat-tabs">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`blogs-tab-btn ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat)
                  setSelectedTag(null)
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {selectedTag && (
          <div className="blogs-active-tag-banner">
            <span>
              Filtering by tag: <strong>#{selectedTag}</strong>
            </span>
            <button type="button" onClick={() => setSelectedTag(null)}>
              <i className="bi bi-x-lg" /> Clear Tag
            </button>
          </div>
        )}

        {/* Blog Content Grid + Sidebar */}
        <div className="row g-5">
          <div className="col-lg-8">
            {filteredArticles.length === 0 ? (
              <div className="blogs-empty-state">
                <i className="bi bi-journal-x" />
                <h3>No articles found</h3>
                <p>Try searching for a different keyword or choosing another category.</p>
                <button
                  type="button"
                  className="blogs-reset-btn"
                  onClick={() => {
                    setActiveCategory('All Stories')
                    setSearchQuery('')
                    setSelectedTag(null)
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="blogs-grid">
                {filteredArticles.map((article) => (
                  <article className="blog-card" key={article.id}>
                    <div className="blog-card-thumb">
                      <img src={article.image} alt={article.title} />
                      <span className="blog-card-cat">{article.category}</span>
                      <span className="blog-card-read">{article.readTime}</span>
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="blog-card-date">
                          <i className="bi bi-calendar3 me-1" />
                          {article.date}
                        </span>
                      </div>
                      <h3 className="blog-card-title">{article.title}</h3>
                      <p className="blog-card-excerpt">{article.excerpt}</p>
                      <div className="blog-card-footer">
                        <div className="blog-card-author">
                          <img src={article.author.avatar} alt={article.author.name} />
                          <span>{article.author.name}</span>
                        </div>
                        <button type="button" className="blog-card-link">
                          <span>Read</span>
                          <i className="bi bi-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <aside className="blogs-sidebar">
              {/* Search Widget */}
              <div className="sidebar-widget search-widget">
                <h4 className="widget-title">Search Articles</h4>
                <div className="sidebar-search-box">
                  <i className="bi bi-search" />
                  <input
                    type="text"
                    placeholder="Search topics, places..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="clear-search"
                      onClick={() => setSearchQuery('')}
                    >
                      <i className="bi bi-x" />
                    </button>
                  )}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="sidebar-widget">
                <h4 className="widget-title">Categories</h4>
                <ul className="sidebar-cat-list">
                  {blogCategories.map((cat) => {
                    const count =
                      cat === 'All Stories'
                        ? allBlogArticles.length
                        : allBlogArticles.filter((a) => a.category === cat).length
                    return (
                      <li key={cat}>
                        <button
                          type="button"
                          className={activeCategory === cat ? 'active' : ''}
                          onClick={() => {
                            setActiveCategory(cat)
                            setSelectedTag(null)
                          }}
                        >
                          <span>{cat}</span>
                          <em>{count}</em>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Popular Tags Widget */}
              <div className="sidebar-widget">
                <h4 className="widget-title">Popular Tags</h4>
                <div className="sidebar-tags-cloud">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className={`tag-pill ${selectedTag === tag ? 'is-selected' : ''}`}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Subscription Widget */}
              <div className="sidebar-widget newsletter-widget">
                <div className="newsletter-badge">
                  <i className="bi bi-envelope-heart-fill" />
                </div>
                <h4>Join Our Travel Newsletter</h4>
                <p>Get exclusive travel discounts, destination guides, and secret tips sent directly to your inbox.</p>
                {isSubscribed ? (
                  <div className="subscribe-success">
                    <i className="bi bi-check-circle-fill me-2" />
                    Thank you for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="newsletter-form">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={subscribedEmail}
                      onChange={(e) => setSubscribedEmail(e.target.value)}
                    />
                    <button type="submit">
                      <span>Subscribe</span>
                      <i className="bi bi-send-fill" />
                    </button>
                  </form>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

const Blogs = () => {
  return (
    <div className="blogs-page">
      <BlogsHero />
      <BlogsContent />
      <TravelImageStrip />
      <QuickLinks />
    </div>
  )
}

export default Blogs
