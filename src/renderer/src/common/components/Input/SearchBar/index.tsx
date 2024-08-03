import useDebouncer from "@hooks/useDebouncer";
import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
}
const SearchBar = (props: Props) => {
  const { className, label, placeholder, onChange, value = "" } = props;

  const isFirstRender = useRef(true);
  const [tempValue, setTempValue] = useState<string>("");
  const debouncedValue = useDebouncer(tempValue, 500);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    onChange(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  return (
    <TextField
      className={className}
      value={tempValue}
      onChange={(e) => setTempValue(e.target.value)}
      label={label}
      placeholder={placeholder}
      sx={{
        "& .MuiInputBase-input": {
          height: "0.9rem"
        },
        "& .MuiOutlinedInput-root": {
          "& input": {
            padding: "0.5rem 0.6rem",
            fontSize: "0.75rem"
          }
        }
      }}
    />
  );
};

export default SearchBar;
