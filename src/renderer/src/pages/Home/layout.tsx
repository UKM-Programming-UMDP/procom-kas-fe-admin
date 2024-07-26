import { useEffect } from "react";
import { useHomeContext } from "./context";
// import useHome from "./hooks/useHome";
import ReactLoading from "react-loading";
import Taskbar from "./partials/Taskbar";
import BalanceHistory from "@pages/BalanceHistory";
import Dashboard from "@pages/Dashboard";
import Financial from "@pages/Financial";

const HomeLayout = () => {
  const { state } = useHomeContext();
  // const { checkServerStatus } = useHome();

  useEffect(() => {
    // temporary disable for development,
    // to avoid slow initial load
    // checkServerStatus();
  }, []);

  const appList = {
    dashboard: <Dashboard />,
    "balance history": <BalanceHistory />,
    "financial request": <Financial />
  };

  if (state.isServerUpLoading)
    return (
      <div className="h-full flex pb-10">
        <ReactLoading type="bubbles" className="m-auto" />
      </div>
    );

  return (
    <div className="h-full flex flex-col">
      <div className="h-[93%] relative" style={{ userSelect: "text" }}>
        {appList[state.app]}
      </div>
      <div className="bg-zinc-900/85 h-[7%] flex">
        <Taskbar />
      </div>
    </div>
  );
};

export default HomeLayout;
