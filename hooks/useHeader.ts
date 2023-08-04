import { useRouter } from "next/navigation";
import { useState } from "react";

const useHeader = () => {
  const { push } = useRouter();
  const [showCart, setshowCart] = useState(false);

  // XỬ LÝ KHI BẤM VÀO GIỎ HÀNG
  const onClickCart = () => {
    setshowCart(true);
  };

  const onClickLogo = () => {
    push("/store");
  };

  return {
    showCart,
    setshowCart,
    onClickCart,
    onClickLogo
  };
};

export default useHeader;
