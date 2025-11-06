'use client';

import Label from '@/components/form/Label';
import Input from '@/components/form/input/InputField';
import Cta from '@/components/ui/core/Cta';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import { useUser } from '@/context/UserContext';
import { changeUserPassword, signinUser } from '@/services/authService';
import { ChevronLeftIcon } from 'lucide-react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function ChangePasswordForm() {
  const { setIsLoading } = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastID = toast.loading('Changing Password...');
    try {
      const res = await changeUserPassword(data);

      if (res.success) {
        toast.success('Password changed successfully!', { id: toastID });
        router.push('/dashboard');
        setIsLoading(true);
      } else {
        toast.error(res.message, { id: toastID });
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err?.message || 'Something went wrong', { id: toastID });
    }
  };

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
            <SecondaryHeading className="mb-2">
              Change Your Password
            </SecondaryHeading>
            <Para>Enter your new password to get new password!</Para>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="oldPassword">
                    Old Password <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="oldPassword"
                      type="text"
                      placeholder="Enter your old password"
                      register={register('oldPassword', {
                        required: 'Old password is required',
                        minLength: {
                          value: 6,
                          message: 'Old password must be at least 6 characters',
                        },
                      })}
                      error={errors.oldPassword}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="newPassword">
                    Old Password <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type="text"
                      placeholder="Enter your new password"
                      register={register('newPassword', {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'New password must be at least 6 characters',
                        },
                      })}
                      error={errors.newPassword}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link href="/reset-password" className="text-sm">
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Cta
                    isSubmitting={isSubmitting}
                    submittingText="Changing..."
                    type="submit"
                    text="Change Password"
                    renderIcon={false}
                  />
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-base font-semibold text-center sm:text-start">
                Don&apos;t want to change password? Go to &nbsp;
                <Link
                  href="/"
                  className="underline underline-offset-4  text-brand-500 hover:text-brand-600 dark:text-brand-400 decoration-2 decoration-primary"
                >
                  home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
