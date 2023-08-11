'use client';

import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Eye, EyeSlash } from '@phosphor-icons/react';

const PasswordInput = React.forwardRef(
  ({ strengthMeter = false, ...props }) => {
		const [showPassword, setShowPassword] = useState(false);
		const inputRef = useRef(null);

		const toggleShowPassword = () => {
			setShowPassword(!showPassword);
			inputRef.current.focus();
			inputRef.type = showPassword ? 'password' : 'text';
			console.log(inputRef.type)
		};

    return (
      <div className="relative">
        <Input type="password" ref={inputRef} placeholder="Password" />
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer" onClick={toggleShowPassword}>
          <EyeSlash className="h-5 w-5 text-gray-400 dark:text-white/50" />
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
