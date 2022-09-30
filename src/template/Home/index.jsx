import { useEffect } from "react"
import { addRemoveClassBody } from "../../utils"

import AboutOurCollection from "../../components/AboutOurCollection"
import HowItWorks from "../../components/HowItWorks"
import OurBrands from "../../components/OurBrands"
import OurRoadmap from "../../components/OurRoadmap"
import FAQ from "../../components/FAQ"
import data from "../../data/static.json"
import WelcomeArea from "./WelcomeArea"
import TeamArea from "../../components/TeamArea"
import ContactArea from "../../components/ContactArea"
import VideoIntroduction from "../../components/Introduction/video"

const HomeContainer = () => {

  useEffect(() => {
    addRemoveClassBody('darker')
  },[])

  return (
    <>
      <WelcomeArea data={data[0].Home.WelcomeArea} />
      <OurBrands data={data[0].OurBrands} />
      <AboutOurCollection
        ClassItem="about-us-area section-padding-100"
        ClassBxImgUp="col-12 col-lg-6 offset-lg-0 col-md-12 "
        ClassBxImg="welcome-meter floating-anim"
        ClassBxText="col-12 col-lg-6 offset-lg-0 mt-s"
        data={data[0].AboutOurCollection}
        AboutOurCollectionImg={data[0].Home.AboutOurCollectionImg}
      />
      <HowItWorks
        ClassItem="how-steps section-padding-0-40"
        data={data[0].HowItWorks}
      />
      <VideoIntroduction source={"home"}/>
      <OurRoadmap data={data[0].OurRoadmap} />
      <VideoIntroduction source={"mint"}/>
      <FAQ data={data[0].FAQ} />
      <TeamArea data={data[0].TeamArea} />
      <ContactArea data={data[0].ContactArea} />
    </>
  )
}

export default HomeContainer