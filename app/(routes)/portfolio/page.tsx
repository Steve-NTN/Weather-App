import { Portfolio } from "@/components";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "My Portfolio",
  openGraph: {
    title: "My Portfolio",
    description: "My Portfolio made by NTN",
  },
};

const Page = async (props: Props) => {
  return <Portfolio />;
};

export default Page;
