'use client';

import { useCallback } from 'react';

export function useSocialAuth() {
  const handleGoogleLogin = useCallback(() => {
    //  Google OAuth logic 
    console.log('Google login clicked');
    
  }, []);

  const handleFacebookLogin = useCallback(() => {
    // Facebook OAuth logic 
    console.log('Facebook login clicked');
  }, []);

  return { handleGoogleLogin, handleFacebookLogin };
}
