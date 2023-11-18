import { useContext, useState } from "react";
import useProductCategory from "@/hooks/useProductCategory";
import { StoreContext } from "..";
import { Box } from "@mui/material";

type Props = {};

const Filter = (props: Props) => {
  const { productsFilter, setShowFilterBox, onChangeFilterField } =
    useContext(StoreContext);
  const [tmpproductsFilter, settmpproductsFilter] = useState({
    category: productsFilter.category,
  });
  const { categories } = useProductCategory();

  // THAY ĐỔI BỘ LỌC
  const onChangeTmpFilter = (updateData = {}) => {
    settmpproductsFilter({ ...tmpproductsFilter, ...updateData });
  };

  // XỬ LÝ KHI BẤM HOÀN TẤT
  const onSubmit = () => {
    onChangeFilterField({ category: tmpproductsFilter.category });
    setShowFilterBox(false);
  };

  return (
    <Box className="p-4 bg-white rounded w-full max-w-xl">
      <p className="font-bold">Bộ lọc</p>

      <div className="my-4">
        {/* LỌC THEO LOẠI SẢN PHẨM */}
        <div className="flex items-center gap-4">
          <p className="text-sm font-bold">Loại sản phẩm:</p>
          <div className="flex items-center gap-2">
            {categories.map((category, id) => {
              let isSelected = category === tmpproductsFilter.category;
              return (
                <div
                  key={id}
                  className={`py-1 px-3 border-2 rounded cursor-pointer ${
                    isSelected ? "bg-black text-white" : ""
                  }`}
                  onClick={() =>
                    onChangeTmpFilter({
                      category: isSelected ? null : category,
                    })
                  }
                >
                  {category}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* NÚT LƯU */}
      <div className="text-center">
        <button
          className="bg-black text-white text-sm p-2 rounded mx-auto"
          onClick={onSubmit}
        >
          Hoàn tất
        </button>
      </div>
    </Box>
  );
};

export default Filter;
