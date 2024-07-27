import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import Home from "@pages/Home";
import { SnackbarProvider } from "notistack";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App(): JSX.Element {
  return (
    <div className="h-[100vh]">
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <ThemeProvider theme={theme}>
          <SkeletonTheme baseColor="#52525230" highlightColor="#525252">
            <Home />
          </SkeletonTheme>
        </ThemeProvider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
