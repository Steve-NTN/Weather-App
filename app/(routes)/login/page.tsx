
import { Login } from "@/components";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Login",
  icons: {
    icon: "/icons/portfolio.png",
  },
  openGraph: {
    title: "Login",
  },
};

const Page = async (props: Props) => {
  return (
    <>
      <Login />
    </>
  );
};

export default Page;
