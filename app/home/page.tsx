"use client"; // This is a client component 👈🏽

import { TiWeatherPartlySunny, TiShoppingCart } from "react-icons/ti";
import { AppType } from "@/types";
import { useRouter } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
  const { push } = useRouter();
  const apps: AppType[] = [
    { label: "Store", link: "/store", Icon: TiShoppingCart },
    { label: "Weather", link: "/weather", Icon: TiWeatherPartlySunny },
  ];

  const onClickApp = (link: string) => {
    push(link);
  };

  return (
    <div className="container lg-auto mx-auto">
      <p className="font-bold text-4xl text-center my-7">NTN App</p>

      <div className="grid grid-cols-2 gap-4 px-4">
        {apps.map((app) => {
          let { link, label, Icon } = app;
          return (
            <div
              className="app-box text-center p-4 bg-slate-200 rounded cursor-pointer"
              key={link}
              onClick={() => onClickApp(link)}
            >
              <p className="font-bold">{label}</p>
              <Icon className="mx-auto mt-4 w-14 h-14"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
