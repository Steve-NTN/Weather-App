import Drawer from "@/components/Drawer";
import { HeaderOptionType } from "@/types";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { StyledHeader, StyledOption } from "./Header.styles";
import { Container, Typography } from "@mui/material";
import Row from "@/components/Row";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

type Props = {};

const Header = (props: Props) => {
  const [options] = useState<HeaderOptionType[]>([
    { label: "home", id: "home" },
    { label: "about", id: "about" },
    { label: "technologies", id: "skills" },
    { label: "experience", id: "experience" },
    { label: "contact", id: "contact" },
  ]);
  const [showMobileOptions, setshowMobileOptions] = useState(false);
  const [hash, setHash] = useState<string>("home");

  const onClickOption = (id: string) => {
    setHash(id);
    setshowMobileOptions(false);
  };

  useEffect(() => {
    let section = document.getElementById(hash);
    window?.scrollTo({
      behavior: "smooth",
      top: (section?.offsetTop || 0) - 80,
    });
  }, [hash]);

  const onSetShowOptions = (open: boolean) => {
    setshowMobileOptions(open);
  };

  return (
    <StyledHeader className="py-4 bg-[#1f232d]">
      <Container maxWidth="xl" className="flex justify-between mx-auto">
        <Row justifyContent="space-between">
          <Typography className="logo_text">Portfolio</Typography>

          <div className="flex items-center gap-4">
            <div className="gap-4 hidden md:flex">
              <LanguageSwitcher />
              <Options {...{ options, hash, onClickOption }} />
            </div>
            <button
              className="rounded-full md:hidden"
              onClick={() => onSetShowOptions(true)}
            >
              <BiMenu className="text-white w-6 h-6" />
            </button>
          </div>
        </Row>
      </Container>

      <Drawer
        isOpen={showMobileOptions}
        setIsOpen={onSetShowOptions}
        title="Option"
      >
        <div className="p-4">
          <Options {...{ options, hash, onClickOption }} ismobile />
          <LanguageSwitcher className="mt-2" />
        </div>
      </Drawer>
    </StyledHeader>
  );
};

const Options = ({
  options = [],
  hash,
  onClickOption,
  ismobile = false,
}: {
  options: HeaderOptionType[];
  ismobile?: boolean;
  onClickOption?: any;
  hash?: string;
}) => {
  const { t } = useTranslation();

  return (
    <>
      {options.map((option) => {
        let { id, label } = option;
        let isSelectedOption = id === hash;

        return (
          <StyledOption
            key={id}
            className={`${
              isSelectedOption
                ? "text-yellow-500 selected"
                : ismobile
                ? "text-black"
                : "text-white"
            } font-bold cursor-pointer ${ismobile ? "mb-4" : ""}`}
            onClick={() => onClickOption(id)}
          >
            {t(label)}
          </StyledOption>
        );
      })}
    </>
  );
};

export default Header;
