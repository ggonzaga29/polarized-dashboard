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
        filled: ['bg-primary-brand', 'text-white', "hover:bg-[#2C2C2C]"],
				outlined: ['border border-black-10', 'text-[#1C1C1C]', 'hover:border-black-80'],
				gray: ['bg-black-5', 'text-black', 'hover:bg-black-110'],
				ghost: ['text-black'	],
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
