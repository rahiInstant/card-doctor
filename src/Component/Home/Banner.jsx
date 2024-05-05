import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const Banner = () => {
  const BannerText = (
    <>
      <div className="p-20 w-1/2 text-white">
        <h1 className=" text-[60px] font-bold">
          Affordable Price For Car Servicing
        </h1>
        <p className="text-lg mt-6 leading-[30px] ">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="mt-6 flex gap-5 text-lg font-semibold">
          <button className="py-4 px-5 bg-primary rounded-md">
            Discover More
          </button>
          <button className="py-4 px-5 border border-white rounded-md">
            Latest Project
          </button>
        </div>
      </div>
      <div className="w-1/2"></div>
    </>
  );

  const styleObj = {
    background:
      'linear-gradient(to right, #151515,#15151500), url("/images/banner/4.jpg")',
    backgroundSize: "cover ",
    backgroundPosition: "center center",
  };

  const tailwindClass = `h-[600px] text-green-900   rounded-b-lg  font-Poppins  `;

  return (
    <div className=" -z-50 mt-[82px]">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <div id="ban" style={styleObj} className={tailwindClass}>
            {BannerText}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="ban" style={styleObj} className={tailwindClass}>
            {BannerText}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="ban" style={styleObj} className={tailwindClass}>
            {BannerText}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
