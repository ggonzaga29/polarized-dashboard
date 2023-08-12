'use client';

import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Eye, EyeSlash } from '@phosphor-icons/react';

const PasswordInput = React.forwardRef(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const combinedRef = node => {
    inputRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    inputRef.current.focus();
  };

  return (
    <>
      <div className="relative">
        <Input
          placeholder="Password"
          ref={combinedRef}
					type={showPassword ? 'text' : 'password'}
          {...props}
        />
        <div
          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? (
            <Eye className="h-5 w-5 text-gray-400 dark:text-white/50" />
          ) : (
            <EyeSlash className="h-5 w-5 text-gray-400 dark:text-white/50" />
          )}
        </div>
      </div>
    </>
  );
});

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
