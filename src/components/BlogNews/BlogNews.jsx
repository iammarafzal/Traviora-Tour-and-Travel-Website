import blogPosts from '../../data/blogPosts'
import './BlogNews.css'

const BlogNews = () => {
  return (
    <section className="blog-news" aria-label="Traviora blog and news articles">
      <div className="container">
        <div className="row g-4 g-xl-5">
          {blogPosts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              <article className={`blog-news-card${post.isFeatured ? ' is-featured' : ''}`}>
                <div className="blog-news-image">
                  <img src={post.image} alt={post.title} />
                </div>

                {post.isFeatured && (
                  <button className="blog-read-more" type="button">
                    Read More
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </button>
                )}

                <div className="blog-news-info">
                  <div className="blog-news-meta">
                    <span>
                      <i className="bi bi-person" aria-hidden="true" />
                      {post.author}
                    </span>
                    <span>
                      <i className="bi bi-calendar3" aria-hidden="true" />
                      {post.date}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="blog-news-cta-wrap">
          <p className="blog-news-cta">
            <span>Want to see more travel stories?</span>
            <a href="#blog" className="cta-link-btn">
              <span>View All Stories</span>
              <i className="bi bi-arrow-right-short" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlogNews
