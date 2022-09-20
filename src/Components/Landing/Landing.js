import './Landing.css';
import data from '../../data.json'

function Landing() {
  const landing = data.content.landing;

  return ( 
    <div className="landing-container">
      <div className="hero-img">
      <div className="text-container w-100 h-100 col-lg-12 col-md-12 d-flex align-items-center justify-content-center">
          <div className="text-center ">
            <h1 className="hero-text mb-0 montserrat">{landing.text}</h1>
            <p className="subtext montserrat text-white mb-3">{landing.subtext}</p>
            <button className="cta-button w-50 px-4 py-1">{landing.callToAction}</button>
            <div className="carot-btn">
              <button>
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Landing;