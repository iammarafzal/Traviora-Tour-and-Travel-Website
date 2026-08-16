import workingSteps from '../../data/workingSteps'
import traveler from '../../assets/experience-image1.webp'
import plane from '../../assets/plane.svg'
import passport from '../../assets/steps-1.svg'
import ticket from '../../assets/steps-2.svg'
import './WorkingSteps.css'

const WorkingSteps = () => {
  return (
    <section className="working-steps" id="working-steps">
      <div className="working-flight-path" aria-hidden="true" />

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <div className="working-content">
              <div className="working-subtitle">
                <i className="bi bi-airplane-engines" aria-hidden="true" />
                <span>WORKING STEPS</span>
                <i className="bi bi-airplane-engines" aria-hidden="true" />
              </div>

              <h2>
                Book Your Next Trip
                <span>in 3 Simple Steps</span>
              </h2>

              <div className="working-card-grid">
                {workingSteps.map((step) => (
                  <article
                    className="working-step-card"
                    key={step.id}
                  >
                    <div className={`working-step-icon is-${step.color}`}>
                      <i className={`bi ${step.icon}`} aria-hidden="true" />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>

              <button className="working-start-btn" type="button">Start Planning</button>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="working-visual">
              <div className="working-blob" />
              <img className="working-traveler" src={traveler} alt="Traveler ready to plan a Traviora trip" />

              <img className="working-plane-float" src={plane} alt="" aria-hidden="true" />
              <span className="working-pin-float" aria-hidden="true">
                <i className="bi bi-geo-alt-fill" />
              </span>
              <div className="working-passport-float" aria-hidden="true">
                <img src={passport} alt="" />
              </div>
              <div className="working-ticket-float" aria-hidden="true">
                <img src={ticket} alt="" />
              </div>

              <div className="working-support-badge">
                <span>
                  <i className="bi bi-headset" aria-hidden="true" />
                </span>
                <strong>24/7 Travel Support</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkingSteps
