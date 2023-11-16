import { ReactNode } from "react";
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

// USER
export type UserType = {
  name?: string;
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
  img: string;
};

export type HeaderOptionType = {
  label: string;
  id: string;
  url?: string;
};

export type SocialMediaType = {
  icon: IconType;
  link: string;
};

export type ExperienceType = {
  companyName?: string;
  location?: string;
  startTime?: string;
  endTime?: string;
  position: string;
  projects: ExperienceProject[];
};

export type ExperienceProject = {
  title: string;
  content?: {
    label: string;
    value: string | ReactNode;
  }[];
};
