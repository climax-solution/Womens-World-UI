import SectionHeading from '../SectionHeading'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination
} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([Pagination]);

const OurInspiration = ({data}) => {
	return(
      <section className="clients_testimonials_area section-padding-0-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading
                title={data.title}
                text={data.text}
              />
            </div>
          </div>
        </div>
        <div className="cotainer-fluid">
          <div className="row justify-content-center">

            <div className="col-12 col-md-10 col-xs-10 offset-xs-1">
              <Swiper
                slidesPerView={2}
                spaceBetween={2}
                slidesPerGroup={2}
                loop={true}
                loopFillGroupWithBlank={false}

                scrollbar={{ draggable: true }}
                navigation={false}
                autoplay={true}
                className="client_slides"
              >
                {data?.list?.map((item , key) => (
                  <SwiperSlide className="single-testimonial text-center" key={key}>
                    <div className="icon_wrapper">
                      <i className="fa fa-quote-right" />
                    </div>
                    {/* Testimonial Image */}
                    <div className="testimonial_image">
                      <img src={item.img} alt="" />
                    </div>
                    {/* Testimonial Feedback Text */}
                    <div className="testimonial-description">
                      <div className="testimonial_text">
                        <p>{item.description[0]}</p>
                      </div>
                      {/* Admin Text */}
                      <div className="admin_text">
                        <h5>{item.description[1]}</h5>
                        <p>{item.description[2]}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
	)
}

export default OurInspiration