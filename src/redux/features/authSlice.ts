import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// set Cookie
const setCookie = (name: string, value: string, days: number = 7) => {
  if (typeof document === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

// retrive cookie value
const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Delete Cookie
const deleteCookie = (name: string) => {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

interface User {
  id?: string;
  fullName?: string;
  email?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  // isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: typeof document !== 'undefined' && getCookie('user') ? JSON.parse(getCookie('user') || '{}') : null,
  token: typeof document !== 'undefined' ? getCookie('token') : null,
  // isAuthenticated: typeof document !== 'undefined' && !!getCookie('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { 
    setCredentials: (state, action: PayloadAction<{ user: User; token: string | null }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      // state.isAuthenticated = !!token;
      
      // set cokkie
      if (token) {
        setCookie('token', token, 7); // expires 7 days
      }
      if (user) {
        setCookie('user', JSON.stringify(user), 7);
      }
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      // state.isAuthenticated = false;
      
      // cookie , then token and user remove 
      deleteCookie('token');
      deleteCookie('user');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;