import { useEffect } from "react"
import { addRemoveClassBody } from "../../utils"

import AboutOurCollection from "../../components/AboutOurCollection"
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

const HomeDemo1Container = () => {

  useEffect(() => {
    addRemoveClassBody('darker')
  },[])

  return (
    <>
      <WelcomeArea data={data[0].HomeDemo1.WelcomeArea} />
      <OurBrands data={data[0].OurBrands} />
      <AboutOurCollection
        ClassItem="about-us-area section-padding-100"
        ClassBxImgUp="col-12 col-lg-6 offset-lg-0 col-md-12 "
        ClassBxImg="welcome-meter floating-anim"
        ClassBxText="col-12 col-lg-6 offset-lg-0 mt-s"
        data={data[0].AboutOurCollection}
        AboutOurCollectionImg={data[0].HomeDemo1.AboutOurCollectionImg}
      />
      <HowItWorks
        ClassItem="how-steps section-padding-0-40"
        data={data[0].HowItWorks}
      />
      <DiscoverOurNewCollection data={data[0].DiscoverOurNewCollection} />
      <OurRoadmap data={data[0].OurRoadmap} />
      <FAQ data={data[0].FAQ} />
      <TeamArea data={data[0].TeamArea} />
      <Subscribe data={data[0].Subscribe} />
      <ContactArea data={data[0].ContactArea} />
    </>
  )
}

export default HomeDemo1Container