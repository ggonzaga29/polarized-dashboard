import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva(
  [
    'inline-flex items-center gap-2 justify-center font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        filled: ['bg-[#1C1C1C]', 'text-white', "hover:bg-[#2C2C2C]"],
				outlined: ['border', 'text-[#1C1C1C]', 'hover:bg-[#1C1C1C]'],
				gray: ['bg-[#F5F5F5]', 'text-[#1C1C1C]', 'hover:bg-[#E5E5E5]'],
				ghost: ['text-[#1C1C1C]', 'hover:bg-[#1C1C1C]'],
      },

      size: {
        sm: ['px-2', 'py-1', 'rounded', "text-sm"],
        md: ['px-4', 'py-2', 'rounded-xl'],
        lg: ['px-6', 'py-4', 'rounded-2xl'],
      },
    },
  },
);

const Button = ({ variant, size, className, children }) => {
  if (!variant) variant = 'primary';
  if (!size) size = 'md';

  return (
    <button className={twMerge(button({ variant, size }), className)}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
