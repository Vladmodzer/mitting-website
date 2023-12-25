import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import "./MeinSwiper.css"

// import required modules
import { EffectCards } from 'swiper/modules';
import photo1 from "../../img/1.jpg";
import photo2 from "../../img/2.jpeg";
import photo3 from "../../img/3.jpeg";
import photo4 from "../../img/4.jpeg";
import photo5 from "../../img/5.jpeg";
import photo6 from "../../img/6.jpeg";
export default function MeinSwiper() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo3} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
