const WelcomeArea = ({data}) => {
  return (
      <section class="hero-section de-3 section-padding" id="home">
        {/* Hero Content */}
        <div className="hero-section-content">
          <div className="container ">
            <div className="row align-items-center">
              {/* Welcome Content */}
              <div className="col-12 col-lg-6 col-md-12">
                <div className="welcome-content">
                  <h1 className="fadeInUp" data-wow-delay="0.2s">{data.title}</h1>
                  <div className="promo-section">
                    <h3 className="special-head dark">{data.specialHead}</h3>
                  </div>
                  <p className="w-text">{data.text}</p>
                  <div className="dream-btn-group">
                    <a href="#" className="btn more-btn mr-3">{data.btnUp}</a>
                    <a href="#" className="btn more-btn">{data.btnDown}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                  
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WelcomeArea