import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SliderForCard.scss';

export const SliderForCard = ({ singleProduct }) => {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <>
      <Swiper
        className="sliderBig"
        modules={[Navigation, Thumbs]}
        spaceBetween={50}
        slidesPerView={1}
        thumbs={{ swiper: activeThumb }}
        navigation
        loop={true}
      >
        {singleProduct.slider &&
          singleProduct.slider.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={singleProduct.id} />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        className="sliderSmall"
        onSwiper={setActiveThumb}
        modules={[Navigation, Thumbs]}
        spaceBetween={40}
        slidesPerView={3}
        loop={true}
      >
        {singleProduct.slider &&
          singleProduct.slider.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={singleProduct.id} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
