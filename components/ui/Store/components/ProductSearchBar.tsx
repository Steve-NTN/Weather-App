import { useContext, useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { StoreContext } from "..";
import { useSearchTerm } from "@/hooks/useSearchTerm";
import Filter from "./Filter";
import { Dialog, Stack, StackProps } from "@mui/material";
import Row from "@/components/Row";

const ProductSearchBar = (props: StackProps) => {
  const [keySearch, setKeySearch] = useState("");
  const { tmpValue } = useSearchTerm(keySearch, 1000);
  const { showFilterBox, onChangeFilterField, setShowFilterBox } =
    useContext(StoreContext);

  // XỬ LÝ ĐÓNG MÀN LỌC
  const onCloseFilterBox = () => {
    setShowFilterBox(false);
  };

  // XỬ LÝ MỞ MÀN LỌC
  const onOpenFilterBox = () => {
    setShowFilterBox(true);
  };

  // THỰC HIỆN GỌI API SEARCH SẢN PHẨM SAU KHI NHẬP 1S
  useEffect(() => {
    onChangeFilterField({ searchKey: tmpValue });
  }, [tmpValue]);

  return (
    <Row {...props}>
      <input
        className="bg-gray-50 border border-gray-300 rounded p-2 flex-1"
        placeholder="Search product"
        value={keySearch}
        onChange={(e) => setKeySearch(e.target.value)}
      />
      <button
        type="button"
        onClick={onOpenFilterBox}
        className="py-2 px-3 bg-red-600 rounded"
      >
        <FiFilter className="text-xl text-white" />
      </button>

      <Dialog
        open={showFilterBox}
        onClose={onCloseFilterBox}
        PaperProps={{ sx: { width: "100%" } }}
      >
        <Filter />
      </Dialog>
    </Row>
  );
};

export default ProductSearchBar;
