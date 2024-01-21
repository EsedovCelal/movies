import * as React from "react";
// import Chip from "@mui/material/Chip";
import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { status, species, gender } from "../Helpers/Constants";

export default function Filter() {
  const [stat, setStat] = React.useState("");
  const [spec, setSpec] = React.useState("");
  const [gen, setGen] = React.useState("");

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
          {status.map((item) => (
            <MenuItem value={item.title}>{item.title}</MenuItem>
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
          {species.map((item) => (
            <MenuItem value={item.title}>{item.title}</MenuItem>
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
          {gender.map((item) => (
            <MenuItem value={item.title}>{item.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
