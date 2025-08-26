import type { PropsWithChildren, ElementType } from 'react'

/**
 * Allowed text alignment types
 */
export type ITextAlign = 'left' | 'center' | 'right' | 'justify'

/**
 * Allowed typography variant types
 */
export type ITypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'b1'
  | 'b2'
  | 'b3'
  | 'caption'
  | 'legal'

/**
 * Typography component props
 */
export interface ITypographyProps extends PropsWithChildren {
  variant: ITypographyVariant

  id?: string
  href?: string
  as?: ElementType
  align?: ITextAlign
  className?: string
  isLoading?: boolean
  placeholder?: string
}
