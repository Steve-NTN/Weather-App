"use client";

import { Header } from "@/components";
import { ContentContainer } from "../Store/components";
import Footer from "@/components/Footer";
type Props = {};

const ProductDetail = (props: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

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

export default ProductDetail;
