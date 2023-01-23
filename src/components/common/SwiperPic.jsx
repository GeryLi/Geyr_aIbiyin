import React, { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import styled from 'styled-components';
import 'swiper/css/pagination';

const SwiperPic = memo(() => {
  return (
    <SwiperPicWapper>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}


    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    </SwiperPicWapper>
  )
})
const SwiperPicWapper = styled.div`
    width: 200px;
    height: 200px;
    background-color:pink;

`

export default SwiperPic