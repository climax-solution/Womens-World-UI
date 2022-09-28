import data from "../../data/static.json"
import Breadcumb from "../../components/Breadcumb";
import DiscoverOurNewCollection from "../../components/DiscoverOurNewCollection";

const CollectionContainer = () => {

  return (
    <>
      <Breadcumb title='Our Collection' addOtherTitle="COLLECTION" text='Home' />
      <DiscoverOurNewCollection
        ClassItem="section-padding-100"
        data={data[0].DiscoverOurNewCollection}
      />
    </>
  );
}

export default CollectionContainer