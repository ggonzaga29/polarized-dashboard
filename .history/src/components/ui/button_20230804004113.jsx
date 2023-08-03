import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const button = cva(
  [
    'inline-flex items-center gap-2 justify-center font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        filled: ['bg-primary-brand', 'text-white', "hover:bg-tint-10"],
				outlined: ['border border-shade-10', 'text-shade-100', 'hover:border-shade-80'],
				gray: ['bg-shade-5', 'text-black', 'hover:bg-shade-10'],
				ghost: ['text-black', 'hover:bg-shade-10'],
      },

      size: {
        sm: ['px-2', 'py-1', 'rounded-md', "text-sm"],
        md: ['px-4', 'py-2', 'rounded-xl'],
        lg: ['px-6', 'py-4', 'rounded-2xl'],
				icon: ['p-1', 'rounded'],
      },
    },
		defaultVariants: {
			variant: 'filled',
			size: 'md',
		}
  },
);

const Button = ({ asChild, variant, size, className, children }) => {
	const Component = asChild ? Slot : 'button';
	
	return (
    <Component className={twMerge(button({ variant, size }), className)}>
      {children}
    </Component>
  );
};

Button.displayName = 'Button';

export { Button };
