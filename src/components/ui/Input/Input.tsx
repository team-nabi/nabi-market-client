import * as React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils'

const inputVariants = cva(
  'flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      border: {
        default:
          'border border-input focus-visible:outline-primary-color focus-visible:outline-1 focus-visible:ring-1 focus-visible:ring-ring',
        none: 'border-none shadow-none focus-visible:ring-none focus-visible:outline-none',
        bottom:
          'border-t-0 border-x-0 border-b border-b-input shadow-none focus-visible:ring-none focus-visible:outline-none rounded-none focus-visible:border-primary-color',
      },
    },
    defaultVariants: {
      border: 'default',
    },
  },
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, border, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ border, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
