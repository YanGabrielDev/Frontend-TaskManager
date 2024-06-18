'use client'
import { Grid } from '@/components/Grid'
import wallpaper from '../../../public/wallpaper.png'
import Image from 'next/image'
import { Form } from './components/Form'
import * as stylex from 'styled-jsx/style'
import { ImageLogin } from './components/ImageLogin'
export default function Login() {
  return (
    <Grid container>
      <Grid xlarge={4} large={4} medium={6} small={12}>
        <Form />
      </Grid>
      <Grid xlarge={8} large={8} medium={6}>
        <ImageLogin/>
      </Grid>
    </Grid>
  )
}
