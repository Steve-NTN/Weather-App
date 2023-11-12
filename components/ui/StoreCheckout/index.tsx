"use client";

import Footer from "@/components/Footer";
import { Header } from "../Store/components";
import { CheckoutForm } from "./components";
import ContentContainer from "@/components/ContentContainer";

type Props = {};

const StoreCheckout = (props: Props) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header hiddenCart={true} />

      <ContentContainer className="p-4">
        {/* THANH TÌM KIẾM SẢN PHẨM */}
        {/* <ProductSearchBar /> */}
        <CheckoutForm />

        {/* DANH SÁCH SẢN PHẨM */}
        {/* <Products className="my-4" /> */}
      </ContentContainer>

      <Footer />
    </div>
  );
};

export default StoreCheckout;
