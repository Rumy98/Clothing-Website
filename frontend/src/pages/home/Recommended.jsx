import React, { useState } from "react"; // Correct import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ClothCard from "../clothes/clothCard";
import { useFetchAllClothesQuery } from "../../redux/features/clothes/clothApi";

const Recommended = () => {
  const {
    data: clothes = [],
    isLoading,
    isError,
    error,
  } = useFetchAllClothesQuery();

  return (
    <div className="py-16 bg-blue-200">
      <h2 className="text-3xl font-semibold mb-6">New Arrivals</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {clothes.length > 0 &&
          clothes.slice(8, 18).map((cloth, index) => (
            <SwiperSlide key={index}>
              <ClothCard cloth={cloth} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
