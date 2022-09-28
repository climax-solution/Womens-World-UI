const WelcomeArea = ({data}) => {
  return (
      <section className="hero-section moving section-padding" id="home">
        <div className="hero-section-content">
          <div className="container ">
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 col-md-12">
                <div className="welcome-content">
                  <h1>{data.title}</h1>
                  <div className="promo-section">
                    <h3 className="special-head dark">{data.specialHead}</h3>
                  </div>
                  <p className="w-text">{data.text}</p>
                  <div className="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                    <a href="#" className="btn more-btn mr-3">{data.btnUp}</a>
                    <a href="#" className="btn more-btn">{data.btnDown}</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 mt-s">
                <div className="row simple-numbers-wrapper">
                  {data.list.map((item , key) => (
                    <div className="col-lg-12 col-sm-4 col-xs-2" key={key}>
                      <div className="simple-numbers">
                        <div className="nubmer-block">
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="header-il fadeInUp" data-wow-delay="0.5s">
                  <img draggable="false" src={data.headerIl[0]} className="bdge" alt="" />
                  <img draggable="false" src={data.headerIl[1]} className="rounded-img" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WelcomeArea