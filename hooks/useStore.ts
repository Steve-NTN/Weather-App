import { ProductsFilterType } from "@/types";
import { useState } from "react";

const useStore = () => {
  const [productsFilter, setProductsFilter] = useState<ProductsFilterType>({
    searchKey: "",
    category: undefined,
  });
  const [showFilterBox, setShowFilterBox] = useState(false);

  // THAY ĐỔI BỘ LỌC
  const onChangeFilterField = (updateData: any = {}) => {
    setProductsFilter({ ...productsFilter, ...updateData });
  };

  const contextData = {
    showFilterBox,
    productsFilter,
    onChangeFilterField,
    setShowFilterBox,
  };

  return {
    showFilterBox,
    productsFilter,
    contextData,
    setShowFilterBox,
  };
};

export default useStore;
