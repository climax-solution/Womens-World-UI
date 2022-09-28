import { useEffect } from "react"
import { addRemoveClassBody } from "../../utils"

import data from "../../data/static.json"
import Preloader from "../../components/Preloader"

const HomeContainer = () => {

  useEffect(() => {
    addRemoveClassBody('darker')
  },[])

    return (
      <>
        <Preloader />
        <section className="demo section-padding-100-0" id="demo">
          <div className="container">
            <div className="section-heading text-center">
              {/* Dream Dots */}
              <div className="dream-dots justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                <img draggable="false" src={data[0]?.home?.sectionHeading?.img} alt="" />
              </div>
              <h2 className="wow fadeInUp" data-wow-delay="0.3s">{data[0]?.home?.sectionHeading?.title}</h2>
              <p className="wow fadeInUp" data-wow-delay="0.4s">{data[0]?.home?.sectionHeading?.text}</p>
            </div>
            <div className="row">
              {data[0]?.home?.demos?.map((item , key) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={key}>
                  <div className="demo-item">
                    {item.addInnerPages && <div className="demo-badge">inner pages</div>}
                    <a href={item.path} target="_blank"><img draggable="false" src={item.img} alt="demo" className="img-responsive" /></a>
                    <div className="preview-btn-wrapper text-center">
                      <a href={item.path} className="preview-demo" target="_blank">{item.title}<i className="fa fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>
      </>
    );
}

export default HomeContainer;

