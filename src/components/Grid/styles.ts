import * as stylex from '@stylexjs/stylex'

const flexWidth = (value?: number) => (value ? (100 / 12) * value : 100)

export const gridStyles = stylex.create({
  container: {
    display: 'flex',
    width: '100%',
  },
  base: {
    position: 'relative',
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
      '@media (min-width: 768px)': `${flexWidth(medium)}%`,
      '@media (min-width: 1280px)': `${flexWidth(large)}%`,
      '@media (min-width: 1536px)': `${flexWidth(xlarge)}%`,
    },
  }),
  gap: (gap: string) => ({ gap: gap }),
})
