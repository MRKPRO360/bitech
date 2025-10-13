import clsx from 'clsx';
import { CircleAlert } from 'lucide-react';
import React, { FC } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from 'react-hook-form';

interface InputProps {
  type?:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'date'
    | 'time'
    | 'file'
    | 'textarea'
    | string;
  id?: string;
  rows?: number; // For textarea
  name?: string;
  placeholder?: string;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  min?: string | number;
  max?: string | number;
  step?: number;
  disabled?: boolean;
  success?: boolean;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | Merge<FieldError, (FieldError | undefined)[]>;
  register?: UseFormRegisterReturn;
  value?: string | number;
  hint?: string; // Optional hint text
  readonly?: boolean;
}

const Input: FC<InputProps> = ({
  type = 'text',
  readonly = false,
  id,
  name,
  placeholder,
  defaultValue,
  value,
  onChange,
  className = '',
  min,
  max,
  step,
  disabled = false,
  success = false,
  error,
  hint,
  register,
  rows = 3,
}) => {
  // Determine input styles based on state (disabled, success, error)
  let inputClasses = `w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden focus:ring-3  ${className}`;

  if (disabled) {
    inputClasses += ` text-gray-500 border-gray-300 cursor-not-allowed `;
  } else if (error) {
    inputClasses += `border-red-500 focus:ring-red-200`;
  } else if (success) {
    inputClasses += ` text-success-500 border-success-400 focus:ring-success-500/10 focus:border-success-300  `;
  } else {
    inputClasses += ` focus:border-primary  bg-transparent text-gray-800  w-full px-2 py-2 border border-grey/20 rounded-md focus:outline-none shadow-primary/10 hover:shadow-md focus:ring-4 focus:ring-primary/10`;
  }

  return (
    <div className="relative">
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          disabled={disabled}
          rows={rows}
          className={clsx(
            inputClasses,
            type !== 'textarea' ? 'h-11' : 'resize-none'
          )}
          {...register}
        />
      ) : (
        <input
          readOnly={readonly}
          value={value}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={inputClasses}
          {...register}
        />
      )}

      {error && 'message' in error && (
        <p className="bg-red-100/90 rounded-2xl text-red-800 text-sm mt-1 inline-flex px-1 py-0.5 gap-0.5">
          {error?.message as string}

          <CircleAlert className="text-red-800" size={20} />
        </p>
      )}

      {/* Optional Hint Text */}
      {hint && (
        <p
          className={`mt-1.5 text-xs ${
            error
              ? 'text-error-500'
              : success
              ? 'text-success-500'
              : 'text-gray-500'
          }`}
        >
          {hint}
        </p>
      )}
    </div>
  );
};

export default Input;
