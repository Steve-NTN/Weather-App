import React from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "./Swiper.scss";

const CardSwiper = (props: SwiperProps) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      {...props}
    />
  );
};

export { CardSwiper };
