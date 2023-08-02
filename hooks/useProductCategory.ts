import { useContext, useEffect, useState } from "react";

import { getTemplate } from "@/services/storeApi";
import { ProductCategoryType } from "@/types";
import { StoreContext } from "@/components/ui/Store";

const useProductCategory = () => {
  const { productsFilter } = useContext(StoreContext);
  const [categories, setCategories] = useState<ProductCategoryType[]>([]);

  // LẤY DANH SÁCH LOAI SẢN PHẨM
  const onFetchProductCategories = async () => {
    await getTemplate(`product_category`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    onFetchProductCategories();
  }, []);

  return { categories };
};

export default useProductCategory;
