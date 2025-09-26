'use client';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { openAuthModal, closeAuthModal, } from '@/redux/features/uiSlice';
import { useCallback } from 'react';

export function useUI() {
  const dispatch = useAppDispatch();
  const { isAuthModalOpen } = useAppSelector((state) => state.ui);
  
  // Auth Modal
  const handleOpenAuthModal = useCallback(() => {
    dispatch(openAuthModal());
  }, [dispatch]);
  
  const handleCloseAuthModal = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);

  
  return {
    isAuthModalOpen,
    openAuthModal: handleOpenAuthModal,
    closeAuthModal: handleCloseAuthModal,
  };
}