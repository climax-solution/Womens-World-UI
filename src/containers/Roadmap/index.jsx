import data from "../../data/static.json"

import Breadcumb from "../../components/Breadcumb"
import OurRoadmap from "../../components/OurRoadmap"

const RoadmapContainer = () => {

  return (
    <>
      <Breadcumb title='Our Roadmap' addOtherTitle="Roadmap" text='Home' />
      <OurRoadmap data={data[0].OurRoadmap} />
    </>
  );
}

export default RoadmapContainer