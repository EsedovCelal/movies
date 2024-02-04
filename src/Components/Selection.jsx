import {
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

export default function Selection({
  title,
  options,
  selectedOption,
  setSelectedOption,
}) {
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Stack spacing={3} sx={{ width: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption == null ? "" : selectedOption}
          onChange={handleChange}
        >
          {options.map((item, index) => (
            <MenuItem key={index} value={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
