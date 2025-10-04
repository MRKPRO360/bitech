import { CircleAlert } from 'lucide-react';
import type React from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from 'react-hook-form';

interface CheckboxProps {
  label?: string;
  value?: boolean;
  className?: string;
  id?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  value = false,
  id,
  className = '',
  disabled = false,
  error,
  register,
}) => {
  return (
    <label
      className={`flex items-center space-x-3 group cursor-pointer ${
        disabled ? 'cursor-not-allowed opacity-60' : ''
      }`}
    >
      <div className="relative w-5 h-5">
        <input
          id={id}
          type="checkbox"
          className={`w-5 h-5 appearance-none border rounded-md cursor-pointer transition-all
            ${error ? 'border-red-500 ring-red-300 ring-2' : 'border-gray-300'}
            checked:bg-primary checked:border-transparent 
            focus:outline-none focus:ring-2 focus:ring-primary/40 ${className}`}
          {...register}
          disabled={disabled}
        />
        {value && (
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {disabled && (
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="#E4E7EC"
              strokeWidth="2.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && (
        <span className="text-sm font-medium text-gray-800">{label}</span>
      )}

      {error && 'message' in error && (
        <p className="flex items-center gap-1 text-red-600 text-sm mt-0.5">
          <CircleAlert size={16} /> {error.message as string}
        </p>
      )}
    </label>
  );
};

export default Checkbox;
