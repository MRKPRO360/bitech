'use client';

import Input from '@/components/form/input/InputField';
import Label from '@/components/form/Label';
import Select from '@/components/form/Select';
import Cta from '@/components/ui/core/Cta';
import ImageUpload from '@/components/ui/core/ImageUpload';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import { countriesOptions } from '@/constant/country';
import { useUser } from '@/context/UserContext';

import { updateAdmin, updateCustomer } from '@/services/authService';
import { ISignupValues, IUser } from '@/types';
import { ChevronLeft, ChevronLeftIcon, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form';

import { toast } from 'sonner';

export default function UpdateProfileForm({ profile }: { profile: IUser }) {
  const { setIsLoading } = useUser();

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
  } = useForm<ISignupValues>();

  useEffect(() => {
    reset(profile);
  }, [reset, profile]);

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
    const file = data.userImg[0];

    if (!profile.user) return toast.error('No user found!');
    else if (profile.user.role === 'customer') {
      try {
        const customerFormData = new FormData();

        customerFormData.append(
          'data',
          JSON.stringify({ _id: profile._id, ...data })
        );

        if (file) customerFormData.append('file', file);

        const res = await updateCustomer(customerFormData);

        if (res?.success) {
          toast.success(res?.message);
          router.push('/dashboard');
          setIsLoading(true);
        } else {
          toast.error(res?.message);
        }
      } catch (err: any) {
        console.error(err);
      }
    } else if (profile.user.role === 'admin') {
      try {
        const adminFormData = new FormData();

        adminFormData.append(
          'data',
          JSON.stringify({ _id: profile._id, ...data })
        );

        if (file) adminFormData.append('file', file);

        const res = await updateAdmin(adminFormData);

        setIsLoading(true);
        if (res?.success) {
          toast.success(res?.message);
          router.push('/dashboard');
        } else {
          toast.error(res?.message);
        }
      } catch (err: any) {
        console.error(err);
      }
    }
  };

  return (
    <div className="pb-10">
      <Link
        href="/"
        className="inline-flex mb-5  items-center text-sm text-grey transition-colors hover:text-gray-700"
      >
        <ChevronLeftIcon />
        Back to Home
      </Link>

      <div>
        <div className="mb-5 sm:mb-8">
          <SecondaryHeading className="mb-2 ">
            Update your profile
          </SecondaryHeading>
          {/* <p className="text-sm text-gray-500 ">
              Enter your email and password to sign up!
            </p> */}
        </div>
        <div>
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
              </div>
            )}
            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    register={register('phoneNumber')}
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
                    initialImages={
                      profile?.profileImg ? [profile.profileImg] : []
                    }
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
                  text="Update"
                  renderIcon={false}
                  isSubmitting={isSubmitting}
                  submittingText="Updating..."
                  type="submit"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
