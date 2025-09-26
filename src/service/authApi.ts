
import { API_CONFIG } from '@/config/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  fullName: string;  
  email: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    token?: string; 
    id?: string;   
    fullName?: string;
    email?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}


export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_CONFIG.BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: API_CONFIG.ENDPOINTS.AUTH.LOGIN,
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (userData) => ({
        url: API_CONFIG.ENDPOINTS.AUTH.REGISTER,
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
