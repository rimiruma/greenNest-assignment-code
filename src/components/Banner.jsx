import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bannerImage from "../assets/bannerImage.png";
import bannerImage2 from "../assets/download (9).png";
import bannerImage3 from "../assets/images (11).png";
import bannerImage4 from "../assets/download (93).png";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto h-[55vh] sm:h-[60vh] md:h-[70vh] overflow-hidden shadow-lg">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-full"
        >
          {[
            {
              img: bannerImage,
              title: "Bring Nature Home",
              desc: "Discover beautiful indoor plants to freshen up your living space and purify your air.",
              btn: "Shop Now",
            },
            {
              img: bannerImage2,
              title: "Fresh Green Collection",
              desc: "Add life to your room with low-maintenance plants perfect for beginners.",
              btn: "Explore More",
            },
            {
              img: bannerImage3,
              title: "Care with Love",
              desc: "Everything you need to keep your plants healthy, vibrant, and thriving.",
              btn: "Learn More",
            },
            {
              img: bannerImage4,
              title: "Grow Your Own Garden",
              desc: "From balconies to backyards — create your personal green paradise.",
              btn: "Get Started",
            },
          ].map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-75"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg mb-3">
                    {item.title}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 opacity-90">
                    {item.desc}
                  </p>

                  <button className="px-20 py-3 bg-green-200 cursor-pointer text-black font-semibold shadow-lg transition-all duration-300">
                    {item.btn}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
