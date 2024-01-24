import { Grid } from "@mui/material";
export default function Seach() {
  return (
    <Grid container={true}>
      <h1>Characters</h1>
      <Grid>
        <TextField onChange={handleChange_seach} variant="outlined" />
      </Grid>
      <Grid></Grid>
    </Grid>
  );
}
