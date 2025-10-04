import { ISelectOpton } from '@/types';
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
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = 'Select an option',
  className = '',
  error,
  register,
  defaultValue = '',
}) => {
  return (
    <select
      defaultValue={defaultValue}
      {...register}
      className={`focus:border-primary   text-gray-800 px-2 py-2 border border-grey/20 rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10 h-11 w-full appearance-none  text-sm shadow-theme-xs placeholder:text-gray-400  focus:outline-hidden  cursor-pointer $ ${
        error ? 'border-red-500' : 'border-gray-300 focus:border-primary'
      }  ${className}`}
    >
      {/* Placeholder option */}
      <option value="" disabled className="text-gray-700">
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
  );
};

export default Select;
