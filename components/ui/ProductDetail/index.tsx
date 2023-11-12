"use client";

import { Header } from "@/components";
import { ContentContainer } from "@/components";
import Footer from "@/components/Footer";
import { Gallery, Information } from "./components";

type Props = {
  productDetail?: any;
};

const ProductDetail = ({ productDetail }: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <ContentContainer className="p-3 md:p-4">
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Gallery {...{ productDetail }} />
          <Information {...{ productDetail }} />
        </div>
      </ContentContainer>

      <Footer />
    </div>
  );
};

export default ProductDetail;
