import type { JSX } from 'react'
import type { ITypographyVariant } from './Typography.types'

const primaryColor = 'text-primary dark:text-primary-dark'
const secondaryColor = 'text-secondary dark:text-secondary-dark'

export const typographyVariants: Record<ITypographyVariant, string> = {
  h1: `text-5xl font-bold leading-tight ${primaryColor}`,
  h2: `text-4xl font-semibold leading-snug ${primaryColor}`,
  h3: `text-3xl font-semibold ${primaryColor}`,
  h4: `text-2xl font-medium ${primaryColor}`,
  h5: `text-xl font-medium ${primaryColor}`,
  b1: `text-base ${primaryColor}`,
  b2: `text-sm ${primaryColor}`,
  b3: `text-xs ${primaryColor}`,
  caption: `text-[0.75rem] ${secondaryColor}`,
  legal: `text-[0.65rem] uppercase tracking-wide ${secondaryColor}`
}

export const variantToElement: Record<
  ITypographyVariant,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  b1: 'p',
  b2: 'p',
  b3: 'p',
  caption: 'span',
  legal: 'span'
}
