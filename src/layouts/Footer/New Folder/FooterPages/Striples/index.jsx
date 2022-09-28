import SectionHeading from '../../../../components/SectionHeading'
import FaqTimeline from '../../../../components/FaqTimeline'
import TeamArea from '../../../../components/TeamArea'
import TestimonialArea from '../../../../components/TestimonialArea'

const Striples = ({
  FQAInfo,
  FAQCoreImg,
  TeamMemberContent,
  TestimonialContent,
  Partners
}) => {
  return (
    <div className="striples-bg">
      <FaqTimeline data={FQAInfo} img={FAQCoreImg} />
      {/* ##### Team Area Start ##### */}
      <TeamArea data={TeamMemberContent} />
      {/* ##### Team Area End ##### */}
      {/* ##### Testimonial Area Start ##### */}
      <TestimonialArea data={TestimonialContent} />
      {/* ##### Testimonial Area End ##### */}
      <section className="our-partners clearfix section-padding-100-70">
        <div className="container">
          <SectionHeading title='Our Main Partners' text='Our powerful Partners' />
          <div className="row">
            {Partners && Partners.map((item , key) => (
              <div key={key} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="team-member ">
                  <div className="team-img">
                    <img className="img-responsive center-block" src={item.img} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Striples