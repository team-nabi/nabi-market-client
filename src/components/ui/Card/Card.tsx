import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'
import { cn } from '@/utils'

const cardVariants = cva(
  'rounded-card border border-background-secondary-color p-1.5',
  {
    variants: {
      size: {
        lg: 'h-card-lg',
        md: 'h-card-md',
        sm: 'h-card-sm',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  },
)

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    asChild?: boolean
  }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ size, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ size, className }))}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

const cardFlexVariants = cva('flex h-full', {
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    gap: {
      space: 'gap-2',
      none: 'gap-0',
    },
  },
  defaultVariants: {
    direction: 'row',
    gap: 'none',
  },
})

export type CardFlexProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardFlexVariants> & {
    asChild?: boolean
  }

const CardFlex = React.forwardRef<HTMLDivElement, CardFlexProps>(
  ({ direction, justify, align, gap, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardFlexVariants({ direction, justify, align, gap, className }),
      )}
      {...props}
    />
  ),
)
CardFlex.displayName = 'CardFlex'

const CardImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(({ className, alt, ...props }, ref) => (
  <Image alt={alt} ref={ref} className={cn('', className)} {...props} />
))
CardImage.displayName = 'CardImage'

const cardTextVariants = cva('', {
  variants: {
    type: {
      h1: 'text-h1 font-bold',
      h2: 'text-h2 font-bold',
      h3: 'text-h3 font-bold',
      h4: 'text-h4 font-bold',
      p1: 'text-p1',
      p2: 'text-p2',
      p3: 'text-p3',
    },
    color: {
      black: 'text-text-color',
      gray: 'text-background-secondary-color',
    },
  },
  defaultVariants: {
    type: 'h1',
    // color: 'black',
  },
})

export type CardTextProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardTextVariants> & {
    asChild?: boolean
  }

const CardText = React.forwardRef<HTMLDivElement, CardTextProps>(
  ({ type, color, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardTextVariants({ type, color, className }))}
      {...props}
    />
  ),
)
CardText.displayName = 'CardText'

export { Card, CardFlex, CardImage, CardText }
