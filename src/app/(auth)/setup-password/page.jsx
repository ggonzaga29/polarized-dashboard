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

import { PencilSimple } from '@phosphor-icons/react';

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
            <h1 className="text-2xl font-bold">Setup New Password</h1>
            <p className="text-gray-400 dark:text-white/50">
							Setup a new password for your account. 
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <div>
              <PasswordInput placeholder="Password" />
            </div>
            <div className="my-3 space-y-2 px-1">
              <div className="flex gap-2">
                {/* Green */}
                {/* <span className="h-1 rounded flex-1 bg-green-500"></span> */}
                <span className="h-1 rounded flex-1 bg-gray-200 dark:bg-white/50"></span>
                <span className="h-1 rounded flex-1 bg-gray-200 dark:bg-white/50"></span>
                <span className="h-1 rounded flex-1 bg-gray-200 dark:bg-white/50"></span>
                <span className="h-1 rounded flex-1 bg-gray-200 dark:bg-white/50"></span>
              </div>
              <div className="text-left">
                <span className="text-sm text-gray-400 dark:text-white/50">
                  Use 8 characters with a mix of letters, numbers & symbols.
                </span>
              </div>
            </div>
            <div>
              <PasswordInput placeholder="Repeat Password" />
            </div>
            <div className="items-top flex space-x-2 mt-2 px-1">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
            <div>
              <Button className="w-full mt-4">
                <PencilSimple className="h-5 w-5 mr-2" />
                Setup new password
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
