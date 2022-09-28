const Subscribe = ({data}) => {
  return (
      <section className="container">
        <div className="subscribe section-padding-0-100">
          <div className="row">
            <div className="col-sm-12">
              <div className="subscribe-wrapper">
                <div className="col-lg-7">
                  <div className="section-heading text-left">
                    <h2 data-aos="fade-up">{data?.title}</h2>
                    <p data-aos="fade-up">{data?.text}</p>
                  </div>
                  <div className="service-text">
                    <div className="subscribe-section has-shadow">
                      <div className="input-wrapper">
                        <i className="fa fa-envelope" />
                        <input type="email" placeholder="Enter your Email" />
                      </div>
                      <button className="btn more-btn">{data?.btnText}</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="text-center">
                    <img src={data?.img} className="ava" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </section>
  )
}

export default Subscribe