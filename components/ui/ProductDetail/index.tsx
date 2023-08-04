"use client";

import { Header } from "@/components";
import { ContentContainer } from "../Store/components";
import Footer from "@/components/Footer";
import { Gallery, Information } from "./components";
import useProductDetail from "@/hooks/useProductDetail";

type Props = {
  productId?: string;
};

const ProductDetail = ({ productId }: Props) => {
  const { productDetail } = useProductDetail({ productId });
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <ContentContainer className="p-3 md:p-4">
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Gallery {...{ productDetail }} />
          <Information {...{ productDetail }} />
        </div>

        {/* DANH SÁCH SẢN PHẨM */}
        {/* <Products className="my-4" /> */}
      </ContentContainer>

      <Footer />
    </div>
  );
};

export default ProductDetail;
