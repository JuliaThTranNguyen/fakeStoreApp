import { CategoryType } from "./category";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryType;
  images: string[];
};

export interface ProductFiltersType {
  title: string;
  price: number;
  minPrice: number;
  maxPrice: number;
  categoryId: string;
}

export interface CreateProductType {
  title: string;
  price: string;
  description: string;
  images: string[];
  categoryId: string;
}

export type ProductsSortingOption = "none" | "priceAscending" | "priceDescending";
