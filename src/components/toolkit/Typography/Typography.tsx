'use client'
// External Libraries
import type React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

// Utils
import { typographyVariants, variantToElement } from './Typography.config'

// Types
import type { ITypographyProps } from './Typography.types'

export const Typography: React.FC<ITypographyProps> = ({
  id,
  as,
  href,
  variant,
  children,
  className,
  placeholder,
  align = 'left',
  isLoading = false
}) => {
  const classes = clsx(
    typographyVariants[variant],
    {
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
      'text-justify': align === 'justify'
    },
    className
  )

  const Component = as ?? variantToElement[variant]

  if (isLoading) {
    return (
      <span
        id={id}
        aria-hidden="true"
        role="presentation"
        className={clsx(
          classes,
          'w-1/2 h-5',
          'inline-block',
          'animate-pulse bg-gray-300 rounded'
        )}
      />
    )
  }

  const sharedProps = { id, className: classes, 'aria-label': placeholder }

  if (href) {
    return (
      <Link href={href} {...sharedProps}>
        {children}
      </Link>
    )
  }

  return <Component {...sharedProps}>{children}</Component>
}
