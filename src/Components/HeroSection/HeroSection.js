import React from "react";
import { heroInformation } from "../../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
const HeroSection = () => {
  

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {heroInformation.length > 0
          ? heroInformation.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    style={{ backgroundColor: `${item.bg}` }}
                    className={`flex flex-row px-9 h-fit items-center py-10`}
                  >
                    <div className="basis-[40%]">
                      <img src={item.photo} alt="" className="w-full" />
                    </div>
                    <div className="basis-[60%] flex flex-col items-end">
                      <div className="flex items-center md:pb-8 gap-2 pr-8">
                        <img
                          src={item.brandLogo}
                          alt=""
                          className="w-8 md:w-14 "
                        />
                        <h3 className="w-12  font-varelo text-xs	md:text-base">
                          {item.brand}
                        </h3>
                      </div>
                      <h1 className="font-quick text-textDark text-base  md:text-5xl md:pb-8">
                        <span className="">Explore</span>{" "}
                        <span className="font-bold ">{item.name}</span>
                      </h1>

                      <h2 className="font-quick text-textDark text-base  md:text-4xl md:pb-8">
                        ${item.price}
                      </h2>
                      <h2 className="font-quick text-textDark text-base  md:text-3xl md:pb-8 flex items-center gap-2">
                        Color
                        {item.productColor &&
                          item.productColor.map((color, index) => (
                            <div
                              key={index}
                              className="w-3 h-3 md:w-5  md:h-5 rounded-[50%] "
                              style={{ backgroundColor: `${color}` }}
                            ></div>
                          ))}
                      </h2>
                      <button className="bg-sapphire rounded-full text-sm px-2 py-1 md:py-2 md:px-8 text-white font-fira ">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          : null}
      </Swiper>
      </>
  );
};

export default HeroSection;
