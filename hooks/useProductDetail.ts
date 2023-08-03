import { getTemplate } from "@/services/storeApi";
import { useEffect, useState } from "react";

type Props = {
  productId?: string;
};

const useProductDetail = ({ productId }: Props) => {
  const [productDetail, setProductDetail] = useState({});

  // LẤY THÔNG TIN SẢN PHẨM
  const onFetchProductDetail = async () => {
    await getTemplate(`product?id=${productId}`)
      .then((res) => setProductDetail(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (productId) {
      onFetchProductDetail();
    }
  }, [productId]);

  return {
    productDetail,
  };
};

export default useProductDetail;
