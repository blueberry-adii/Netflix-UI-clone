import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
//background-image: url(&quot;https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQqOh2yhpKE8385dV9hjlxxXtG63RjSjrlNOkx2yLuGMYe8JFTnA9ScVsioAhTa9Ds34ERhB2R4aBFUng1j54IFwl5JvjgVmGEU.webp?r=d66&quot;);

import "./styles.css";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";

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
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYUCgDPIk4LvnEw_j-dC5ca65oxm4yP2Z7RFKlRcN6WYzCwNA4MhTNqTRrSAK9zND3cSjrYEpbQculmTCXPD09ZbvdCosdbuOjc.webp?r=062')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYGL4_ns5MGTE5-Yd3ZQVB5apyY9yxQ39lxjT_27ehdoGzrxRwNc4osgXEeifcv9yO_MgMySL-p6hMxtQZnIEkZmyglIJ7wm7ik.webp?r=c23')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQqOh2yhpKE8385dV9hjlxxXtG63RjSjrlNOkx2yLuGMYe8JFTnA9ScVsioAhTa9Ds34ERhB2R4aBFUng1j54IFwl5JvjgVmGEU.webp?r=d66')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWtQdcUd4n6VKz6HTm_IbI2cOq0VDU7fDQpomIXBLuCYqtJ4j8hj2pz7j6spnX2osjRgTMJQ9xkMieYZWqC6xC8G4tGlTLJBm3I.webp?r=cc2')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            4
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYVcRfFB91jy3f8-_Alb6H4RUzqXFRA7ejjOfCOXF20XLRVeCyT3ZFEimKbZAimt2ayVUWXSnp6ApNxpoK0mA3XzJD__irrDkdMD6lDrOFPSvQqP8s0xn2dNBaU9JxIu4lUd.webp?r=63b')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            5
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZFBdXweIqorvQIPkQbuKg9rFcZJJ8yCUzSX1ySYOsmrcMeUgLlY3YWvFcXee7lFjHwMT_Ofd03ttH-rTzAHPZskA6K-f4imBAY.webp?r=81d')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            6
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUbEuw4gn448vhUbeTgwsmEsA4ZhBFHAbPyFyAk414jH72BDs0ALdA2TEDez1mRZHuyUjlpB_EL0LxkrymlRyHs2joUg2Izzl4Q.webp?r=ad2')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            7
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABf4wStrKekb1hEKRFD141eOa8rGZTWJK1QxVF2zxvJDivIDqQMNDUmh_d33HVtAxToXkZlAeLEzdhxPXCskBuNsi4X_wSv2Brzk.webp?r=7de')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            8
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcBQAzZgCcAJyLKGf0x3EjJHKr1h1oCRUQDfVspaHXampP-RjiOkIRlWBz7ViFOvUI1EdPSRcxoOPmB7paPLi52W4OmQZJ4NDMQ.webp?r=a92')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            9
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <span className="h-[300px] w-[214px] max-[1920px]:h-[252px] max-[1920px]:w-[180px] max-[1280px]:h-[196px] max-[1280px]:w-[140px] max-[960px]:h-[156.8px] max-[960px]:w-[112px] rounded-md bg-cover bg-[url('https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdALQ_quEIf33dseDu2_64lBj1IdUbBdDr0HfNdpewMKX0_jvfuQGxIo18viqg_8fRtmeUXaGEEOuOiyXAfj8eStlBNWq8BLm8AN0t34NOen7gjDl2i36HTzQ-4oKr6KQo6w.webp?r=6dd')]"></span>
          <div className="text-[64px] min-[1280px]:text-[100px] min-[1920px]:text-[120px] font-extrabold absolute bottom-0 left-0">
            10
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
