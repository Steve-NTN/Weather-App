"use client";

import useStore from "@/hooks/useStore";
import {
  Banner,
  Header,
  ProductSearchBar,
  Products,
} from "./components";
import { createContext } from "react";
import { ProductsFilterType } from "@/types";
import Footer from "@/components/Footer";
import useLocalStorage from "@/hooks/useLocalStorage";
import ContentContainer from "@/components/ContentContainer";

type Props = {};

export const StoreContext = createContext<{
  showFilterBox: boolean;
  productsFilter: ProductsFilterType;
  onChangeFilterField: (updateData: any) => void;
  setShowFilterBox: (show: boolean) => void;
}>({
  showFilterBox: false,
  productsFilter: { searchKey: "" },
  onChangeFilterField: () => {},
  setShowFilterBox: () => {},
});

export default function Store({}: Props) {
  const { contextData } = useStore();
  useLocalStorage();

  return (
    <StoreContext.Provider value={contextData}>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />

        <ContentContainer>
          <Banner />
          
          {/* THANH TÌM KIẾM SẢN PHẨM */}
          <ProductSearchBar mt={2}/>

          {/* DANH SÁCH SẢN PHẨM */}
          <Products className="my-4" />
        </ContentContainer>

        <Footer />
      </div>
    </StoreContext.Provider>
  );
}
