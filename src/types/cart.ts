import { ProductType } from './product';

export type CartType = {
  product: ProductType;
  quantity: number;
};