'use client'
import { Grid } from '@/components/Grid'
import wallpaper from '../../../public/wallpaper.png'
import Image from 'next/image'
import useMediaQuery from '@/hooks/useMediaQuery'
export default function Login() {
  const hidenWallpaperOnMobile = useMediaQuery('(min-width: 1281px)')
  return (
    <Grid container>
      {hidenWallpaperOnMobile && (
        <Grid xlarge={8}>
          <Image
            src={wallpaper}
            alt="Pessoas em um fundo branco organizando um quadro de tarefas"
            style={{
              width: '100%',
              height: '99vh',
            }}
          />
        </Grid>
      )}

      <Grid xlarge={4} large={12} medium={12} small={12}>
        <span>fsdg</span>
      </Grid>
    </Grid>
  )
}
