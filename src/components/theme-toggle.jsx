'use client';

import * as React from 'react';
import { Moon, Sun } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export default function ThemeToggle({...props}) {
	const { setTheme, theme } = useTheme();

	const toggleTheme = () => {
		console.log("theme", theme);
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	return (
		<Button variant='outline' size='icon' onClick={toggleTheme} {...props}>
			<Moon
				className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
			/>
			<Sun
				className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-tint-100'
			/>
			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}