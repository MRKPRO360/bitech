'use client';

import Label from '@/components/form/Label';
import Checkbox from '@/components/form/input/Checkbox';
import Input from '@/components/form/input/InputField';
import Cta from '@/components/ui/core/Cta';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import { useUser } from '@/context/UserContext';
import { useSocialLogin } from '@/hooks/useSocialLogin';
import { signinUser } from '@/services/authService';
import { ChevronLeftIcon, EyeClosedIcon, EyeIcon } from 'lucide-react';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';

export default function SignInForm() {
  const { setIsLoading } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const termsChecked = watch('terms', false);

  // REDIRECT USER IN AUTH GUARD ROUTE
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirectPath');
  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await signinUser(data);

      if (res.success) {
        toast.success('Logged in successfully!');
        setIsLoading(true);
        // REDIRECTING USER
        router.push(redirect || '/dashboard');
        setIsLoading(true);
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err?.message || 'Something went wrong');
    }
  };

  const { handleSocialLogin } = useSocialLogin();

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full  mx-auto max-w-lg sm:pt-10  mb-5">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700"
        >
          <ChevronLeftIcon />
          Back to Home
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <SecondaryHeading className="mb-2">Sign In</SecondaryHeading>
            <Para>Enter your email and password to sign in!</Para>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
              <button
                onClick={() => handleSocialLogin('google')}
                className="cursor-pointer inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 "
              >
                <FcGoogle className="text-xl" />
                Sign up with Google
              </button>
              <button
                onClick={() => handleSocialLogin('facebook')}
                className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 cursor-pointer"
              >
                <FaFacebookF className="text-blue-500 text-xl" />
                Sign up with Facebook
              </button>
            </div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 "></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="p-2 text-gray-400 bg-white  sm:px-5 sm:py-2">
                  Or
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="email">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    error={errors.email}
                    register={register('email', {
                      required: 'Email is required',
                    })}
                    placeholder="info@gmail.com"
                    type="email"
                  />
                </div>
                <div>
                  <Label htmlFor="password">
                    Password <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      register={register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters',
                        },
                      })}
                      error={errors.password}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30  cursor-pointer right-4 top-2"
                    >
                      {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      register={register('terms')}
                      className="w-5 h-5"
                      value={termsChecked}
                    />
                    <span className="block font-normal">Keep me logged in</span>
                  </div>
                  <Link href="/reset-password" className="text-sm">
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Cta
                    isSubmitting={isSubmitting}
                    submittingText="Signing In..."
                    type="submit"
                    text="Sign In"
                    renderIcon={false}
                  />
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-base font-semibold text-center sm:text-start">
                Don&apos;t have an account?
                <Link
                  href="/signup"
                  className="underline underline-offset-4  text-brand-500 hover:text-brand-600 dark:text-brand-400 decoration-2 decoration-primary"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
