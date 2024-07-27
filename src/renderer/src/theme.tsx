import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#37373784"
    }
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#8A8A8A50",
          color: "#ffffff"
        },
        arrow: {
          color: "#8A8A8A50"
        }
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: "#35353590",
          position: "absolute",
          bottom: 16,
          right: 16,
          height: "3.2rem",
          width: "3.2rem"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          padding: "0.2rem 0.4rem 0.15rem",
          fontSize: "0.7rem"
        },
        outlined: {
          border: "1px solid #909090",
          ":hover": {
            border: "1px solid #a0a0a0"
          }
        },
        contained: {
          backgroundColor: "#505050",
          border: "1px solid #505050",
          ":hover": {
            backgroundColor: "#606060",
            border: "1px solid #606060"
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          marginBottom: "0.8rem",
          "& .MuiInputBase-root": {
            fontSize: "13px"
          },
          "& .MuiOutlinedInput-root": {
            "& input": {
              padding: "0.7rem 0.8rem 0.6rem",
              fontSize: "14px",
              color: "#ffffff"
            },
            "& fieldset": {
              borderColor: "#dcdcdc"
            },
            "&:hover fieldset": {
              borderColor: "#F2F2F2"
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ebebeb"
            },
            "&.Mui-error fieldset": {
              borderColor: "#FF3737"
            },
            "&:hover.Mui-error fieldset": {
              borderColor: "#FF0B0B"
            },
            "&.Mui-disabled fieldset": {
              borderColor: "#5E5E5E"
            },
            "&.Mui-disabled .MuiSvgIcon-root": {
              fill: "#737373"
            }
          },
          "& .MuiInputLabel-root": {
            transform: "translate(12px, 12px) scale(1)",
            color: "#E5E5E590",
            fontSize: "13px",
            paddingLeft: "3px"
          },
          "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiFormLabel-filled":
            {
              transform: "translate(12px, -6px) scale(0.75)",
              color: "#F0F0F0"
            },
          "& .MuiInputLabel-root:not(.Mui-focused):not(.MuiFormLabel-filled)": {
            fontSize: "12px"
          },
          "& .MuiInputLabel-root.Mui-error": {
            color: "#FF3737"
          },
          "& .MuiInputLabel-root.Mui-disabled": {
            color: "#9B9B9B"
          },
          "& .MuiFormHelperText-root": {
            color: "#F0F0F0",
            marginLeft: "5px"
          },
          "& .MuiFormHelperText-root.Mui-error": {
            color: "#FF3737"
          },
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#878787"
          },
          "&.MuiTextField-sizeSmall": {
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: "10rem"
          }
        }
      }
    }
  }
});

export default theme;
