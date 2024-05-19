import ScreenCard from "@components/Card/ScreenCard";
import useDashboard from "./hooks/useDashboard";
import { useEffect } from "react";
import { useDashboardContext } from "./context";
import ReactLoading from "react-loading";

const Dashboard = () => {
  const { state } = useDashboardContext();
  const { fetchBalance } = useDashboard();

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <ScreenCard displayName="Dashboard">
      <div className="flex gap-2">
        <span>Current Balance:</span>
        <span>
          {state.balanceLoading ? (
            <ReactLoading type="bubbles" width={30} height={30} />
          ) : (
            state.balance.balance
          )}
        </span>
      </div>
    </ScreenCard>
  );
};

export default Dashboard;
