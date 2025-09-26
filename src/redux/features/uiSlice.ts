import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ToastType = 'success' | 'error' | 'info';

type ToastData = {
  id: string;
  message: string;
  type: ToastType;
};

interface UIState {
  // Auth Modal State
  isAuthModalOpen: boolean;
  
  // Toast State
  toasts: ToastData[];
}

const initialState: UIState = {
  isAuthModalOpen: false,
  toasts: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Auth Modal Actions
    openAuthModal: (state) => {
      state.isAuthModalOpen = true;
    },
    closeAuthModal: (state) => {
      state.isAuthModalOpen = false;
    },
    
    // Toast Actions
    addToast: (state, action: PayloadAction<{ message: string; type: ToastType }>) => {
      const { message, type } = action.payload;
      const id = Math.random().toString(36).substring(2, 9);
      state.toasts.push({ id, message, type });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { openAuthModal, closeAuthModal, addToast, removeToast } = uiSlice.actions;
export default uiSlice.reducer;