import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from "../../../assets/image/Flat lay natural self care products composition.png";
import image2 from "../../../assets/image/Hand of hispanic man holding first aid kit over isolated yellow background..png";
import image3 from "../../../assets/image/Top view health still life arrangement with copy space.png";
import image4 from "../../../assets/image/Top view pills on green background.png";

const Deals = () => {
  return (
    <div className="flex flex-col gap-4 px-5 mt-6">
      <div className="flex flex-row items-center justify-between">
        <p className="text-[16px] font-pmedium_500 text-[#101010]">
          Deals on curated product
        </p>
        <Link to={"/"} className="text-[12px] font-psemibold_600 text-primary">
          view all
        </Link>
      </div>
      <div className="">
        <SwiperDeals />
      </div>
    </div>
  );
};

const SwiperDeals = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper pb-10">
      <SwiperSlide className="space-y-[18px]">
        <div className="grid grid-cols-12 gap-[22px] ">
          <DealsCard
            mainTitle={"Natural plant based skin products"}
            image={image1}
            discount={"20"}
            title={"Natural Skin Care"}
            className={"self-end"}
            background={"#E8D7C0"}
            borderColor={"#F2B137"}
            textColor={"#40170D"}
          />
          <DealsCard
            mainTitle={"First aid kits "}
            image={image2}
            discount={"25"}
            title={"First Aid Kit"}
            className={"self-start"}
            background={"#F7BB65"}
            borderColor={"#DF9C32"}
            textColor={"#FFF"}
          />
        </div>
        <div className="grid grid-cols-12 gap-[22px] ">
          <DealsCard
            mainTitle={"Self test kits and medical instruments"}
            image={image3}
            discount={"30"}
            title={"Self text kits"}
            background={"#B6D8E4"}
            borderColor={"#337D96"}
            textColor={"#101010"}
          />
          <DealsCard
            mainTitle={"All vitamins & supplements "}
            image={image4}
            discount={"40"}
            title={"Vitamins"}
            className={"self-end"}
            background={"#8BD5A6"}
            borderColor={"#51A17F"}
            textColor={"white"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="space-y-[18px]">
        <div className="grid grid-cols-12 gap-[22px] ">
          <DealsCard
            mainTitle={"Natural plant based skin products"}
            image={image1}
            discount={"20"}
            title={"Natural Skin Care"}
            className={"self-end"}
            background={"#E8D7C0"}
            borderColor={"#F2B137"}
            textColor={"#40170D"}
          />
          <DealsCard
            mainTitle={"First aid kits "}
            image={image2}
            discount={"25"}
            title={"First Aid Kit"}
            className={"self-start"}
            background={"#F7BB65"}
            borderColor={"#DF9C32"}
            textColor={"#FFF"}
          />
        </div>
        <div className="grid grid-cols-12 gap-[22px] ">
          <DealsCard
            mainTitle={"Self test kits and medical instruments"}
            image={image3}
            discount={"30"}
            title={"Self text kits"}
            background={"#B6D8E4"}
            borderColor={"#337D96"}
            textColor={"#101010"}
          />
          <DealsCard
            mainTitle={"All vitamins & supplements "}
            image={image4}
            discount={"40"}
            title={"Vitamins"}
            className={"self-end"}
            background={"#8BD5A6"}
            borderColor={"#51A17F"}
            textColor={"white"}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="space-y-[18px]">
        <div className="grid grid-cols-12 gap-[22px] ">
          <DealsCard
            mainTitle={"Natural plant based skin products"}
            image={image1}
            discount={"20"}
            title={"Natural Skin Care"}
            className={"self-end"}
            background={"#E8D7C0"}
            borderColor={"#F2B137"}
            textColor={"#40170D"}
          />
          <DealsCard
            mainTitle={"First aid kits "}
            image={image2}
            discount={"25"}
            title={"First Aid Kit"}
            className={"self-start"}
            background={"#F7BB65"}
            borderColor={"#DF9C32"}
            textColor={"#FFF"}
          />
        </div>
        <div className="grid grid-cols-12 gap-[22px] ">
          <DealsCard
            mainTitle={"Self test kits and medical instruments"}
            image={image3}
            discount={"30"}
            title={"Self text kits"}
            background={"#B6D8E4"}
            borderColor={"#337D96"}
            textColor={"#101010"}
          />
          <DealsCard
            mainTitle={"All vitamins & supplements "}
            image={image4}
            discount={"40"}
            title={"Vitamins"}
            className={"self-end"}
            background={"#8BD5A6"}
            borderColor={"#51A17F"}
            textColor={"white"}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const DealsCard = ({
  mainTitle,
  background,
  borderColor,
  image,
  title,
  discount,
  className,
  textColor,
}) => {
  return (
    <div className="col-span-6 flex flex-col gap-2 ">
      <div
        className={`relative w-full h-[110px] bg-[#D9D9D9] border-[1px] border-solid  flex flex-col items-center rounded-[10px] overflow-hidden  `}
        style={{ background: background, border: `1px solid ${borderColor}` }}
      >
        <img className={className} src={image} alt="" />
        <div className="absolute bottom-0 left-0 px-2 flex flex-col items-start justify-start">
          <p
            className={`text-[14px] font-pregular_400 `}
            style={{ color: textColor }}
          >
            {title}
          </p>
          <p
            className={`text-[24px] font-pmedium_500   `}
            style={{ color: textColor }}
          >
            {discount}% OFF
          </p>
        </div>
      </div>
      <p className="leading-[110%] text-[10px] font-pregular_400 text-[#101010]">
        {mainTitle}
      </p>
    </div>
  );
};

export default Deals;
