import { API_CONFIG } from '@/config/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Category {
  id: string;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryResponse {
  success: boolean;
  message: string;
  data: Category[];
}

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
  }),
  tagTypes: ['Category'],
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse, void>({
      query: () => API_CONFIG.ENDPOINTS.CATEGORIES,
      providesTags: ['Category'],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
