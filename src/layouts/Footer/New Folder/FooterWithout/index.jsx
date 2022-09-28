import{
  FooterLogo
} from '../../../utils/allImgs'

import '../Footer.scss'

import{
  IcoName,
  TextFooter,
} from '../../../data/data-layout/data-Footer.js'

const FooterWithout = ({HavMargn}) => {
  return (

    <footer className="footer-area bg-img">
      <div className={`footer-content-area ${HavMargn && "mt-0"}`}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-md-5">
              <div className="footer-copywrite-info">
                {/* Copywrite */}
                <div className="copywrite_text wow fadeInUp" data-wow-delay="0.2s">
                  <div className="footer-logo">
                    <a href="#"><img src={FooterLogo} alt="logo" /> Masref </a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad, a eaque officiis eligendi blanditiis odio necessitatibus.</p>
                </div>
                {/* Social Icon */}
                <div className="footer-social-info wow fadeInUp" data-wow-delay="0.4s">
                    {IcoName && IcoName.map((item , key) => (
                        <a key={key} href="#"><i className={item.IcoName} aria-hidden="true" /></a>    
                    ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7">
              {/* Content Info */}
              <div className="contact_info_area d-sm-flex justify-content-between">
                {TextFooter && TextFooter.map((item , key) => (
                  <div key={key} className="contact_info text-center wow fadeInUp" data-wow-delay="0.3s">
                    <h5>{item.title}</h5>
                    <a href><p>{item.text1}</p></a>
                    <a href><p>{item.text2}</p></a>
                    <a href><p>{item.text3}</p></a>
                    <a href><p>{item.text4}</p></a>
                    {item.text5 && <a href><p>{item.text5}</p></a>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithout