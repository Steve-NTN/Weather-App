import { ProductDetail } from "@/components";

type Props = { params: { productId?: string } };

const Page = ({ params: { productId } }: Props) => {
  return <ProductDetail {...{ productId }} />;
};

export default Page;
