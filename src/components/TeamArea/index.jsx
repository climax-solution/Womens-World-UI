import SectionHeading from '../SectionHeading'

const TeamArea = ({data}) => {
  return (
      <section className="our_team_area section-padding-0-70 clearfix" id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
                <SectionHeading
                    ClassTitle="gradient-text"
                    title={data.SectionHeading.title}
                    otherTitle={data.SectionHeading.otherTitle}
                    text={data.SectionHeading.text}
                />
            </div>
          </div>
          <div className="row">
            {/* Single Team Member */}
            {data?.listQues?.map((item , key) => (
            
                <div className="col-md-6 col-lg-4 mb-30" key={key}>
                <div className="team-item h-100">
                    <div className="mb-30 position-relative d-flex align-items-center">
                        <span className="socials d-inline-block">
                            {item.icons.map((itemIcon , key) => <a key={key} href="#" className={itemIcon} />)}
                        </span>
                        <span className="img-holder d-inline-block">
                            <img src={item.img} alt="Team" />
                        </span>
                    </div>
                    <div className="team-content">
                        <h5 className="mb-2">{item.name}</h5>
                        <p className={`text-uppercase mb-0 ${key == 2 ? "lh-1" : "" }`}>{item.title}</p>
                    </div>
                </div>
                </div>
            ))}

          </div>
        </div>
      </section>
  )
}

export default TeamArea