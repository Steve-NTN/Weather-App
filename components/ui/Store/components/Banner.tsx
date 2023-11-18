import Img from "@/components/Img";
import { BasicSwiper } from "@/components/Swiper";
import { BANNER1_IMG, BANNER2_IMG, BANNER3_IMG } from "@/constants/imgs";
import { styled } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
type Props = {};

const Banner = (props: Props) => {
  const banners = [
    { img: BANNER1_IMG },
    { img: BANNER2_IMG },
    { img: BANNER3_IMG },
  ];
  return (
    <StyledBanner navigation={true} modules={[Navigation]}>
      {banners.map((banner, i) => (
        <SwiperSlide key={i}>
          <Img src={banner.img} alt="img" />
        </SwiperSlide>
      ))}
    </StyledBanner>
  );
};

const StyledBanner = styled(BasicSwiper)({
  height: 460,
  ".swiper-slide": {
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  ".swiper-button-next, .swiper-button-prev": {
    color: "#fff"
  }
});

export default Banner;
