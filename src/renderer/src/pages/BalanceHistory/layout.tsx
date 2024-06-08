import ScreenCard from "@components/Card/ScreenCard";
import useBalanceHistory from "./hooks/useBalanceHistory";
import { useEffect } from "react";
import { useBalanceHistoryContext } from "./context";
import Skeleton from "react-loading-skeleton";

const BalanceHistoryLayout = () => {
  const { state } = useBalanceHistoryContext();
  const { fetchBalanceHistory } = useBalanceHistory();

  useEffect(() => {
    fetchBalanceHistory();
  }, []);

  return (
    <ScreenCard displayName="Balance History">
      {state.balanceHistoryLoading ? (
        <Skeleton height={300} width={250} />
      ) : (
        <div>
          {state.balanceHistory.map((item, index) => (
            <div key={index}>
              {item.activity} - {item.amount} -{" "}
              {item.user.name || item.user.npm}
            </div>
          ))}
        </div>
      )}
    </ScreenCard>
  );
};

export default BalanceHistoryLayout;
