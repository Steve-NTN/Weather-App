import { IconType } from "react-icons";

export interface AppType {
  label: string;
  link: string;
  Icon: IconType;
}

export type ProductType = {
  id: string;
  name: string;
  description?: string;
  img: string;
  category: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export type ProductCategoryType = string;

export type ProductsFilterType = {
  searchKey?: string;
  category?: string;
};

// GIỎ HÀNG
export type CartType = {
  cart: CartProductType[];
};

export type CartProductType = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};
