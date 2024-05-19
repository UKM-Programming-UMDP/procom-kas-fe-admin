import { useEffect } from "react";
import { useHomeContext } from "./context";
// import useHome from "./hooks/useHome";
import ReactLoading from "react-loading";
import Taskbar from "./partials/Taskbar";
import DashboardLayout from "@layouts/Dashboard";
import BalanceHistoryLayout from "@layouts/BalanceHistory";

const Home = () => {
  const { state } = useHomeContext();
  // const { checkServerStatus } = useHome();

  useEffect(() => {
    // checkServerStatus();
  }, []);

  const appList = {
    dashboard: <DashboardLayout />,
    "balance history": <BalanceHistoryLayout />
  };

  if (state.isServerUpLoading)
    return (
      <div className="h-full flex pb-10">
        <ReactLoading type="bubbles" className="m-auto" />
      </div>
    );

  return (
    <div className="h-full flex flex-col">
      <div className="h-full">{appList[state.app]}</div>
      <div className="bg-zinc-900/85 h-12 flex">
        <Taskbar />
      </div>
    </div>
  );
};

export default Home;
