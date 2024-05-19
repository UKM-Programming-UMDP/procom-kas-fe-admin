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
    }
  }
});

export default theme;
