import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/dist/query/react";

import { FAKE_STORE_URL } from "../api";
import { mapFiltersToQueryParams } from "../utils/product/filtering";

import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { CreateProductType, ProductFiltersType, ProductType } from "../../types/product";
import { CategoryType } from "../../types/category";
import { JwtType, LoginType, SignUpType, UserType } from "../../types/user";

export const fakeStoreApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: FAKE_STORE_URL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<
      ProductType[],
      Partial<ProductFiltersType>
    >({
      query: (filters) => ({
        url: "products",
        params: {
          ...mapFiltersToQueryParams(filters),
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product" as const, id })),
              "Product",
            ]
          : ["Product"],
    }),
    getCategories: builder.query<CategoryType[], void>({
      query: () => ({
        url: "categories",
      }),
    }),
    getProductById: builder.query<ProductType, number>({
      query: (id: number) => ({
        url: `products/${id}`,
      }),
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),
    createProduct: builder.mutation<ProductType, CreateProductType>({
      query: (productData: CreateProductType) => ({
        url: "products",
        method: "POST",
        body: productData,
      }),
    }),
    updateProduct: builder.mutation<
      ProductType,
      Partial<CreateProductType> & Pick<ProductType, "id">
    >({
      query: ({ id, ...productData }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: productData,
      }),
      invalidatesTags: (_r, _error, arg) => [{ type: "Product", id: arg.id }],
    }),
    deleteProduct: builder.mutation<boolean, number>({
      query: (id: number) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    logIn: builder.mutation<JwtType, LoginType>({
      query: (loginData: LoginType) => ({
        url: "auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
    getProfile: builder.query<UserType, JwtType>({
      query: (jwt: JwtType) => ({
        url: "auth/profile",
        headers: {
          Authorization: `Bearer ${jwt.access_token}`,
        },
      }),
    }),
    signUp: builder.mutation<JwtType, SignUpType>({
      async queryFn(signUpData: SignUpType, _api, _options, fetchWithBQ) {
        const response = await fetchWithBQ({
          url: "users",
          method: "POST",
          body: signUpData,
        });
        if (response.error) {
          return { error: response.error as FetchBaseQueryError };
        }
        const jwt = (await fetchWithBQ({
          url: "auth/login",
          method: "POST",
          body: { email: signUpData.email, password: signUpData.password },
        })) as QueryReturnValue<JwtType, any, any>;
        if (jwt.error) {
          return { error: jwt.error as FetchBaseQueryError };
        }
        return jwt;
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useCreateProductMutation,
  useLogInMutation,
  useGetProfileQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetProductByIdQuery,
  useLazyGetProfileQuery,
  useSignUpMutation,
} = fakeStoreApi;
