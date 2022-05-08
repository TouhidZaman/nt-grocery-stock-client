import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

//Slide Images
import slideImageOne from "../../../../../images/slider/slide-1.png";
import slideImageTwo from "../../../../../images/slider/slide-2.png";
import slideImageThree from "../../../../../images/slider/slide-3.png";

const Banner = () => {
    const slidesData = [
        {
            id: "1",
            caption: "Items Stocked In Warehouse",
            imgUrl: slideImageOne,
        },
        {
            id: "2",
            caption: "Item Placement Equipment",
            imgUrl: slideImageTwo,
        },
        {
            id: "3",
            caption: "Inside view of Warehouse",
            imgUrl: slideImageThree,
        },
    ];
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                }}
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div>
                            <img
                                className="h-[60vh] w-screen object-cover"
                                src={slide.imgUrl}
                                alt=""
                            />
                            <span className="backdrop-blur-sm backdrop-brightness-105 p-8 md:p-10 rounded-lg text-center absolute top-1/2 left-1/2 font-semibold -translate-x-1/2 -translate-y-1/2">
                                <h3 className="text-3xl lg:text-6xl text-blue-300">
                                    {slide.caption}
                                </h3>
                                <button className="mt-4 py-2.5 px-4 lg:px-10 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-blue-800 bg-blue-500 hover:bg-blue-700 text-white border-blue-600 hover:border-none hover:text-white">
                                    View Inside
                                </button>
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Banner;
