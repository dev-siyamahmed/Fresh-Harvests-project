import { API_CONFIG } from '@/config/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductResponse {
  success: boolean;
  message: string;
  data: Product[];
}

export interface SingleProductResponse {
  success: boolean;
  message: string;
  data: Product;
}

export interface ProductQueryParams {
  categoryId?: string;
  limit?: number;
  page?: number;
}

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, ProductQueryParams | void>({
      query: (params = {}) => {
        const searchParams = new URLSearchParams();
        if (params?.categoryId !== undefined) searchParams.append('categoryId', params.categoryId);
        const queryString = searchParams.toString();
        return `${API_CONFIG.ENDPOINTS.PRODUCTS}${queryString ? `?${queryString}` : ''}`;
      },
      providesTags: ['Product'],
    }),
    getProductById: builder.query<SingleProductResponse, string>({
      query: (id) => API_CONFIG.ENDPOINTS.PRODUCT_BY_ID(id),
      providesTags: (result, error, id) => [{ type: 'Product', id }],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
