"use client";

import React, { useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BREAKPOINTS } from "@/utils/constants";

const Certifications = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      if (swiperRef.current.isEnd) {
        swiperRef.current.slideTo(0);
      } else {
        swiperRef.current.slideNext();
      }
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      if (swiperRef.current.isBeginning) {
        swiperRef.current.slideTo(swiperRef.current.slides.length - 1);
      } else {
        swiperRef.current.slidePrev();
      }
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <h2 className=" font-bold text-4xl text-primaryColor tracking-widest">
          Achievments
        </h2>
      </div>

      <div>
        <div className="" style={{ width: "10%" }}>
          <div onClick={goPrev} className="cursor-pointer "></div>
        </div>
        <div className="" style={{ width: "80%" }}>
          <Swiper
            onSwiper={(swiper: any) => (swiperRef.current = swiper)}
            slidesPerView={2}
            breakpoints={BREAKPOINTS}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper w-full"
            style={{ paddingBottom: 10 }}
          >
            
          </Swiper>
        </div>
        <div className="" style={{ width: "10%" }}>
          <div onClick={goNext} className="cursor-pointer w-7 md:w-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
