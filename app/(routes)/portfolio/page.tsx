import { Portfolio } from "@/components";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Steve Nguyen Portfolio",
  icons: {
    icon: "/icons/portfolio.png",
  },
  openGraph: {
    title: "Steve Nguyen Portfolio",
    description: "Portfolio made by Steve Nguyen",
    images: ["/imgs/sharelink_cv.png"],
  },
};

const Page = async (props: Props) => {
  return <Portfolio />;
};

export default Page;
