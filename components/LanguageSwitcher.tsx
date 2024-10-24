import { COUNTRIES } from "@/constants/data";
import { convertLangToCountry, getCountryFlag } from "@/utils/stringHelpers";
import { IconButton, Menu, MenuItem } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import React, { HTMLAttributes, MouseEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const LanguageSwitcher = (props: HTMLAttributes<HTMLDivElement>) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => {
    setAnchorEl(null);
  };

  const onLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    onClose();
  }, [language]);

  return (
    <div {...props}>
      <IconButton onClick={handleClick} className="focus:outline-none p-1">
        <Image
          src={getCountryFlag(convertLangToCountry(i18n.language)).src}
          alt="img"
          width={16}
          height={12}
        />

        <FaChevronDown
          className={classNames(
            "text-yellow-500 text-base ml-2 transition-all",
            open ? " rotate-180" : "rotate-0"
          )}
        />
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
        className="mt-2"
      >
        {COUNTRIES.map((country) => (
          <MenuItem
            value={country.value}
            key={country.value}
            className="flex gap-2 items-center"
            onClick={() => onLanguageChange(country.value)}
          >
            <Image src={country.src.src} alt="img" width={16} height={12} />
            {country.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default LanguageSwitcher;
