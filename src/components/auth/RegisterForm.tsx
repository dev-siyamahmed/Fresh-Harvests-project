
'use client';

import React, { useState } from 'react';
import Input from '../ui/Input';
import { useAppDispatch } from '@/redux/hooks';
import { setCredentials } from '@/redux/features/authSlice';
import { useUI } from '@/hooks/useUI';
import { useRegisterMutation } from '@/service/authApi';
import { FacebookIcon, GoogleIcon, SocialButton } from '../common/SocialButton';
import toast from 'react-hot-toast';
import { useSocialAuth } from '@/hooks/useSocialAuth';


interface RegisterFormProps {
  onClose?: () => void;
  onSwitchToLogin?: () => void;
}

export default function RegisterForm({ onClose, onSwitchToLogin }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const { closeAuthModal } = useUI();
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await register(formData).unwrap();
      console.log("Register Response:", response);

      if (response?.success && response?.data?.id) {
        dispatch(
          setCredentials({
            user: {
              id: response.data.id,
              fullName: response.data.fullName || '',
              email: response.data.email || formData.email,
            },
            token: response.data.token || null, // register হলে token নাই
          })
        );

        toast.success(response.message || 'Register Successfull!', {
          position: "top-center"
        });
        closeAuthModal();
        if (onClose) onClose();
      } else {
        setErrors({ form: 'Registration failed. Please try again.' });
      }
    }  catch (err: unknown) {
      console.error("Register error:", err);
      const error = err as { data?: { message?: string } };
      setErrors({ form: error.data?.message || 'Registration failed. Please try again.' });
    }
  };


  return (
    <div className="space-y-6">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
          error={errors.fullName}
        />

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
          {isLoading ? 'Creating Account...' : 'Register'}
        </button>
      </form>

      {/* Social Login Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 my-4">
          <div className="flex-1 border-t border-[#D9D9D9]"></div>
          <span className="text-sm text-[#4A4A52] ">Or Sign Up with</span>
          <div className="flex-1 border-t border-[#D9D9D9]"></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SocialButton
            provider="Google"
            icon={<GoogleIcon />}
            onClick={handleGoogleLogin}
          />
          <SocialButton
            provider="Facebook"
            icon={<FacebookIcon />}
            onClick={handleFacebookLogin}
          />
        </div>
 
        <div className="text-center mt-4 font-rubik ">
          <span className="text-[14px] text-[#212337]">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-[#FF6A1A] font-medium"
            >
              Log In
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}