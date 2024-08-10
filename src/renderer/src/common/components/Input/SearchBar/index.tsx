import useDebouncer from "@hooks/useDebouncer";
import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { forwardRef, useImperativeHandle } from "react";

interface Props {
  className?: string;
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

interface RefObject {
  onClear: () => void;
}

const SearchBar = forwardRef<RefObject, Props>((props, ref) => {
  const { className, label, placeholder, onChange } = props;

  useImperativeHandle(ref, () => ({
    onClear() {
      setTempValue("");
    }
  }));

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

  return (
    <TextField
      className={className}
      value={tempValue}
      onChange={(e) => setTempValue(e.target.value)}
      label={label}
      placeholder={placeholder}
      sx={{
        "& .MuiInputBase-input": {
          height: "1.2rem"
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
});
SearchBar.displayName = "SearchBar";

export default SearchBar;
