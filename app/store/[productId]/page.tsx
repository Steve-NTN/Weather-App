import { ProductDetail } from "@/components";
import { Metadata } from "next";

type Props = { params: { productId?: string } };

export const metadata: Metadata = {
  title: "Weather Store",
  openGraph: {
    title: "Weather Store",
    description: "Weather App made by NTN",
  },
};

const Page = (props: Props) => {
  let {
    params: { productId },
  } = props;
  return <ProductDetail {...{ productId }} />;
};

export default Page;
