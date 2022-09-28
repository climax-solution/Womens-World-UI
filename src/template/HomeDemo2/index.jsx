import { useEffect } from "react"
import { addRemoveClassBody } from "../../utils"

import DiscoverOurNewCollection from "../../components/DiscoverOurNewCollection"
import HowItWorks from "../../components/HowItWorks"
import OurBrands from "../../components/OurBrands"
import OurRoadmap from "../../components/OurRoadmap"
import FAQ from "../../components/FAQ"
import data from "../../data/static.json"
import WelcomeArea from "./WelcomeArea"
import TeamArea from "../../components/TeamArea"
import Subscribe from "../../components/Subscribe"
import ContactArea from "../../components/ContactArea"

const HomeDemo2Container = () => {

  useEffect(() => {
    addRemoveClassBody('darker')
  },[])

  return (
    <>
      <WelcomeArea data={data[0].HomeDemo2.WelcomeArea} />
      <div className="clearfix"/>
      <section className="features section-padding-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
              <div className="image-box">
                <img draggable="false" src={data[0].HomeDemo2.AboutOurCollectionImg} className="center-block img-responsive phone-img" alt="" />
                <img draggable="false" src={data[0].HomeDemo2.AboutOurCollectionRingImg} className="center-block img-responsive rings " alt="" />
              </div>
            </div> 
            <div className="service-img-wrapper col-lg-6 col-md-9 col-sm-12 mt-s">
              <div className="who-we-contant">
                <div className="dream-dots text-left">
                  <span className="gradient-text ">{data[0].HomeDemo2.dreamDotsText}</span>
                </div>
                <h4 data-aos="fade-up">{data[0].HomeDemo2.title}</h4>
                <p data-aos="fade-up">{data[0].HomeDemo2.textUp}</p>
                <p data-aos="fade-up">{data[0].HomeDemo2.textDown}</p>
                <a className="btn more-btn mt-20" data-aos="fade-up" href="#">{data[0].HomeDemo2.btnText}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurBrands data={data[0].OurBrands} />
      <HowItWorks
        ClassItem="how-steps section-padding-100-40"
        data={data[0].HowItWorks}
      />
      <DiscoverOurNewCollection data={data[0].DiscoverOurNewCollection} />
      <OurRoadmap data={data[0].OurRoadmap} />
      <FAQ data={data[0].FAQ} />
      <Subscribe data={data[0].Subscribe} />
      <TeamArea data={data[0].TeamArea} />
      <ContactArea data={data[0].ContactArea} />
    </>
  )
}

export default HomeDemo2Container