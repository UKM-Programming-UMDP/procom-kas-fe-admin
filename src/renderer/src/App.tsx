import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import Home from "@pages/Home";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App(): JSX.Element {
  return (
    <div className="h-[100vh]">
      <ThemeProvider theme={theme}>
        <SkeletonTheme baseColor="#52525230" highlightColor="#444">
          <Home />
        </SkeletonTheme>
      </ThemeProvider>
    </div>
  );
}

export default App;
