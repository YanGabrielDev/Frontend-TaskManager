'use client'

import { Grid } from "@/components/Grid";


// import styles from './page.module.css';

export default function Home() {
  return (
    <main style={{ width: "100%", height: "100vh"}}>
     <Grid container>
      <Grid xlarge={6}>item 1</Grid>
      <Grid xlarge={6}>item 2</Grid>
     </Grid>
    </main>
  );
}
