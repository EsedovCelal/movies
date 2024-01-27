import {
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useState } from "react";

export default function Selection({ getOptions, send }) {
  const [selected, setSelected] = useState("");
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  selected && send(selected);
  return (
    <Stack spacing={3} sx={{ width: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {getOptions[0].title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Status"
          onChange={handleChange}
        >
          {getOptions.slice(1).map((item, index) => (
            <MenuItem key={index} value={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
