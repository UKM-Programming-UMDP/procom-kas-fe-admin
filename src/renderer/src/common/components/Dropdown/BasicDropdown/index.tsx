import { ArrowDropDown } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import { useState, forwardRef } from "react";
import ReactLoading from "react-loading";
import {
  helperTextStyles,
  itemStyles,
  labelStyles,
  rootStyles,
  selectMenuPropsStyles,
  selectStyles
} from "./styles";
import { CommonOptions } from "@types";

interface Props {
  label: string;
  options: CommonOptions[];
  value: string | number;
  onChange: (event: SelectChangeEvent) => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  error?: boolean;
  helperText?: string;
  defaultValue?: string;
  isLoading?: boolean;
  disabled?: boolean;
}
const BasicDropdown = forwardRef((props: Props, ref) => {
  const {
    label,
    options,
    value,
    onChange,
    onOpen,
    error,
    helperText,
    defaultValue,
    isLoading,
    disabled
  } = props;
  BasicDropdown.displayName = "BasicDropdown";
  const [isOptionsFetched, setOptionsFetched] = useState(false);

  return (
    <FormControl sx={rootStyles} error={error} disabled={disabled}>
      <InputLabel sx={labelStyles}>{label}</InputLabel>
      <Select
        ref={ref}
        onOpen={(e) => {
          if (onOpen && !isOptionsFetched) {
            setOptionsFetched(true);
            onOpen(e);
          }
        }}
        value={isLoading ? "" : value?.toString()}
        defaultValue={defaultValue}
        label={label}
        onChange={(e: SelectChangeEvent) => onChange(e)}
        sx={selectStyles}
        MenuProps={selectMenuPropsStyles}
        IconComponent={() => {
          return (
            <div className="me-2 flex items-center gap-2">
              {isLoading ? (
                <ReactLoading type="bubbles" width={30} height={30} />
              ) : null}
              <ArrowDropDown />
            </div>
          );
        }}
      >
        {isLoading ? (
          <MenuItem sx={itemStyles} disabled value={value || 0}>
            Loading...
          </MenuItem>
        ) : options.length === 0 ? (
          <MenuItem sx={itemStyles} disabled value={value || 0}>
            No options...
          </MenuItem>
        ) : (
          options.map((option, index) => (
            <MenuItem sx={itemStyles} value={option.value} key={index}>
              {option.label}
            </MenuItem>
          ))
        )}
      </Select>
      {helperText ? (
        <FormHelperText sx={helperTextStyles}>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  );
});

export default BasicDropdown;
