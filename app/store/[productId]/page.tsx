export const dynamic = 'force-dynamic'

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

const Page = ({ params: { productId } }: Props) => {
  return <ProductDetail {...{ productId }} />;
};

export default Page;
