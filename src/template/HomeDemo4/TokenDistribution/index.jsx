import SectionHeadingOther from "../../../components/SectionHeadingOther";


const TokenDistribution = ({data , ClassSpanTitle}) => {

    return (

      <section className="token-distribution section-padding-100-85">
        <div className="container">
          <SectionHeadingOther
            title="ICO Distribution"
            text="Our ICO Distribution"
            ClassSpanTitle={ClassSpanTitle}
          />

          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12">
              <div>
                <h2 className="text-center mb-30" data-aos="fade-up" data-aos-delay="0.3s">Funds Allocation</h2>
                <img src="img/core-img/distribution.png" className="center-block" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mt-s">
              <h2 className="text-center mb-30" data-aos="fade-up" data-aos-delay="0.3s">Token Distribution</h2>
              <div className="row">
                <div className="col-sm-4">
                  <div>
                    <img src="img/core-img/graph-11.png" className="center-block" alt="" />
                  </div>
                </div>
                <div className="col-sm-8">
                  {data && data.map((item , key) => (
                      <div className="token-info" key={key}>
                        <div className={item.ClassName}>
                          <div className="token-icon">{item.Num}</div>
                          <div className="token-descr">{item.descr}</div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default TokenDistribution