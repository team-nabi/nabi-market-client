import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70',
  {
    variants: {
      variant: {
        primary: 'text-white bg-primary-color hover:bg-primary-hover-color',
        secondary:
          'text-white bg-secondary-color hover:bg-secondary-hover-color',
        gradation: 'text-white bg-gradient-primary hover:bg-gradient-secondary',
        warning: 'text-white bg-red-500',
      },
      size: {
        default: 'h-8 px-4 py-2',
        icon: 'h-10 w-10',
        icon_sm: 'h-6 w-6',
        sm: 'h-6 px-4 text-xs',
      },
      rounded: {
        default: 'rounded-md',
        lg: 'rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      rounded: 'default',
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /**
     * 자식으로 태그를 지정하고 스타일만 적용하고 싶을 때 사용합니다.
     */
    asChild?: boolean
  }

/**
 * 버튼 컴포넌트
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
