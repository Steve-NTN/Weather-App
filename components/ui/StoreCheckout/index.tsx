"use client";

import Footer from "@/components/Footer";
import { ContentContainer, Header } from "../Store/components";

type Props = {};

const StoreCheckout = (props: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header hiddenCart={true} />

      <ContentContainer className="p-4">
        {/* THANH TÌM KIẾM SẢN PHẨM */}
        {/* <ProductSearchBar /> */}

        {/* DANH SÁCH SẢN PHẨM */}
        {/* <Products className="my-4" /> */}
      </ContentContainer>

      <Footer />
    </div>
  );
};

export default StoreCheckout;
