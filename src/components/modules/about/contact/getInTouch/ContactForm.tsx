'use client';

import Input from '@/components/form/input/InputField';
import Label from '@/components/form/Label';
import Cta from '@/components/ui/core/Cta';
import { getMe } from '@/services/authService';
import { createAMessage } from '@/services/mailService';
import { IMail } from '@/types/mail';
import { SendHorizontal } from 'lucide-react';
import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitting },
  } = useForm<IMail>();

  const onSubmit = async (data: IMail) => {
    const toastId = toast.loading('Sending your message...');
    console.log(data);

    //    user: Types.ObjectId;
    // phone: string;
    // name: IUserName;
    // email: string;
    // isDeleted: boolean;
    // description: string;
    // subject: string;

    try {
      const res = await createAMessage({
        phoneNumber: data.phoneNumber,
        name: data.name,
        email: data.email,
        description: data.description,
        subject: data.subject,
        user: data.user?._id,
      });
      console.log(res);
      if (res.success) {
        toast.success('Successfully sent your message!', { id: toastId });
        reset();
      } else {
        toast.error(res.message, { id: toastId });
      }
    } catch (err: any) {
      toast.error(err?.message || 'Something went wrong!', { id: toastId });
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getMe();
        if (res.data) reset(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [reset]);

  return (
    <form
      className="shadow-md rounded-md p-6 md:p-8 border border-gray-100/60 backdrop-blur-sm space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
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

      <div className="grid grid-cols-2 gap-2">
        {/* Phone */}
        <div>
          <Label htmlFor="phone">
            Phone <span className="text-red-500">*</span>
          </Label>
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

        {/* Subject */}
        <div>
          <Label htmlFor="subject">
            Subject <span className="text-red-500 ">*</span>
          </Label>
          <Input
            id="subject"
            placeholder="Want to create a website"
            register={register('subject', {
              required: 'Subject is required',
            })}
            error={errors.subject}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="description">
          Write Your Message <span className="text-red-500">*</span>
        </Label>
        <Input
          type="textarea"
          id="description"
          rows={5}
          placeholder="Detailed description of your project..."
          register={register('description', {
            required: 'Description is required',
            minLength: {
              value: 20,
              message: 'Description must be at least 20 characters',
            },
          })}
          error={errors.description}
        />
      </div>

      <Cta
        icon={<SendHorizontal />}
        renderIcon={false}
        isSubmitting={isSubmitting}
        submittingText="Sending Message..."
        type="submit"
        text="Send Message"
      />
    </form>
  );
}
export default ContactForm;
