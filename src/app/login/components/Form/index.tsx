import { Box } from '@/components/Box'

export const Form = () => {
  return (
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
  )
}
