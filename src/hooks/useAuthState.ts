'use client';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { logout } from '@/redux/features/authSlice';
import { useUI } from './useUI';
import { useLoginMutation, useRegisterMutation } from '@/service/authApi';

interface MutationState {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

/**
 * A reusable hook that provides authentication-related state and actions.
 */
export function useAuthState() {
  // Redux auth state
  const { user, token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // UI modal state
  const { isAuthModalOpen, openAuthModal, closeAuthModal } = useUI();

  // RTK Query mutations
  const [login, loginRawState] = useLoginMutation();
  const [register, registerRawState] = useRegisterMutation();

  // Normalize mutation states
  const normalizeState = (state: typeof loginRawState): MutationState => ({
    isLoading: state.isLoading,
    isError: state.isError,
    error: state.error,
  });

  /**
   * Logout the current user
   */
  const handleLogout = () => dispatch(logout());

  return {
    /** Authenticated user object */
    user,
    /** Authentication token */
    token,

    /** Authentication modal state */
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal,

    /** Login action and state */
    login,
    loginState: normalizeState(loginRawState),

    /** Register action and state */
    register,
    registerState: normalizeState(registerRawState),

    /** Logout action */
    logout: handleLogout,
  };
}
