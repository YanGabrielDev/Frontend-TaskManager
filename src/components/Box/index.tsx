import { ReactNode } from 'react'
import * as stylex from '@stylexjs/stylex'
import { boxStyles } from './styles'

interface BoxProps {
  children: ReactNode
  display?: 'flex' | 'block' | 'grid'
  column?: boolean
  justifyCenter?: boolean
  justifyBetween?: boolean
  gap?: `${number}rem`
}
export const Box = ({
  children,
  column,
  display,
  gap,
  justifyBetween,
  justifyCenter,
}: BoxProps) => {
  return (
    <div
      {...stylex.props(
        boxStyles.base,
        column && boxStyles.column,
        display ? boxStyles.display(display) : null,
        justifyCenter && boxStyles.justifyCenter,
        justifyBetween && boxStyles.justifyBetween,
        gap && boxStyles.gap(gap),
      )}
    >
      {children}
    </div>
  )
}
