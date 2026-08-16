import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { tourHeroImage, filterGroups, tourPackages } from '../../data/toursData'
import TravelImageStrip from '../../components/Shared/TravelImageStrip/TravelImageStrip'
import QuickLinks from '../../components/Shared/QuickLinks/QuickLinks'
import './Tour.css'

const createEmptyFilters = () =>
  filterGroups.reduce((acc, group) => {
    acc[group.key] = []
    return acc
  }, {})

function TourHero() {
  return (
    <section className="tour-hero" style={{ backgroundImage: `url(${tourHeroImage})` }}>
      <div className="tour-hero-overlay" />
      <div className="container position-relative text-center">
        <div className="tour-hero-badge">
          <i className="bi bi-airplane-engines" aria-hidden="true" />
          <span>EXPLORE OUR TOURS</span>
          <i className="bi bi-airplane-engines" aria-hidden="true" />
        </div>
        <h1 className="tour-hero-title">Tour Packages</h1>
        <p className="tour-hero-subtitle">
          Discover curated travel itineraries, breathtaking destinations, and extraordinary adventures crafted just for you.
        </p>
        <div className="tour-breadcrumb">
          <a href="/">Home</a>
          <i className="bi bi-chevron-right" aria-hidden="true" />
          <span>Tour Packages</span>
        </div>
      </div>
    </section>
  )
}

function TourSearchResult() {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  const [selectedFilters, setSelectedFilters] = useState(createEmptyFilters)
  const [viewMode, setViewMode] = useState('grid')

  const handleFilterChange = (groupKey, label) => {
    setSelectedFilters((current) => {
      const values = current[groupKey]
      const nextValues = values.includes(label)
        ? values.filter((value) => value !== label)
        : [...values, label]
      return { ...current, [groupKey]: nextValues }
    })
  }

  const handleClearAll = () => {
    setSelectedFilters(createEmptyFilters())
    if (searchQuery) {
      setSearchParams({})
    }
  }

  const filteredTours = useMemo(() => {
    return tourPackages.filter((tour) => {
      const matchesFilter = filterGroups.every((group) => {
        const values = selectedFilters[group.key]
        return values.length === 0 || values.includes(tour[group.field])
      })

      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        tour.title.toLowerCase().includes(query) ||
        tour.location.toLowerCase().includes(query) ||
        tour.description.toLowerCase().includes(query) ||
        tour.activity.toLowerCase().includes(query)

      return matchesFilter && matchesSearch
    })
  }, [selectedFilters, searchQuery])

  return (
    <section className="tour-results">
      <div className="container">
        {searchQuery && (
          <div className="tour-search-alert">
            <span>
              <i className="bi bi-search me-2" />
              Showing results for: <strong>"{searchQuery}"</strong>
            </span>
            <button
              type="button"
              className="tour-clear-search-btn"
              onClick={() => setSearchParams({})}
            >
              Clear Search
            </button>
          </div>
        )}
        <div className="row g-5">
          <div className="col-lg-4">
            <aside className="tour-sidebar">
              <div className="tour-criteria-header">
                <h2>Criteria</h2>
                <button type="button" className="tour-clear-all-btn" onClick={handleClearAll}>
                  Clear All
                </button>
              </div>

              {filterGroups.map((group) => (
                <div className="tour-filter-card" key={group.key}>
                  <h3>{group.title}</h3>
                  <div className="tour-filter-list">
                    {group.options.map((option) => (
                      <label className="tour-filter-row" key={option.label}>
                        <span className="tour-filter-label">
                          <input
                            type="checkbox"
                            checked={selectedFilters[group.key].includes(option.label)}
                            onChange={() => handleFilterChange(group.key, option.label)}
                          />
                          {option.label}
                        </span>
                        <em className="tour-filter-count">{option.count}</em>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </aside>
          </div>

          <div className="col-lg-8">
            <div className="tour-sort-bar">
              <p>
                Showing <strong>{filteredTours.length}</strong> {filteredTours.length === 1 ? 'tour' : 'tours'}
              </p>
              <div className="tour-view-toggle">
                <span>View:</span>
                <button
                  className={viewMode === 'grid' ? 'is-active' : ''}
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                  title="Grid view"
                >
                  <i className="bi bi-grid-3x3-gap-fill" />
                </button>
                <button
                  className={viewMode === 'list' ? 'is-active' : ''}
                  type="button"
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                  title="List view"
                >
                  <i className="bi bi-list-ul" />
                </button>
              </div>
            </div>

            {filteredTours.length === 0 ? (
              <div className="tour-empty">
                <i className="bi bi-search" />
                <h3>No Tours Found</h3>
                <p>Try adjusting your search criteria or clearing filters.</p>
                <button type="button" className="tour-clear-all-btn mt-3" onClick={handleClearAll}>
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={`tour-card-wrap ${viewMode === 'list' ? 'is-list' : 'is-grid'}`}>
                {filteredTours.map((tour) => (
                  <article className="tour-card" key={tour.id}>
                    <div className="tour-card-image">
                      <img src={tour.image} alt={tour.title} />
                      <span className="tour-card-price">{tour.price}</span>
                      <span className="tour-card-location">
                        <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                        {tour.location}
                      </span>
                    </div>
                    <div className="tour-card-body">
                      <div className="tour-card-meta">
                        <span className="tour-meta-tag">{tour.activity}</span>
                        <span className="tour-meta-tag is-type">{tour.tripType}</span>
                      </div>
                      <h3 className="tour-card-title">{tour.title}</h3>
                      {viewMode === 'list' && (
                        <p className="tour-card-desc">{tour.description}</p>
                      )}
                      <hr />
                      <div className="tour-card-footer">
                        <span className="tour-duration">
                          <i className="bi bi-clock-history" aria-hidden="true" />
                          {tour.days}
                        </span>
                        <button type="button" className="tour-btn">
                          <span>View Details</span>
                          <i className="bi bi-arrow-right" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const Tour = () => {
  return (
    <>
      <TourHero />
      <TourSearchResult />
      <TravelImageStrip />
      <QuickLinks />
    </>
  )
}

export default Tour
