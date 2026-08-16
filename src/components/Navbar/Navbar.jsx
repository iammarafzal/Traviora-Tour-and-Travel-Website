import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchContainerRef = useRef(null)
  const searchInputRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location.pathname])

  // Focus input when search bar expands
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  // Close search on click outside or escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsSearchOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const isHomePage = location.pathname === '/'

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/tour?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setIsSearchOpen(false)
    }
  }

  const handleToggleSearch = () => {
    setIsSearchOpen((prev) => !prev)
  }

  return (
    <nav
      className={`navbar navbar-expand-lg custom-nav ${
        scrolled ? 'scrolled black-theme' : 'white-theme'
      }`}
    >
      <div className="container">
        <Link className="navbar-brand logo" to="/">
          Traviora
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-center">
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/tour">
                Tour
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/blogs">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => (isActive ? 'active-link' : '')} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="navbar-actions" ref={searchContainerRef}>
            <div className={`nav-search-wrapper ${isSearchOpen ? 'is-open' : ''}`}>
              {!isSearchOpen ? (
                <button
                  type="button"
                  className="search-toggle-btn"
                  onClick={handleToggleSearch}
                  aria-label="Open search bar"
                  title="Search tours"
                >
                  <i className="bi bi-search" aria-hidden="true" />
                </button>
              ) : (
                <form className="nav-search-bar" onSubmit={handleSearchSubmit} role="search">
                  <button type="submit" className="search-icon" aria-label="Submit search">
                    <i className="bi bi-search" aria-hidden="true" />
                  </button>
                  <input
                    ref={searchInputRef}
                    type="text"
                    className="search-input"
                    placeholder="Search tours..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search destinations and tours"
                  />
                  <button
                    type="button"
                    className="search-close-btn"
                    onClick={() => {
                      setSearchQuery('')
                      setIsSearchOpen(false)
                    }}
                    aria-label="Close search"
                    title="Close"
                  >
                    <i className="bi bi-x-lg" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
