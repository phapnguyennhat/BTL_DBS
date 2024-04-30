import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
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

const names = [
  "Khoa học máy tính",
  "Công nghệ phần mềm",
  "Kỹ thuật máy tính",
  "Kỹ thuật mạng",
  "Trí tuệ nhân tạo",
  "An toàn thông tin",
  "Thống kê",
  "Khoa học dữ liệu",
  "Toán học",
  "Công nghệ thông tin",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectMajor({ inputForm, onChangeInput }) {
  // const theme = useTheme();
  // const [personName, setPersonName] = React.useState([]);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-multiple-name-label">Chuyên Ngành</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          only
          input={<OutlinedInput label="Chuyên Ngành" />}
          MenuProps={MenuProps}
          required
          name="major"
          value={`${inputForm.major}`}
          onChange={onChangeInput}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
