import data from "../../data/static.json"

const ContactInfo = ({Class , ClassBx , children , title}) => (
  <div className={Class}>
    <div className="contact_info_area d-sm-flex justify-content-between">
      <div className={ClassBx}>
        <h5>{title}</h5>
        {children}
      </div>
    </div>
  </div>
)


const Footer = () => {
  return (

    <footer className="footer-area bg-img" style={{backgroundImage: "url(img/core-img/pattern.png)"}}>
      <div className="footer-content-area demo">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-lg-4 col-md-6">
              <div className="footer-copywrite-info">
                {/* Copywrite */}
                <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                  <div className="footer-logo">
                    <a href="#"><img src={data[0]?.footer?.logo} alt="logo" /></a>
                  </div>
                  <p>{data[0]?.footer?.text}</p>
                </div>
                {/* Social Icon */}
                <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                  {data[0]?.footer?.ListIcon?.map((item , key) => <a href="/#" aria-label={item.ico} key={key}><i className={item.ico} aria-hidden="true" /></a>)}
                </div>
              </div>
            </div>

            <ContactInfo
              Class="col-12 col-lg-3 col-md-6 "
              ClassBx="contact_info mt-x text-center"
              title="PRIVACY & TOS"
            >
              {data[0]?.footer?.PRIVACY?.map((item , key) => <a href key={key}><p>{item.text}</p></a>)}
            </ContactInfo>

            <ContactInfo
              Class="col-12 col-lg-2 col-md-6"
              ClassBx="contact_info mt-s text-center"
              title="NAVIGATE"
            >
              {data[0]?.footer?.NAVIGATE?.map((item , key) => <a href key={key}><p>{item.text}</p></a>)}
            </ContactInfo>

            <ContactInfo
              Class="col-12 col-lg-3 col-md-6 "
              ClassBx="contact_info mt-s text-center"
              title="CONTACT US"
            >
              {data[0]?.footer?.CONTACT?.map((item , key) =><p key={key}>{item.text}</p>)}
            </ContactInfo>


          </div>
        </div>
      </div>
    </footer>
  );
};
  
  export default Footer