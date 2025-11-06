'use client';
import Checkbox from '@/components/form/input/Checkbox';
import Input from '@/components/form/input/InputField';
import Label from '@/components/form/Label';
import Select from '@/components/form/Select';
import Cta from '@/components/ui/core/Cta';
import ImageUpload from '@/components/ui/core/ImageUpload';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import { countriesOptions } from '@/constant/country';
import { useSocialLogin } from '@/hooks/useSocialLogin';
import { signupCustomer } from '@/services/authService';
import { ISignupValues } from '@/types';
import {
  ChevronLeft,
  ChevronLeftIcon,
  ChevronRight,
  EyeClosedIcon,
  EyeIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form';
import { FaFacebookF } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  const totalSteps = 3;
  const [step, setStep] = useState(1);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<ISignupValues>();

  const termsChecked = watch('terms', false);

  const handleNext = async () => {
    let fieldsToValidate: Path<ISignupValues>[] = [];

    if (step === 1)
      fieldsToValidate = [
        'name.firstName',
        'name.lastName',
        'email',
        'password',
      ];
    if (step === 2)
      fieldsToValidate = ['phoneNumber', 'address.country', 'address.city'];
    if (step === 3) fieldsToValidate = ['address.zipCode', 'userImg', 'terms'];

    const valid = await trigger(fieldsToValidate);

    if (valid) setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Signing up...');

    const formData = new FormData();
    const file = data.userImg[0];

    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
    };

    formData.append('data', JSON.stringify(userData));

    if (file) formData.append('file', file);

    try {
      const res = await signupCustomer(formData);

      if (res.success) {
        toast.success('Successfully signed up!', { id: toastId });
        router.push('/dashboard/profile');
        reset();
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong!', { id: toastId });
    }
  };

  const { handleSocialLogin } = useSocialLogin();

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full overflow-y-auto no-scrollbar pb-10">
      <div className="w-full  mx-auto max-w-lg sm:pt-10  mb-5">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-grey transition-colors hover:text-gray-700"
        >
          <ChevronLeftIcon />
          Back to Home
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-lg mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <SecondaryHeading className="mb-2 ">Sign Up</SecondaryHeading>
            <p className="text-sm text-gray-500 ">
              Enter your email and password to sign up!
            </p>
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

            <div className="w-full bg-gray-200/80 h-2 rounded-full mb-6">
              <div
                style={{
                  width: `${(step / totalSteps) * 100}%`,
                  willChange: 'width',
                }}
                className="bg-primary h-2 rounded-full transition-all duration-500"
              ></div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* <!-- First Name --> */}
                    <div className="sm:col-span-1">
                      <Label htmlFor="fname">
                        First Name<span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fname"
                        placeholder="Enter your first name"
                        register={register('name.firstName', {
                          required: 'First name is required',
                        })}
                        error={errors.name?.firstName}
                      />
                    </div>
                    {/* <!-- Last Name --> */}
                    <div className="sm:col-span-1">
                      <Label htmlFor="lname">
                        Last Name<span className="text-red-500">*</span>
                      </Label>
                      <Input
                        register={register('name.lastName', {
                          required: 'Last name is required',
                        })}
                        id="lname"
                        placeholder="Enter your last name"
                        error={errors.name?.lastName}
                      />
                    </div>
                  </div>
                  {/* <!-- Email --> */}
                  <div>
                    <Label>
                      Email<span className="text-red-500">*</span>
                    </Label>
                    <Input
                      error={errors.email}
                      register={register('email', {
                        required: 'Email is required',
                      })}
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  {/* <!-- Password --> */}
                  <div>
                    <Label htmlFor="password">
                      Password<span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        placeholder="Enter your password"
                        type={showPassword ? 'text' : 'password'}
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
                        className="absolute z-30 cursor-pointer right-4 top-2"
                      >
                        {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      register={register('phoneNumber', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^(?:\+88|88)?(01[3-9]\d{8})$/,
                          message: 'Please enter a valid phone number',
                        },
                      })}
                      error={errors.phoneNumber}
                    />
                  </div>
                  {/* <!-- Last Name --> */}
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select
                      register={register('address.country')}
                      // id="lname"
                      placeholder="Enter your country name"
                      error={errors.address?.country}
                      options={countriesOptions}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <Label>City</Label>
                      <Input
                        error={errors.address?.city}
                        register={register('address.city')}
                        placeholder="Enter your city"
                        type="text"
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <Label>Zip Code</Label>
                      <Input
                        error={errors.address?.zipCode}
                        register={register('address.zipCode')}
                        placeholder="Enter your city"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="w-full">
                    <ImageUpload
                      label="Profile Picture"
                      multiple={false}
                      onChange={(files) => {
                        if (
                          Array.isArray(files) &&
                          files.length > 0 &&
                          files[0] instanceof File
                        ) {
                          setValue('userImg', files as File[], {
                            shouldValidate: true,
                          });
                          trigger('userImg');
                        }
                      }}
                    />

                    <input type="hidden" {...register('userImg')} />
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox
                      className="w-5 h-5"
                      register={register('terms', {
                        required: 'You must accept the terms',
                      })}
                      error={errors.terms}
                      value={termsChecked}
                    />
                    {!errors.terms && (
                      <p className="inline-block font-normal text-gray-500 ">
                        By creating an account means you agree to the{' '}
                        <span className="text-gray-800">
                          Terms and Conditions,
                        </span>{' '}
                        and our{' '}
                        <span className="text-gray-800 ">Privacy Policy</span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-md 
    border border-gray-200 text-gray-700 
    font-medium transition-all duration-200
    hover:bg-gray-50 hover:border-primary hover:text-primary cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                    type="button"
                    onClick={handlePrev}
                  >
                    <ChevronLeft className="h-5 w-5" />
                    Prev
                  </button>
                )}

                {step < totalSteps && (
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-md 
    border border-gray-200 text-gray-700 
    font-medium transition-all duration-200
    hover:bg-gray-50 hover:border-primary hover:text-primary cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                    type="button"
                    onClick={handleNext}
                  >
                    Next
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}

                {step === totalSteps && (
                  <Cta
                    text="Sign Up"
                    renderIcon={false}
                    isSubmitting={isSubmitting}
                    submittingText="Signing Up..."
                    type="submit"
                  />
                )}
              </div>
            </form>

            <div className="mt-5">
              <p className="text-base font-semibold text-center text-gray-700  sm:text-start">
                Already have an account? &nbsp;
                <Link
                  href="/signin"
                  className="underline underline-offset-4  text-brand-500 hover:text-brand-600 dark:text-brand-400 decoration-2 decoration-primary"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
