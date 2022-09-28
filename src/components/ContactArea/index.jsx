import SectionHeading from '../SectionHeading'

const ContactArea = ({
  ClassItem="contact_us_area section-padding-100-0",
  data
}) => {
  return (
      <div className={ClassItem} style={{backgroundImage: 'url(img/core-img/pattern.png)'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
                <SectionHeading
                    ClassTitle="gradient-text blue"
                    title={data.SectionHeading.title}
                    otherTitle={data.SectionHeading.otherTitle}
                    text={data.SectionHeading.text}
                />
            </div>
          </div>
          {/* Contact Form */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="contact_form">
                <form action="#" method="post" id="main_contact_form" noValidate>
                  <div className="row">
                    <div className="col-12">
                      <div id="success_fail_info" />
                    </div>
                    {data?.list?.map((item , key) => (
                      <div className={item.ClassUp} key={key} data-aos="fade-up">
                        <div className="group" data-wow-delay="0.5s">
                          {item.addTextArea ? (
                            <textarea name={item.nameInput} id={item.nameInput} required />
                          ):(
                            <input type="text" name={item.nameInput} id={item.nameInput} required />
                          )}
                          <span className="highlight" />
                          <span className="bar" />
                          <label>{item.title}</label>
                        </div>
                      </div>
                    ))}
                    <div className="col-12 text-center" data-aos="fade-up">
                        <button type="submit" className="btn more-btn">{data.send}</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactArea