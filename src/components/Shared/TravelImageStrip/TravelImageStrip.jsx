import { stripImages } from '../../../data/sharedData'
import './TravelImageStrip.css'

const TravelImageStrip = () => {
  return (
    <section className="travel-strip" aria-label="Travel inspiration image strip">
      {stripImages.map((image, index) => (
        <div className="strip-item" key={image}>
          <img src={image} alt={`Travel inspiration ${index + 1}`} loading="lazy" />
          {(index === 1 || index === 3) && <span className="strip-bar" />}
        </div>
      ))}
    </section>
  )
}

export default TravelImageStrip
