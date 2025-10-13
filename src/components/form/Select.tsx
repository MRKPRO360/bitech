import { ISelectOpton } from '@/types';
import { CircleAlert } from 'lucide-react';
import React from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from 'react-hook-form';

interface SelectProps {
  options: ISelectOpton[];
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  register?: UseFormRegisterReturn;
  id?: string;
  value?: string;
  onChange: (e: any) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = 'Select an option',
  className = '',
  error,
  register,
  defaultValue = '',
  id = '',
  value = '',
  onChange,
}) => {
  return (
    <div>
      <select
        onChange={onChange}
        id={id}
        defaultValue={defaultValue}
        {...register}
        className={`focus:border-primary   text-gray-800 px-2 py-2 border border-grey/20 rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10 h-11 w-full appearance-none  text-sm shadow-theme-xs placeholder:text-gray-400  focus:outline-hidden  cursor-pointer ${
          error ? 'border-red-500' : 'border-gray-300 focus:border-primary'
        }  ${className}`}
      >
        {/* Placeholder option */}
        <option value={value} disabled className="text-gray-700">
          {placeholder}
        </option>
        {/* Map over options */}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-gray-700"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && 'message' in error && (
        <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
          {error?.message as string}

          <CircleAlert className="text-red-800" size={20} />
        </p>
      )}
    </div>
  );
};

export default Select;
