import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import Data from './Data'

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/autoplay"

const HomeSwiper = () => {

    return (
        <>
            <Swiper
                spaceBetween={0}      
                centeredSlides={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                effect={"fade"}
                speed={2500} //transition speed
                modules={[Autoplay,EffectFade]}
                className="mySwiper"
            >
                {Data.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                                    <img src={item.image} alt='Wasted!' className='home__showcase__image' />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default HomeSwiper