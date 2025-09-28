'use client';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper';
import { cn } from '@/lib/utils';
import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    icon?: React.ComponentType<{size?: number;color?:string;className?:string}>;
    registration?: Partial<UseFormRegisterReturn>;
    size?: number | string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      icon:Icon,
      size,
      type,
      label,
      error,
      registration,
      ...props
    },
    ref,
  ) => {
    return (
      <FieldWrapper label={label} error={error}>
        <div className="relative flex items-center group">
          {/* left icon */}
          {Icon && (
            <span className='absolute inset-y-0 left-0 top-1/2 -translate-y-1/2 flex items-center pl-3 text-xl pointer-events-none group-focus-within:text-green transition-colors'>
            <Icon
              size={size}
              className="transition-colors"
            />
            </span>
          )}
          {/* left icon */}
          <input
            type={type}
            className={cn(
              'bg-deep-night-black text-silvergray! font-semibold text-sm rounded-lg outline-none focus:ring-1 focus:ring-green block w-full pl-10 p-2.5 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            {...registration}
            {...props}
          />
        </div>
      </FieldWrapper>
    );
  },
);

Input.displayName = 'Input';
export { Input };
