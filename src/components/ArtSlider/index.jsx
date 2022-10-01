import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { EffectCards, Autoplay  } from "swiper";
SwiperCore.use([Autoplay]);

const ArtSlider = () => (
    <Swiper
        effect={"cards"}
        grabCursor={true} 
        modules={[EffectCards]}
        className="mySwiper"
        autoplay={{
            delay: 300,
            disableOnInteraction: false
        }}
        loop={true}
    >
        {
            [...Array(11)].map((item, idx) => {
                return (
                    <SwiperSlide key={idx}>
                        <img
                            src={`/img/slide/${idx + 1}.jpg`}
                            alt="slide"
                            className=''
                        />
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
)

export default ArtSlider;