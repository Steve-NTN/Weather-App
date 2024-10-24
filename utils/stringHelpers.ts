export const formatMoney = (value: string | number) => {
  return `${value
    ?.toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}${currentMoneyUnit()}`;
};

export const currentMoneyUnit = () => {
  return "đ";
};

export const getCountryFlag = (country: string) => ({
  src: `https://flagcdn.com/16x12/${country}.png`,
});

export const convertLangToCountry = (lang: string) => {
  switch (lang) {
    case "vi":
      return "vn";

    default:
      return "gb";
  }
};
