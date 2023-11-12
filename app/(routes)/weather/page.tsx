import Head from "next/head";

import { Weather } from "@/components";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Weather App",
  icons: {
    icon: '/icons/animation_weather.gif',
  },
  openGraph: {
    title: "Weather App",
    description: "Weather App made by NTN",
    images: ["../assets/imgs/sunset.jpg"],
  },
};

const Page = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta property="og:description" content="Weather App made by NTN" />
        <meta property="og:image" content="../assets/imgs/sunset.jpg" />
      </Head>
      <Weather />
    </div>
  );
};

export default Page;
