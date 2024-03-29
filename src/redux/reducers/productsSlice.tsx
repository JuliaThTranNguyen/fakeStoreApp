import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { ProductFiltersType, ProductsSortingOption, ProductType } from '../../types/product';
import { calculateTotalPages, getPaginatedProducts } from '../../commons/utils/product/pagination';
import { fakeStoreApi } from '../../commons/config/fakeStoreApi';

export const PRODUCTS_PER_PAGE = 12;

type ProductsState = {
  page: number;
  totalPages: number;
  filters: Partial<ProductFiltersType>;
  products: ProductType[];
  sort: ProductsSortingOption;
};

export const initialState: ProductsState = {
  products: [],
  filters: {
    title: '',
    categoryId: '',
  },
  page: 1,
  totalPages: 1,
  sort: 'none',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },

    setFilters: (
      state,
      action: PayloadAction<Partial<ProductFiltersType>>
    ) => {
      state.filters = action.payload;
      state.page = 1;
    },

    clearFilters: (state) => {
      state.filters = initialState.filters;
      state.page = 1;
    },

    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
      state.totalPages = calculateTotalPages(
        action.payload.length,
        PRODUCTS_PER_PAGE
      );
      state.page = 1;
    },

    incrementPage: (state) => {
      const shouldNotIncrement = state.page === state.totalPages;
      if (shouldNotIncrement) return;
      state.page++;
    },

    decrementPage: (state) => {
      const shouldNotDecrement = state.page === 1;
      if (shouldNotDecrement) return;
      state.page--;
    },

    setPage: (state, action: PayloadAction<number>) => {
      const newPage = action.payload;
      const shouldAllowPageChange = newPage >= 1 && newPage <= state.totalPages;
      if (shouldAllowPageChange) state.page = newPage;
    },

    setSort: (state, action: PayloadAction<ProductsSortingOption>) => {
      state.sort = action.payload;
      state.page = 1;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      fakeStoreApi.endpoints.getAllProducts.matchFulfilled,
      (state, { payload }) => {
        state.products = payload;
        state.totalPages = calculateTotalPages(
          state.products.length,
          PRODUCTS_PER_PAGE
        );
      }
    );
  },
});

export const {
  setTotalPages,
  setFilters,
  clearFilters,
  incrementPage,
  decrementPage,
  setProducts,
  setPage,
  setSort,
} = productsSlice.actions;

export const selectProducts = (state: ProductsState) => {
  const mapper: {
    [key: string]: (products: ProductType[]) => ProductType[];
  } = {
    none: (products) => products,
    priceAscending: (products) => _.orderBy(products, 'price', 'asc'),
    priceDescending: (products) => _.orderBy(products, 'price', 'desc'),
  };
  const source = mapper[state.sort](state.products);
  return getPaginatedProducts(source, state.page, PRODUCTS_PER_PAGE);
};

export const selectFilters = (state: ProductsState) => state.filters;

export const selectPaginationParams = (state: ProductsState) => {
  const { page, totalPages } = state;
  return { page, totalPages };
};
export const selectSort = (state: ProductsState) => state.sort;

export default productsSlice.reducer;
