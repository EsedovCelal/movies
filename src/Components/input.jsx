import { Grid, TextField, Button } from "@mui/material";

export default function Input() {
  return (
    <Grid container={true}>
      <h1>Characters</h1>
      <Grid>
        <TextField variant="outlined" />
      </Grid>
      <Grid>
        <Button variant="contained" color="primary">
          Seach
        </Button>
      </Grid>
    </Grid>
  );
}
