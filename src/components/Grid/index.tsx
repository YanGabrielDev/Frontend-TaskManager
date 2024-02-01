import * as React from 'react'
import * as stylex from '@stylexjs/stylex'

interface GridSizes {
  xlarge?: number
  large?: number
  medium?: number
  small?: number
}

interface GridProps extends GridSizes {
  children: React.ReactNode
  container?: boolean
  xlarge?: number
  large?: number
  medium?: number
  small?: number
  gap?: '0.25rem' | '0.5rem' | '0.75rem' | '1rem'
}

const flexWidth = (value?: number) => (value ? (100 / 12) * value : 100)

const styles = stylex.create({
  container: {
    display: 'flex',
    width: '100%',
  },
  responsive: (
    restColumns: number,
    xlarge?: number,
    large?: number,
    medium?: number,
    small?: number,
  ) => ({
    width: {
      // eslint-disable-next-line @stylexjs/valid-styles
      '@media (min-width: 600px)': `${flexWidth(small)}%`,
      '@media (min-width: 768pxpx)': `${flexWidth(medium)}%`,
      '@media (min-width: 1280px)': `${flexWidth(large)}%`,
      '@media (min-width: 1536px)': `${flexWidth(xlarge)}%`,
    },
  }),
  gap: (gap: string) => ({ gap: gap }),
})

export const Grid = ({
  children,
  container,
  gap,
  large,
  medium,
  small,
  xlarge,
}: GridProps) => {
  const containerStyle = container ? styles.container : {}
  const gapStyle = gap ? styles.gap(gap) : {}
  const breakpoints = [xlarge, large, medium, small]
  const restColumns = breakpoints.find((br) => br !== undefined)
  const smallSize = small ?? restColumns

  return (
    <div
      {...stylex.props(
        containerStyle,
        !container
          ? styles.responsive(restColumns!, xlarge, large, medium, smallSize)
          : {},
        gapStyle,
      )}
    >
      {children}
    </div>
  )
}
