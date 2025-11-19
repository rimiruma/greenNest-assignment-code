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
    <div className="w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
      <Swiper
        spaceBetween={20}
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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImage}
              alt="Bring Nature Home"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-10 py-10 sm:py-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                Bring Nature Home
              </h2>
              <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-4 sm:mb-6">
                Discover beautiful indoor plants to freshen up your living space and purify your air.
              </p>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition text-sm sm:text-base md:text-lg">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImage2}
              alt="Fresh Green Collection"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-10 py-10 sm:py-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                Fresh Green Collection
              </h2>
              <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-4 sm:mb-6">
                Add life to your room with low-maintenance plants perfect for beginners.
              </p>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition text-sm sm:text-base md:text-lg">
                Explore More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImage3}
              alt="Care with Love"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-10 py-10 sm:py-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                Care with Love
              </h2>
              <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-4 sm:mb-6">
                Everything you need to keep your plants healthy, vibrant, and thriving.
              </p>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition text-sm sm:text-base md:text-lg">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={bannerImage4}
              alt="Grow Your Own Garden"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-10 py-10 sm:py-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                Grow Your Own Garden
              </h2>
              <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-4 sm:mb-6">
                From balconies to backyards — create your personal green paradise.
              </p>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition text-sm sm:text-base md:text-lg">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
