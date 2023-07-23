import { Weather } from "@/components";
import Head from "next/head";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Head>
        <meta property="og:title" content="Weather App" />
        <meta property="og:description" content="Weather App" />
        <meta property="og:image" content="../assets/imgs/sunset.jpg" />
      </Head>
      <Weather />
    </>
  );
};

export default Page;
