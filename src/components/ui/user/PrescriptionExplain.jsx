import React from "react";
import { Ibtn } from "../../../assets/image";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/image/image 36.svg";
import image2 from "../../../assets/image/image 43.svg";
import image3 from "../../../assets/image/image 44.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const PrescriptionExplain = () => {
  return (
    <section className="mt-[70px]  pb-6  flex flex-col items-start gap-6">
      <div className="flex flex-col items-start justify-start gap-2 px-5">
        <p className="text-[#101010] text-[16px] font-psemibold_600">
          Upload prescription
        </p>
        <p className="text-[#101010] text-[14px] font-pregular_400">
          Our pharmacist will verify prescription & arrange your medicine and
          add it in your cart
        </p>
        <p className="flex flex-row items-center justify-start text-primary text-[12px] font-psemibold_600 gap-1">
          {" "}
          <span>Know more</span> <Ibtn />{" "}
        </p>
          </div>
          <div className="w-full flex flex-row items-center justify-center">
              <Explain/>
          </div>

          <div className="w-[calc(100vw-40px)] h-[1px] bg-[#C2C2C2]  self-center" />
    </section>
  );
};

const Explain = () => {
  return (
    <Swiper
          spaceBetween={12}
        slidesPerView={"auto"}
        loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    //   navigation={true}
      modules={[Autoplay, Pagination]}
      className="w-full items-center justify-center pb-10 px-5"
    >
      <SwiperSlide>
        <div
          className="w-[calc(100vw-40px)] flex flex-col items-start justify-start rounded-[10px] border-[1px] border-solid border-[#BCC3CD] px-4 py-3 gap-3"
          style={{
            boxShadow: "0px 4px 5px 0px rgba(255, 233, 192, 0.40)",
          }}
        >
          <p className="text-primary text-[14px] font-psemibold_600 capitalize">
            step 1
          </p>
          <div className=" w-full flex flex-row items-start justify-between gap-[41px] ">
            <img src={image1} alt="" />
            <p className=" min-w-[151px] text-[12px] font-pregular_400 text-[#555]">
              Upload the prescription using one of the method; Camera, Gallery
              or Your saved prescriptions
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-[calc(100vw-40px)] flex flex-col items-start justify-start rounded-[10px] border-[1px] border-solid border-[#BCC3CD] px-4 py-3 gap-3"
          style={{
            boxShadow: "0px 4px 5px 0px rgba(255, 233, 192, 0.40)",
          }}
        >
          <p className="text-primary text-[14px] font-psemibold_600 capitalize">
            step 2
          </p>
          <div className=" w-full flex flex-row items-start justify-between gap-[41px] ">
            <img src={image2} alt="" />
            <p className=" min-w-[151px] text-[12px] font-pregular_400 text-[#555]">
                          Once the Prescription is verified and the medicines are added to your cart, you can customize them before ordering. 
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="w-[calc(100vw-40px)] flex flex-col items-start justify-start rounded-[10px] border-[1px] border-solid border-[#BCC3CD] px-4 py-3 gap-3"
          style={{
            boxShadow: "0px 4px 5px 0px rgba(255, 233, 192, 0.40)",
          }}
        >
          <p className="text-primary text-[14px] font-psemibold_600 capitalize">
            step 3
          </p>
          <div className=" w-full flex flex-row items-start justify-between gap-[41px] ">
            <img src={image3} alt="" />
            <p className=" min-w-[151px] text-[12px] font-pregular_400 text-[#555]">
                          Select address and payment mode, and get the medicines in 10 minutes.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PrescriptionExplain;
