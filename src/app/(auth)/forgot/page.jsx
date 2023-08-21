'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import PasswordInput from '@/components/password-input';
import ThemeToggle from '@/components/theme-toggle';

import { PaperPlaneTilt } from '@phosphor-icons/react';

const Forgot = () => {
  return (
    <main className="w-full h-full flex flex-col justify-between items-center py-6 px-3 select-none">
      <div className="absolute top-5 left-5">
        <ThemeToggle />
      </div>
      {/* Spacer Div */}
      <div className="w-full"></div>
      <Card className="w-full max-w-[670px] p-4 md:p-16 rounded-xl shadow-md flex-col justify-center items-center">
        <CardContent className="w-full">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Forgot Password?</h1>
            <p className="text-gray-400 dark:text-white/50">
							Enter your email to reset your password.
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div>
						<Input type="text" placeholder="Email" />
            </div>
            <div>
              <Button className="w-full mt-4">
                <PaperPlaneTilt className="h-5 w-5 mr-2" />
                Send email
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-gray-400 text-sm">
          <p className="text-center w-full mt-4" asChild>
            Already have an account?&nbsp;
            <Link href="/signin" className="text-primary">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
      <footer>
        <span className="text-sm text-gray-400 font-medium">
          &copy; {new Date().getFullYear()}&nbsp; Polarized Dashboard
        </span>
      </footer>
    </main>
  );
};

export default Forgot;
