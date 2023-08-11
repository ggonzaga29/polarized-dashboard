'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import PasswordInput from '@/components/password-input';
import ThemeToggle from '@/components/theme-toggle';

const Signup = () => {
  return (
    <main className="w-full h-full flex flex-col justify-between items-center py-6 px-3">
      <div className="absolute top-5 left-5">
        <ThemeToggle />
      </div>
      {/* Spacer Div */}
      <div className="w-full"></div>
      <Card className="w-full max-w-[670px] p-8 md:p-16 rounded-xl shadow-md flex-col justify-center items-center">
        <CardContent className="w-full">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <p className="text-gray-400 dark:text-white/50">
							Create a new account to get started.
            </p>
          </div>
          <div class="flex gap-2 w-full my-6">
            <Button variant="outline" className="w-full text-sm font-light">
              <Image
                src="/google.svg"
                alt="Google"
                width="1"
                height="1"
                className="h-4 w-4 mr-2"
              />
              Sign in with Google
            </Button>

            <Button variant="outline" className="w-full text-sm font-light">
              <Image
                src="/facebook.svg"
                alt="Google"
                width="1"
                height="1"
                className="h-4 w-4 mr-2"
              />
              Sign in with Facebook
            </Button>
          </div>
          <div>
            <div className="w-full my-8 flex items-center justify-center gap-3">
              <div className="h-[1px] flex-1 bg-gray-200 dark:bg-white/50 rounded"></div>
              <span className="text-shade-20 text-sm text-gray-400 dark:text-white/50">
                Or with Email
              </span>
              <div className="h-[1px] flex-1 bg-gray-200 dark:bg-white/50 rounded"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Input type="text" placeholder="Email" />
            </div>
            <div>
              <PasswordInput />
            </div>
            <div className="text-right">
              <span className="text-sm cursor-pointer text-primary">
                Forgot Password?
              </span>
            </div>
            <div>
              <Button className="w-full">Sign in</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-gray-400 text-sm">
          <p className="text-center w-full mt-4" asChild>
            Already have an account?&nbsp;
            <Link href="/signin" className="text-primary">Sign in</Link>
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

export default Signup;
