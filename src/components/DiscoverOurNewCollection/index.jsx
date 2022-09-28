import SectionHeading from '../SectionHeading'

const DiscoverOurNewCollection = ({
  ClassItem="collection section-padding-100",
  data
}) => {
  return (
      <section className={ClassItem} style={{paddingBottom: '70px'}}>
        <div className="container-fluid">
          <SectionHeading
            ClassTitle="gradient-t"
            title={data.SectionHeading.title}
            otherTitle={data.SectionHeading.otherTitle}
            text={data.SectionHeading.text}
          />
          <div className="row">
            {data?.list?.map((item , key) => (
                <div className="col-12 col-xl-2 col-lg-3 col-md-6" key={key}>
                
                    <div className="single_collection">
                        <div className="collection-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="collection-info">
                            <h5>{item.title}</h5>
                            <a className="btn more-btn" href="#">{item.btnText}</a>
                        </div>
                    </div>
                </div>
            ))}

          </div>
        </div>
      </section>
  )
}

export default DiscoverOurNewCollection