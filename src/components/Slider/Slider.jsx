import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper';

import { useTranslation } from 'react-i18next';
import './Slider.scss';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export const Slider = () => {
  const { t } = useTranslation();

  const sliderData = [
    {
      id: 1,
      title: t('promo.slide1'),
      image: 'https://i.postimg.cc/TPs8fjn8/slides1.jpg',
    },
    {
      id: 2,
      title: t('promo.slide2'),
      image: 'https://i.postimg.cc/yd3MdJTD/slides2.jpg',
    },
    {
      id: 3,
      title: t('promo.slide3'),
      image: 'https://i.postimg.cc/Gpt0Wg8J/slides3.jpg',
    },
    {
      id: 4,
      title: t('promo.slide4'),
      image: 'https://i.postimg.cc/bNDVXGRM/image-13.jpg',
    },
  ];
  return (
    <div className="slider">
      <Swiper
        className="slider__wrapper"
        modules={[Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        navigation
        loop={true}
        effect="fade"
      >
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slider__title">{item.title}</div>
            <div className="slider__img">
              <img src={item.image} alt={item.id} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
