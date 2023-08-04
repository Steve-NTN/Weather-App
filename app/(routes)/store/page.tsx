import { Store } from "@/components";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Weather Store",
  openGraph: {
    title: "Weather Store",
    description: "Weather App made by NTN",
  },
};

const Page = (props: Props) => {
  return <Store />;
};

export default Page;
