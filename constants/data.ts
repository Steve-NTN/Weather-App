import { getCountryFlag } from "@/utils/stringHelpers";

export const COUNTRY_CODES = {
  en: "en",
  vi: "vi",
};

export const COUNTRIES = [
  {
    value: COUNTRY_CODES.en,
    label: "English",
    matchCode: "gb",
    src: getCountryFlag("gb"),
  },
  {
    value: COUNTRY_CODES.vi,
    label: "Việt Nam",
    matchCode: "vn",
    src: getCountryFlag("vn"),
  },
];
