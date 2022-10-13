import data from "../../data/static.json"

import Breadcumb from '../../components/Breadcumb'
import AboutOurCollection from "../../components/AboutOurCollection"
import TeamArea from "../../components/TeamArea";

const AboutContainer = () => {

  return (
    <>
      <Breadcumb title='About us' text='Home' />
      <AboutOurCollection
        ClassItem="about-us-area section-padding-100"
        ClassBxImgUp="col-12 col-lg-6 offset-lg-0 col-md-12 "
        ClassBxImg="welcome-meter floating-anim"
        ClassBxText="col-12 col-lg-6 offset-lg-0 mt-s"
        data={data[0].AboutOurCollection}
        AboutOurCollectionImg={data[0].Home.AboutOurCollectionImg}
      />
      <TeamArea data={data[0].TeamArea}/>
    </>
  );
}

export default AboutContainer