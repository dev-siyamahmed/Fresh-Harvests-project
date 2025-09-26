
'use client';

import React, { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setCredentials } from '@/redux/features/authSlice';
import Input from '../ui/Input';
import { useUI } from '@/hooks/useUI';
import toast from 'react-hot-toast';
import { FacebookIcon, GoogleIcon, SocialButton } from '../common/SocialButton';
import { useLoginMutation } from '@/service/authApi';
import { useSocialAuth } from '@/hooks/useSocialAuth';


interface LoginFormProps {
  onClose?: () => void;
  onSwitchToRegister?: () => void;
}

export default function LoginForm({ onClose, onSwitchToRegister }: LoginFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const { closeAuthModal, } = useUI();
  const { handleGoogleLogin, handleFacebookLogin } = useSocialAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await login(formData).unwrap();
      console.log("Login Response:", response);

      if (response?.success && response?.data?.token) {

        dispatch(
          setCredentials({
            user: { email: formData.email },
            token: response.data.token,
          })
        );

        //  Toast 
        toast.success(response.message || 'User Login Successfull !', {
          position: "top-center"
        });

        // close Modal 
        closeAuthModal();

        if (onClose) onClose();
      } else {
        setErrors({ form: 'Login failed. Please try again.' });
      }
    } catch (err: unknown) {
      console.error("Login error:", err);
      const error = err as { data?: { message?: string } };
      setErrors({ form: error.data?.message || 'Login failed. Please try again.' });
    }
  };

  return (
    <div className="space-y-6">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          error={errors.email}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          error={errors.password}
        />

        {errors.form && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
            {errors.form}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#FF6A1A]  disabled:bg-[#FF6A1A] text-[#FFFFFF] font-medium py-4 px-8 rounded-lg transition-colors"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {/* Social Login Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 border-t border-[#D9D9D9]"></div>
          <span className="text-sm text-[#4A4A52] ">Or Sign In with</span>
          <div className="flex-1 border-t border-[#D9D9D9]"></div>
        </div>


        <div className="grid grid-cols-2 gap-3">
          <SocialButton provider="Google" icon={<GoogleIcon />} onClick={handleGoogleLogin} />
          <SocialButton provider="Facebook" icon={<FacebookIcon />} onClick={handleFacebookLogin} />

        </div>

        <div className="text-center mt-6">
          <span className="text-sm text-gray-600">
            Don&apos;t  have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              Sign Up
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}