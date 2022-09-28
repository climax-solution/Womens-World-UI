import data from "../../data/static.json"

import Breadcumb from '../../components/Breadcumb'
import AboutOurCollection from "../../components/AboutOurCollection"
import Subscribe from "../../components/Subscribe"

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
        AboutOurCollectionImg={data[0].HomeDemo1.AboutOurCollectionImg}
      />
      <Subscribe data={data[0].Subscribe} />
    </>
  );
}

export default AboutContainer