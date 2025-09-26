
"use client"
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    name,
    type = 'text',
    placeholder,
    error,
    className,
    containerClassName,
    labelClassName,
    inputClassName,
    value,
    onChange,
    ...rest
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = rest.id || name;
  const isPasswordField = type === 'password';
  const inputType = isPasswordField ? (showPassword ? 'text' : 'password') : type;

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={containerClassName}>
      {label && (
        <label
          htmlFor={inputId}
          className={`block text-[18px] font-normal font-questrial text-[#212337] mb-1 ${labelClassName || ''}`}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          name={name}
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full p-4 border border-[#D9D9D9] rounded-[8px] text-[18px] text-[#212337] placeholder-[#A6A6A6] focus:outline-none  ${
            isPasswordField ? 'pr-10' : ''
          } ${inputClassName || ''} ${className || ''}`}
          {...rest}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#212337] focus:outline-none"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
