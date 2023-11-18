
import { Register } from "@/components";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Register",
  icons: {
    icon: "/icons/portfolio.png",
  },
  openGraph: {
    title: "Register",
  },
};

const Page = async (props: Props) => {
  return (
    <>
      <Register />
    </>
  );
};

export default Page;
