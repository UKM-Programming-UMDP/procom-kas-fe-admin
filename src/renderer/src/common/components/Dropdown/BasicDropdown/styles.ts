export const rootStyles = {
  width: "100%",
  marginBottom: "0.8rem"
};

export const selectStyles = {
  color: "white",
  fontSize: "14px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#dcdcdc"
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#F2F2F2"
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ebebeb"
  },
  "& .MuiSelect-select": {
    padding: "0.7rem 0.8rem 0.6rem",
    fontSize: "14px",
    color: "white"
  },
  ".MuiSvgIcon-root ": {
    fill: "white"
  },
  "&.Mui-disabled": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#5E5E5E"
    },
    ".MuiSvgIcon-root": {
      fill: "#737373"
    }
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#878787"
  }
};

export const selectMenuPropsStyles = {
  PaperProps: {
    sx: {
      backgroundColor: "#2C2C2C"
    }
  }
};

export const itemStyles = {
  fontSize: "14px",
  backgroundColor: "#323232",
  color: "white",
  margin: 0,

  "&.Mui-selected": {
    backgroundColor: "#262626",
    "&:hover": {
      backgroundColor: "#242424"
    }
  },
  "&:hover": {
    backgroundColor: "#242424"
  },
  "& .MuiListItem-root": {
    paddingTop: 0,
    paddingBottom: 0
  }
};

export const labelStyles = {
  transform: "translate(12px, 12px) scale(1)",
  color: "#E5E5E590",
  fontSize: "13px",
  paddingLeft: "3px",
  "&.Mui-focused, &.MuiFormLabel-filled": {
    transform: "translate(12px, -6px) scale(0.75)",
    color: "#F0F0F0"
  },
  "&:not(.Mui-focused):not(.MuiFormLabel-filled)": {
    fontSize: "12px"
  },
  "&.Mui-disabled": {
    color: "#9B9B9B"
  }
};

export const helperTextStyles = {
  color: "#F0F0F0",
  marginLeft: "5px"
};
