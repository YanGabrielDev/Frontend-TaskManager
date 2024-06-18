import { colors } from '../../../../styles/globalTokens.stylex'
import * as stylex from '@stylexjs/stylex'

export const imageLoginStyles = stylex.create({
  base: {
    width: '100%',
    height: '100vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: colors.primary,
    padding: "1rem",
    paddingTop: "3rem"
  },

})
