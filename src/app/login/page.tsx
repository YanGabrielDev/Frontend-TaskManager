'use client'
import { Grid } from '@/components/Grid'
import wallpaper from '../../../public/wallpaper.png'
import Image from 'next/image'
import { Form } from './components/Form'
export default function Login() {
  return (
    <Grid container>
      <Grid xlarge={8} large={8} medium={6}>
        <Image
          src={wallpaper}
          alt="Pessoas em um fundo branco organizando um quadro de tarefas"
          objectFit="cover"
          width={1980}
          height={1080}
          style={{
            height: '100vh',
            width: '100%',
            position: 'absolute',
            objectFit: 'cover',
          }}
        />
      </Grid>
      {/* )} */}

      <Grid xlarge={4} large={4} medium={6} small={12}>
        <Form />
      </Grid>
    </Grid>
  )
}
