import { ProductFiltersType } from "../../../types/product";

export const mapFiltersToQueryParams = (
  filters: Partial<ProductFiltersType>
) => {
  return {
    ...filters,
    ...(filters.minPrice && {
      price_min: filters.minPrice,
    }),
    ...(filters.maxPrice && {
      price_max: filters.maxPrice,
    }),
  };
};
