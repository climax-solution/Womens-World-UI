import data from "../../data/static.json"
import Breadcumb from '../../components/Breadcumb'
import FAQ from "../../components/FAQ"
import HowItWorks from "../../components/HowItWorks"

const FAQContainer = () => {

  return (
    <>
      <Breadcumb title='Our FAQ' addOtherTitle="FAQ" text='Home' />
      <FAQ data={data[0].FAQ} />
      <HowItWorks
        ClassItem="how-steps section-padding-0-40"
        data={data[0].HowItWorks}
      />
    </>
  );
}

export default FAQContainer