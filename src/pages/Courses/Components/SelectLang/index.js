import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const languages = [
  "Vietnamese",
  "English",
  "Chinese",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Spanish",
];

function SelectLang({ inputForm, setInputForm }) {
  const theme = useTheme();
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  useEffect(() => {
    // Ensure the component uses the prop value when it mounts
    if (inputForm.languages) {
      setSelectedLanguages(inputForm.languages);
    }
  }, [inputForm.languages]);

  const handleChange = (event) => {
    const value = event.target.value;
    // Set the languages into state
    setSelectedLanguages(value);
    // Update the parent component's form state
    setInputForm((prev) => ({
      ...prev,
      languages: value,
    }));
  };

  return (
    <div>
      <FormControl fullWidth size="small">
        <Select
          multiple
          displayEmpty
          value={selectedLanguages}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Ngôn Ngữ</em>;
            }
            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {languages.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLang;
