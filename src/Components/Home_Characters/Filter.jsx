import * as React from "react";
import Results from "../Results.jsx";
// import Chip from "@mui/material/Chip";
import "./Filter.css";
import {
  TextField,
  Grid,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { status, species, gender } from "../../Helpers/Constants.js";

export default function Filter() {
  const [stat, setStat] = React.useState("");
  const [spec, setSpec] = React.useState("");
  const [gen, setGen] = React.useState("");
  const [seach, setSeach] = React.useState("");

  const handleChange_seach = (event) => {
    setSeach(event.target.value);
  };
  const handleChange_status = (event) => {
    setStat(event.target.value);
  };
  const handleChange_species = (event) => {
    setSpec(event.target.value);
  };
  const handleChange_gender = (event) => {
    setGen(event.target.value);
  };
  const clear_all_values = () => {
    setStat("");
    setSpec("");
    setGen("");
  };
  return (
    <div>
      <Grid container={true}>
        <h1>Characters</h1>
        <Grid>
          <TextField onChange={handleChange_seach} variant="outlined" />
        </Grid>
        <Grid></Grid>
      </Grid>
      <div className="filter_side">
        <Stack spacing={3} sx={{ width: 250 }}>
          <h1>Filters</h1>
          <button onClick={clear_all_values}>Clear</button>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stat}
              label="Status"
              onChange={handleChange_status}
            >
              {status.map((item, index) => (
                <MenuItem key={index} value={item.title}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Species</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={spec}
              label="species"
              onChange={handleChange_species}
            >
              {species.map((item, index) => (
                <MenuItem key={index} value={item.title}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gen}
              label="gender"
              onChange={handleChange_gender}
            >
              {gender.map((item, index) => (
                <MenuItem key={index} value={item.title}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <div className="grid_results">
          <Results stat={stat} spec={spec} gen={gen} seach={seach} />
        </div>
      </div>
    </div>
  );
}
