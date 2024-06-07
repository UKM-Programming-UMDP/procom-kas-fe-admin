import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import HomeLayout from "@pages/Home/layout";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App(): JSX.Element {
  return (
    <div className="h-[100vh]">
      <ThemeProvider theme={theme}>
        <SkeletonTheme baseColor="#52525230" highlightColor="#444">
          <HomeLayout />
        </SkeletonTheme>
      </ThemeProvider>
    </div>
  );
}

export default App;
