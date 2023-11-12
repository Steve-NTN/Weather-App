"use client"; // This is a client component 👈🏽

import { TiWeatherPartlySunny, TiShoppingCart } from "react-icons/ti";
import { MdContactPage } from "react-icons/md";
import { AppType } from "@/types";
import { useRouter } from "next/navigation";
import "./Home.scss";
import { StyledAppBox } from "./Home.styles";

type Props = {};

const Page = (props: Props) => {
  const { push } = useRouter();
  const apps: AppType[] = [
    { label: "Portfolio", link: "/portfolio", Icon: MdContactPage },
    { label: "Store", link: "/store", Icon: TiShoppingCart },
    { label: "Weather", link: "/weather", Icon: TiWeatherPartlySunny },
  ];

  const onClickApp = (link: string) => {
    push(link);
  };

  return (
    <section>
      <p className="font-bold text-4xl text-center my-7">NTN App</p>

      <div className="grid grid-cols-2 gap-4 px-4">
        {apps.map((app) => {
          let { link, label, Icon } = app;
          return (
            <StyledAppBox
              className="app-box text-center p-4 bg-slate-200 rounded cursor-pointer"
              key={link}
              onClick={() => onClickApp(link)}
            >
              <p className="font-bold">{label}</p>
              <Icon className="mx-auto mt-4 w-14 h-14" />
            </StyledAppBox>
          );
        })}
      </div>

      <div className="air air1"></div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>
    </section>
  );
};

export default Page;
