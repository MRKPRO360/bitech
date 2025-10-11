'use client';

import Input from '@/components/form/input/InputField';
import Label from '@/components/form/Label';
import Para from '@/components/ui/core/Para';
import SecondaryHeading from '@/components/ui/core/SecondaryHeading';
import { ISignupValues, IUser } from '@/types';
import Link from 'next/link';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Address({ data }: { data: IUser }) {
  const { register, reset } = useForm<Partial<ISignupValues>>();

  useEffect(() => {
    if (data?.address) {
      reset(data);
    }
  }, [reset, data]);

  return (
    <div className="bg-gray-50 shadow-sm rounded-md p-5 ">
      <div className="flex flex-col justify-between h-full">
        <SecondaryHeading className="mb-3">Address</SecondaryHeading>
        <Para>Your Personal Info</Para>
        <form className="mt-5">
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* <!-- First Name --> */}
              <div className="sm:col-span-1">
                <Label htmlFor="fname">
                  First Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  readonly={true}
                  id="fname"
                  placeholder="Enter your first name"
                  register={register('name.firstName', {
                    required: 'First name is required',
                  })}
                />
              </div>
              {/* <!-- Last Name --> */}
              <div className="sm:col-span-1">
                <Label htmlFor="lname">
                  Last Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  readonly={true}
                  register={register('name.lastName', {
                    required: 'Last name is required',
                  })}
                  id="lname"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            {/* <!-- Email --> */}
            <div>
              <Label>
                Email<span className="text-red-500">*</span>
              </Label>
              <Input
                readonly={true}
                register={register('email', {
                  required: 'Email is required',
                })}
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  readonly={true}
                  id="phone"
                  placeholder="Enter your phone number"
                  register={register('phoneNumber')}
                />
              </div>

              <div className="sm:col-span-1">
                <Label htmlFor="country">Country</Label>
                <Input
                  readonly={true}
                  id="phone"
                  register={register('address.country')}
                />
              </div>
            </div>
            {/* <!-- Last Name --> */}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <Label>City</Label>
                <Input
                  readonly={true}
                  register={register('address.city')}
                  placeholder="Enter your city"
                  type="text"
                />
              </div>

              <div className="sm:col-span-1">
                <Label>Zip Code</Label>
                <Input
                  readonly={true}
                  register={register('address.zipCode')}
                  placeholder="Enter your city"
                  type="text"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-base font-semibold text-center sm:text-start">
                Wan&apos;t to change personal information? &nbsp;
                <Link
                  href="/update-profile"
                  className="underline underline-offset-4  text-brand-500 hover:text-brand-600 dark:text-brand-400 decoration-2 decoration-primary"
                >
                  Update Profile
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
