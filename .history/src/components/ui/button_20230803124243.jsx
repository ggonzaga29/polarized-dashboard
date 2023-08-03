import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva(['font-medium'], {
  variants: {
    intent: {
      primary: ['bg-[#1C1C1C]', 'text-white'],
      secondary: ['bg-[#1C1C1C]', 'text-white'],
    },

    size: {
      sm: ['px-2', 'py-1', 'rounded-md'],
      md: ['px-4', 'py-2', 'rounded-md'],
      lg: ['px-6', 'py-3', 'rounded-md'],
    },
  },
});

const Button = ({ intent, size, className }) => {
  if (!intent) intent = 'primary';
  if (!size) size = 'md';

  return (
    <button className={twMerge(button({ intent, size }), className)}>
      Button
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
