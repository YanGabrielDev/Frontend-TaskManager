import * as stylex from '@stylexjs/stylex'

export const boxStyles = stylex.create({
  base: {
    width: '100%',
    height: '100%',
  },
  display: (display) => ({
    display: display,
  }),
  column: {
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  gap: (gap) => ({
    gap: gap,
  }),
})
