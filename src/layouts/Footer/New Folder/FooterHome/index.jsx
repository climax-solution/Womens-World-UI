import{
  FooterLogo
} from '../../../utils/allImgs'

import '../Footer.scss'

import{
  IcoName,
  TextFooter,
} from '../../../data/data-layout/data-Footer.js'

const FooterHome = () => {
    return (
      <footer>
        <div className="footer-content-area mt-0">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="footer-copywrite-info">
                  <div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                    <div className="footer-logo">
                      <a href="#"><img src={FooterLogo} alt="logo" /> Masref </a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.</p>
                  </div>
                  <div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                    {IcoName && IcoName.map((item , key) => (
                        <a key={key} href="#"><i className={item.IcoName} aria-hidden="true" /></a>    
                    ))}
                  </div>
                </div>
              </div>
              {TextFooter && TextFooter.map((item , key) => (
                <div key={key} className={item.classBlock}>
                  <div className="contact_info_area d-sm-flex justify-content-between">
                    {/* Content Info */}
                    <div className={item.classInfo} data-wow-delay="0.3s">
                      <h5>{item.title}</h5>
                      <a href><p>{item.text1}</p></a>
                      <a href><p>{item.text2}</p></a>
                      <a href><p>{item.text3}</p></a>
                      <a href><p>{item.text4}</p></a>
                      {item.text5 && <a href><p>{item.text5}</p></a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
};

export default FooterHome