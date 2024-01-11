import { Grid } from "@/components/Grid";

export default function Login() {
    return(
        <div>
            <h1>login</h1>
            <Grid container>
      <Grid  xlarge={2} large={4} medium={6} xsmall={12}>item 1</Grid>
      <Grid  xlarge={2} large={4} medium={6} small={12}>item 2</Grid>
      <Grid  xlarge={2} large={4} medium={6} small={12}>item 3</Grid>
      <Grid  xlarge={2} large={4} medium={6} small={12}>item 4</Grid>
      <Grid  xlarge={2} large={4} medium={6} small={12}>item 5</Grid>
      <Grid  xlarge={2} large={4} medium={6} small={12}>item 6</Grid>

     </Grid>
        </div>
    )
}
