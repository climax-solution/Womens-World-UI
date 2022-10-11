import SectionHeading from '../SectionHeading'

const FAQ = ({data}) => {
  return (
      <div className="faq-timeline-area section-padding-100-85" id="faq">
        <div className="container">
          <SectionHeading
            ClassTitle="gradient-t"
            title={data.SectionHeading.title}
            otherTitle={data.SectionHeading.otherTitle}
            text={data.SectionHeading.text}
          />
          <div className="row align-items-center">
            <div className="service-img-wrapper col-12 col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-sm-12">
              <div className="image-box">
                <img draggable="false" src="img/svg/faq.svg" className="center-block img-responsive phone-img" alt="" />
                <img draggable="false" src="img/core-img/rings.png" className="center-block img-responsive rings " alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12">
              <div className="dream-faq-area mt-s ">
                {/* <dl style={{marginBottom: 0}}> */}

                  {data?.listQues?.map((item , key) => (
                    <dl style={{marginBottom: 0}} key={key}>
                      <dt className="wave" data-bs-toggle="collapse" data-bs-target={`#${item.ID}`} aria-expanded="false">{item.title}</dt>
                      <dd data-aos="fade-up" id={item.ID} aria-labelledby="headingOne" data-bs-parent="#basicAccordion" className="accordion-collapse collapse">
                          <p className="accordion-body">
                            {
                              typeof item.text == 'string' ? item.text : <>
                                {
                                  item.text.map((itm, idx) => (
                                    <p key={`${item.ID}${idx}`}>{itm}</p>
                                  ))
                                }
                              </>
                            }
                          </p>
                      </dd>
                    </dl>
                  ))}
                {/* </dl> */}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FAQ