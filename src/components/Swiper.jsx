// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
//background-image: url(&quot;https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQqOh2yhpKE8385dV9hjlxxXtG63RjSjrlNOkx2yLuGMYe8JFTnA9ScVsioAhTa9Ds34ERhB2R4aBFUng1j54IFwl5JvjgVmGEU.webp?r=d66&quot;);

import "./swiper.css";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import SwiperData from "../data/SwiperData";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={0}
        freeMode={true}
        slidesPerGroupAuto={true}
        speed={500}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {SwiperData.map((card, i) => {
          return (
            <SwiperSlide>
              <span
                className={`h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover ${card.bg}`}
              ></span>
              <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
                {i + 1}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
