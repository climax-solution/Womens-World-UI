import data from "../../data/static.json"

import Breadcumb from '../../components/Breadcumb'
import ContactArea from "../../components/ContactArea";

const ContactContainer = () => {

  return (
    <>
      <Breadcumb title='Contact Us' text='Home' />
      <ContactArea
        ClassItem="contact_us_area section-padding-100-0"
        data={data[0].ContactArea}
      />
    </>
  );
}

export default ContactContainer