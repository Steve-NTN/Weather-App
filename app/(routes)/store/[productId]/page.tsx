import { ProductDetail } from "@/components";
import { getProductDetail } from "@/lib/product";
import { Metadata } from "next";

type Props = { params: { productId?: string } };

export const metadata: Metadata = {
  title: "Weather Store",
  openGraph: {
    title: "Weather Store",
    description: "Weather App made by NTN",
  },
};

const Page = async (props: Props) => {
  let {
    params: { productId },
  } = props;

  let productDetail = (await getProductDetail({ id: productId })).data;
  return <ProductDetail {...{ productDetail }} />;
};

export default Page;
