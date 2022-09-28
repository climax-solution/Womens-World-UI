import SectionHeading from '../SectionHeading'
import NewsContent from "./NewsContent"

const OurRoadmap = ({data}) => {
  return (
      <section className="roadmap section-padding-100-0" id="roadmap">
        <SectionHeading
            ClassTitle="gradient-text"
            title={data.SectionHeading.title}
            text={data.SectionHeading.text}
        />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="timeline">
                <div className="date-title">
                  <span>{data.roadmap.title}</span>
                </div>

                <div className="row">
                    {data?.roadmap?.left?.map((item , key) => (
                        <NewsContent
                            key={key}
                            ClassItem={item.ClassItem}
                            num={item.num}
                            day={item.day}
                            title={item.title}
                            ClassNewsMediaBx={item.ClassNewsMediaBx}
                            ClassNewsMediaLink={item.ClassNewsMediaLink}
                            img={item.img}
                            addCboxElementLink={item.addCboxElementLink}
                            text={item.text}
                        />
                    ))}

                </div>

                <div className="row">

                    {data?.roadmap?.right?.map((item , key) => (
                        <NewsContent
                            key={key}
                            ClassItem={item.ClassItem}
                            num={item.num}
                            day={item.day}
                            title={item.title}
                            ClassNewsMediaBx={item.ClassNewsMediaBx}
                            ClassNewsMediaLink={item.ClassNewsMediaLink}
                            img={item.img}
                            addCboxElementLink={item.addCboxElementLink}
                            text={item.text}
                        />
                    ))}

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OurRoadmap