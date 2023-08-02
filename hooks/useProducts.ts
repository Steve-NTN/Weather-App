import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import { getTemplate } from "@/services/storeApi";
import { ProductType } from "@/types";
import { StoreContext } from "@/components/ui/Store";
const useProducts = () => {
  const { push } = useRouter();
  const { productsFilter } = useContext(StoreContext);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // LẤY DANH SÁCH SẢN PHẨM
  const onFetchProducts = async () => {
    setLoading(true);
    let { searchKey, category } = productsFilter;
    await getTemplate(
      `products?${searchKey ? `searchKey=${searchKey}` : ""}${
        category ? `category=${category}` : ""
      }`
    )
      .then((res) => {
        setLoading(false);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  };

  // XỬ LÝ KHI BẤM VÀO SẢN PHẨM
  const onClickProduct = (product: ProductType) => {
    push(`/store/${product.id}`);
  };

  useEffect(() => {
    onFetchProducts();
  }, [productsFilter]);

  return { products, loading, onClickProduct };
};

export default useProducts;
