import { Portfolio } from "@/components";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Steve NTN Portfolio",
  icons: {
    icon: "/icons/portfolio.png",
  },
  openGraph: {
    title: "Steve NTN Portfolio",
    description: "Portfolio made by NTN",
    images: ["/imgs/sharelink_cv.png"],
  },
};

const Page = async (props: Props) => {
  return <Portfolio />;
};

export default Page;
