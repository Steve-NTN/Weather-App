export const formatMoney = (value: string | number) => {
  return `${value
    ?.toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}${currentMoneyUnit()}`;
};

export const currentMoneyUnit = () => {
  return "đ";
};
