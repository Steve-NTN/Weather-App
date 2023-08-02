import { useState } from "react";

const useHeader = () => {
  const [showCart, setshowCart] = useState(false);

  // XỬ LÝ KHI BẤM VÀO GIỎ HÀNG
  const onClickCart = () => {
    setshowCart(true);
  };

  return {
    showCart,
    setshowCart,
    onClickCart,
  };
};

export default useHeader;
