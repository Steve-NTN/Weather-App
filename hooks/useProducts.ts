import { useContext, useEffect, useState } from "react";

import { getTemplate } from "@/services/storeApi";
import { ProductType } from "@/types";
import { StoreContext } from "@/components/ui/Store";;

const useProducts = () => {
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


  useEffect(() => {
    onFetchProducts();
  }, [productsFilter]);

  return { products, loading };
};

export default useProducts;
