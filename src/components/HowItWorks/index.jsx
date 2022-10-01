import SectionHeading from '../SectionHeading'

const HowItWorks = ({
  ClassItem,
  data
}) => {
  return (
      <section className={ClassItem}>
        <div className="container">
          <SectionHeading
            title={data.SectionHeading.title}
            text={data.SectionHeading.text}
          />
          <div className="row">
            {data?.list?.map((item , key) => (
              <div className="col-12 col-md-6 col-lg-3" key={key}>
                {/* Content */}
                <div className="service_single_content v2 text-left" data-wow-delay="0.2s">
                  <div className="step-num bg-transparent mb-2">
                    <img draggable="false" src={item.img} alt="" className='rounded-circle img-thumbnail' width="60" />
                  </div>
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default HowItWorks