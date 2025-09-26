
'use client';

import { useState } from "react";
import { X } from "lucide-react";
import RegisterForm from "../auth/RegisterForm";
import LoginForm from "../auth/LoginForm";
import { useUI } from "@/hooks/useUI";


export default function AuthModal() {
  const [currentView, setCurrentView] = useState<'login' | 'register'>('login');
  const { isAuthModalOpen, closeAuthModal } = useUI();

  const handleClose = () => {
    closeAuthModal();
  };

  const switchToLogin = () => {
    setCurrentView('login');
  };

  const switchToRegister = () => {
    setCurrentView('register');
  };

  if (!isAuthModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[4px] p-8 w-full max-w-[478px] relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <h2 className="text-[32px] font-rubik font-semibold text-[#212337] text-center">
            {currentView === 'register' ? 'Register' : 'Login'}
          </h2>
         
        </div>

        {/* Form Content */}
        {currentView === 'register' ? (
          <RegisterForm
            onSwitchToLogin={switchToLogin} 
            onClose={handleClose}
          />
        ) : (
          <LoginForm 
            onSwitchToRegister={switchToRegister} 
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}