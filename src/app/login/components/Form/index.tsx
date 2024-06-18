import { Box } from '@/components/Box'
import * as stylex from '@stylexjs/stylex'
import { formStyles } from './styles'

export const Form = () => {
  console.log('teste');
  
  return (
    <div {...stylex.props(formStyles.base)}>
    <form
      onSubmit={(e) => {
        e.preventDefault(), console.log(e)
      }}
    >
      <Box display="flex" column gap="1rem">
        <input name="email" />
        <input name="senha" />
        <button type="submit" style={{ display: '' }}></button>
      </Box>
    </form>
    </div>
  )
}
