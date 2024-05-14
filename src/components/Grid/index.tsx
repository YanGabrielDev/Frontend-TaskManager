import * as React from 'react'
import * as stylex from '@stylexjs/stylex'
import { gridStyles } from './styles'

interface GridSizes {
  xlarge?: number
  large?: number
  medium?: number
  small?: number
}

interface GridProps extends GridSizes {
  children: React.ReactNode
  container?: boolean
  gap?: '0.25rem' | '0.5rem' | '0.75rem' | '1rem'
}

export const Grid = ({
  children,
  container,
  gap,
  large,
  medium,
  small,
  xlarge,
}: GridProps) => {
  const containerStyle = container ? gridStyles.container : {}
  const gapStyle = gap ? gridStyles.gap(gap) : {}
  const breakpoints = [xlarge, large, medium, small]
  const restColumns = breakpoints.find((br) => br !== undefined)
  const smallSize = small ?? restColumns

  return (
    <div
      {...stylex.props(
        containerStyle,
        gridStyles.base,
        !container
          ? gridStyles.responsive(
              restColumns!,
              xlarge,
              large,
              medium,
              smallSize,
            )
          : {},
        gapStyle,
      )}
    >
      {children}
    </div>
  )
}
