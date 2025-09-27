'use client';

import Cta from '@/app/components/ui/core/Cta';

import { CircleAlert, File, Mail, Phone, UserCircle } from 'lucide-react';
import { FieldValues, useForm } from 'react-hook-form';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form
      className="shadow-xl rounded-md p-6 md:p-8 border border-gray-100/60 backdrop-blur-sm space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Name */}
      <div className="relative">
        <label
          htmlFor="name"
          className="block text-gray-700 font-semibold mb-1"
        >
          Name
        </label>
        <div className="relative">
          <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/90" />

          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10 ${
              errors.name
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary focus:ring-blue-200'
            }`}
            {...register('name', { required: 'Name is required' })}
          />
        </div>
        {errors.name && (
          <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
            {typeof errors.name.message === 'string'
              ? errors.name.message
              : 'Invalid name'}

            <CircleAlert className="text-red-800" size={20} />
          </p>
        )}
      </div>

      <div className="relative">
        <label
          htmlFor="email"
          className="block text-gray-700 font-semibold mb-1"
        >
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/90" />
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10 ${
              errors.name
                ? 'border-red-500 focus:ring-red-200'
                : 'border-gray-300 focus:border-primary focus:ring-blue-200'
            }`}
            {...register('name', { required: 'Name is required' })}
          />
        </div>
        {errors.email && (
          <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
            {typeof errors.email.message === 'string'
              ? errors.email.message
              : 'Invalid email'}

            <CircleAlert className="text-red-800" size={20} />
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* Phone */}
        <div className="relative">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-1"
          >
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/90" />
            <input
              id="phone"
              type="tel"
              placeholder="+1234567890"
              {...register('phone')}
              className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10 ${
                errors.phone
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:border-primary focus:ring-blue-200'
              }`}
              {...register('phone', {
                required: 'Phone is required',
                minLength: {
                  value: 10,
                  message: 'Phone must be at least 10 numbers',
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
              {typeof errors.phone.message === 'string'
                ? errors.phone.message
                : 'Invalid phone number'}

              <CircleAlert className="text-red-800" size={20} />
            </p>
          )}
        </div>

        {/* Subject */}
        <div className="relative">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-semibold mb-1"
          >
            Subject
          </label>
          <div className="relative">
            <File className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/90" />
            <input
              id="subject"
              placeholder="Want to create a website"
              className={`w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10 ${
                errors.subject
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-gray-300 focus:border-primary focus:ring-blue-200'
              }`}
              {...register('subject', {
                required: 'Subject is required',
              })}
            />
          </div>
          {errors.subject && (
            <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
              {typeof errors.subject.message === 'string'
                ? errors.subject.message
                : 'Invalid subject'}

              <CircleAlert className="text-red-800" size={20} />
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="w-full">
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold mb-1"
        >
          Write Your Message
        </label>
        <textarea
          id="description"
          rows={4}
          className={`w-full pl-3 pr-4 py-2 border rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10 ${
            errors.description
              ? 'border-red-800'
              : 'focus:border-primary border-gray-300'
          }`}
          {...register('description', {
            required: 'Description is required',
          })}
          placeholder="I am delighted that..."
        ></textarea>
        {errors.description && (
          <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
            {typeof errors.description.message === 'string'
              ? errors.description.message
              : 'Description is required'}
            <CircleAlert className="text-red-800" size={20} />
          </p>
        )}
      </div>
      <Cta text="Submit" />
    </form>
  );
}
export default ContactForm;
