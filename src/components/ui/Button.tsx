import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "outline"; 
  size?: "sm" | "md" | "lg"; 
  className?: string; 
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  const baseStyle =
    "rounded-md font-medium transition-all duration-200 focus:outline-none";

  const sizeStyle = {
    sm: "px-2 py-1 text-[10px] ",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  const variantStyle = {
    primary:
      "bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105",
    secondary:
      "w-full text-[#212337] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] text-[12px] lg:text-[18px] font-normal bg-white border border-[#D9D9D9] transition-colors duration-200 group-hover:bg-[#FF6A1A] group-hover:text-white",
    outline:
      "bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-50",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyle, sizeStyle[size], variantStyle[variant], className)}
    >
      {children}
    </button>
  );
}
