import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva(
  [
    'inline-flex items-center justify-center font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-[#1C1C1C]', 'text-white'],
        secondary: ['bg-[--black-80]', 'text-white'],
      },

      size: {
        sm: ['px-2', 'py-1', 'rounded-md'],
        md: ['px-4', 'py-2', 'rounded-md'],
        lg: ['px-6', 'py-3', 'rounded-md'],
      },
    },
  },
);

const Button = ({ intent, size, className, children }) => {
  if (!intent) intent = 'secondary';
  if (!size) size = 'md';

  return (
    <button className={twMerge(button({ intent, size }), className)}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
