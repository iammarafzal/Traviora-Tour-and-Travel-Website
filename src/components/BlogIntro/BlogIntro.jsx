import './BlogIntro.css'

const BlogIntro = () => {
  return (
    <section className="blog-intro" id="blog">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="blog-intro-heading">
              <span>BLOG &amp; NEWS</span>
              <h2>
                Get More Update
                <span>News &amp; Blog</span>
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <p className="blog-intro-text">
              Stay informed and inspired with Traviora's latest travel guides, destination stories, tour updates, and helpful planning tips.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogIntro
