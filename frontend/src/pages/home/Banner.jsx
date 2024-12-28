// import React from 'react'
// import bannerImg from "../../assets/banner.png"

// const Banner = () => {
//   return  (
//     <div className="flex flex-col items-center py-8 text-white gap-12 bg-orange-300">
      
//       <div className="text-center">
//         <h1 className="md:text-5xl text-2xl font-medium mb-7">New Costumes Fashion This Week</h1>
//         <p className="mb-10">
//          <h3> It's time to update your wardrobe with some of the latest and greatest trends in the fashion world.
//           From chic outfits to trendy accessories, this week's new arrivals offer something for everyone.</h3>
//         </p>
//         {/* <button className="btn-primary">Subscribe</button> */}
//       </div>

      
//       <div className="w-full flex justify-center">
//       <img src={bannerImg} alt="Fashion Banner" className="w-full md:w-[80%]" />
//       </div>
//     </div>
  
// );
// };

// export default Banner




// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import bannerImg from "../../assets/banner.png";
// import bannerImg3 from "../../assets/products-heading.jpg";
// import bannerImg4 from "../../assets/cloth-shop-banner.jpg";
// import bannerImg5 from "../../assets/images (4).jpeg";
// import bannerImg6 from "../../assets/image-1-sepia-blog-2.webp";

// const banners = [
//   { id: 1, title: "New              Costumes Fashion This Week", description: "It's time to update your wardrobe with the latest trends in the fashion world.", image: bannerImg },
//   { id: 2, title: "Exclusive Winter Collection", description: "Stay warm and stylish with our premium winter wear.", image: bannerImg3 },
//   { id: 3, title: "Summer Vibes Sale", description: "Get ready for summer with cool and trendy outfits.", image: bannerImg4 },
//   { id: 4, title: "Casual Wear Trends", description: "Discover the latest in casual and everyday wear.", image: bannerImg5 },
//   { id: 5, title: "Party Outfits Galore", description: "Shine bright at every event with our party wear collection.", image: bannerImg6 },
// ];

// const BannerCarousel = () => {
  
//   return (
//     <>
    
//       <style>
//         {`
//           .banner-title {
//           <br>
//             font-size: 68px;
//             font-weight: bold;
//           }
//           .banner-description {
//             font-size: 36px;
//             line-height: 1.5;
            
//             font-weight: bold;
//           }
//         `}
//       </style>

//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         navigation={true}
//         pagination={{ clickable: true }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {banners.map((banner) => (
//           <SwiperSlide key={banner.id}>
//             <div className="flex flex-col items-center text-white bg-orange-300 h-[400px] md:h-[300px] relative overflow-hidden">
//               <div className="text-center absolute top-1/2 transform -translate-y-1/2 z-10 px-4">
//                 <h1 className="banner-title md:text-4xl text-15xl font-medium mb-4">
//                   {banner.title}
//                 </h1>
//                 <p className="banner-description text-sm md:text-base">{banner.description}</p>
//               </div>
//               <div className="absolute inset-0">
//                 <img
//                   src={banner.image}
//                   alt="Fashion Banner"
//                   className="w-full h-full object-cover bg-opacity-80"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default BannerCarousel;


import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import bannerImg from "../../assets/banner.png";
import bannerImg3 from "../../assets/products-heading.jpg";
import bannerImg4 from "../../assets/cloth-shop-banner.jpg";
import bannerImg5 from "../../assets/banner-6-1024.jpg";
import bannerImg6 from "../../assets/image-1-sepia-blog-2.webp";

const banners = [
  { id: 1, title: "New Costumes Fashion This Week", description: "It's time to update your wardrobe with the latest trends in the fashion world.", image: bannerImg },
  { id: 2, title: "Exclusive Winter Collection", description: "Stay warm and stylish with our premium winter wear.", image: bannerImg3 },
  { id: 3, title: "Summer Vibes Sale", description: "Get ready for summer with cool and trendy outfits.", image: bannerImg4 },
  { id: 4, title: "Casual Wear Trends", description: "Discover the latest in casual and everyday wear.", image: bannerImg5 },
  { id: 5, title: "Party Outfits Galore", description: "Shine bright at every event with our party wear collection.", image: bannerImg6 },
];

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-gray-400 text-gray-800 text-lg font-bold py-2 text-center">
      Local Time: {time.toLocaleTimeString()}
    </div>
  );
};



const BannerCarousel = () => {
  return (
    <>
    <div className="text-white bg-primary text-center py-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Welcome to Your Dream Shop – Where Quality Meets Convenience!
        </h1>
        <p className="mt-2 text-lg md:text-xl">
          Discover the Best Deals on Your Favorite Products! Explore, Shop, and Enjoy – Your Ultimate Shopping Destination!
        </p>
        <p className="mt-2 text-lg md:text-xl">
          Shop the Latest Trends, Delivered Right to Your Door!
        </p>
        <p className="mt-2 text-lg md:text-xl font-semibold">
          Unbeatable Offers Await – Start Shopping Today!
        </p>
      </div>

      <Timer />




      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="flex flex-col items-center bg-orange-300 h-[400px] md:h-[300px] relative overflow-hidden">
              {/* Banner Image */}
              <div className="absolute inset-0">
                <img
                  src={banner.image}
                  alt="Fashion Banner"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>
              {/* Title and Description */}
              <div className="absolute bottom-0 text-center z-10 p-4 text-white">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                  {banner.title}
                </h1>
                <p className="text-sm md:text-base">{banner.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerCarousel;








// import React from 'react';
// import bannerImg from "../../assets/banner.png";

// const Banner = () => {
//   return (
//     <div className="flex flex-col items-center text-white bg-orange-300 h-[400px] md:h-[300px] relative overflow-hidden">
   
//       <div className="text-center absolute top-1/2 transform -translate-y-1/2 z-10 px-4">
//         <h1 className="md:text-4xl text-15xl font-medium mb-4">
//           New Costumes Fashion This Week
//         </h1>
//         <p className="text-sm md:text-base">
//           It's time to update your wardrobe with the latest trends in the fashion world.
//         </p>
      
//       </div>


//       <div className="absolute inset-0">
//         <img
//           src={bannerImg}
//           alt="Fashion Banner"
//           className="w-full h-full object-cover opacity-800"
//         />
//       </div>
//     </div>
//   );
// };

// export default Banner;




