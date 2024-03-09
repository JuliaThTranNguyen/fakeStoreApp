import { CreateProductType, ProductType } from "../../../types/product";

const handeUpdateProductValues = (
  product: ProductType
): CreateProductType => {
  const { title, description, price, images, category } = product;
  return {
    title,
    description,
    price: price.toString(),
    images,
    categoryId: category.id.toString(),
  };
};

export default handeUpdateProductValues;
