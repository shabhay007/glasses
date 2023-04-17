import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../CSSsecondPage/slider.css";

// import required modules
import { Pagination,Autoplay,Navigation } from "swiper";
// import required modules

import one from "../Page2/Images/five.jpg";

export default function App() {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
        //   pagination={{
        //     clickable: true,
        //   }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="images">
              <img src={one} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/1276/5299/files/upper-slider-eyeglasses-for-women_480x.png?v=2736183246155186508"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/1276/5299/files/upper-slider-eyeglasses-for-women_480x.png?v=2736183246155186508"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/1276/5299/files/upper-slider-eyeglasses-for-women_480x.png?v=2736183246155186508"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/1276/5299/files/upper-slider-eyeglasses-for-women_480x.png?v=2736183246155186508"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/1276/5299/files/upper-slider-eyeglasses-for-women_480x.png?v=2736183246155186508"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="images">
              <img
                src="https://cdn.shopify.com/s/files/1/1276/5299/files/upper-slider-eyeglasses-for-women_480x.png?v=2736183246155186508"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
