export const API_CONFIG = {
    BASE_URL: 'https://api-fresh-harvest.code-commando.com/api/v1',
    ENDPOINTS: {
      AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/users/register',
      },
      CATEGORIES: '/category',
      PRODUCTS: '/products',
      PRODUCT_BY_ID: (id: string) => `/products/${id}`,
    },
  } as const;
  
  export const API_DEFAULTS = {
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
  } as const;
  