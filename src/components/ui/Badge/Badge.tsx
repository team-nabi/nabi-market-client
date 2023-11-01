import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2 font-medium',
  {
    variants: {
      variant: {
        primary: 'bg-primary-color text-white',
        secondary: 'bg-secondary-color text-white',
        gradation: 'bg-gradient-primary text-white',
        information: 'bg-background-secondary-color text-black',
      },
      size: {
        sm: 'h-[18px] text-xs',
        lg: 'h-6 text-sm',
      },
    },
    defaultVariants: {
      variant: 'information',
      size: 'sm',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({ className, variant, size, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

Badge.displayName = 'Badge'

export { Badge, badgeVariants }
