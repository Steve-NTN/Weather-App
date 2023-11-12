import React, { ImgHTMLAttributes } from "react";


const Img = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return <img loading="lazy" {...props} />;
};

export default Img;
