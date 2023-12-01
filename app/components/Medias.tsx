'use client';

import Media, { MediaProps } from './Media';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Medias = ({ medias }: { medias: MediaProps[] }) => {
  return (
    <div className="mt-7">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {medias.map((media: MediaProps, index) => (
          <SwiperSlide>
            <Media key={index} media={media} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Medias;
