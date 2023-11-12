import { Store } from "@/components";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Steve NTN shopping cart",
  icons: {
    icon: '/icons/animation_cart.gif',
  },
  openGraph: {
    title: "Steve NTN shopping cart",
    description: "Shopping cart made by NTN",
  },
};

const Page = (props: Props) => {
  return <Store />;
};

export default Page;
