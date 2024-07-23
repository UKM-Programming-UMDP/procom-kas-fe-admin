import { useBalanceHistoryContext } from "../context";
import BalanceHistoryServices from "@services/balanceHistory";

interface HookReturn {
  fetchBalanceHistory: () => void;
}
const useBalanceHistory = (): HookReturn => {
  const { setState } = useBalanceHistoryContext();
  const balanceHistoryServices = new BalanceHistoryServices();

  const fetchBalanceHistory = async () => {
    setState((prev) => ({ ...prev, balanceHistoryLoading: true }));
    balanceHistoryServices.fetchBalanceHistory({
      onSuccess: (data) => {
        setState((prev) => ({
          ...prev,
          balanceHistory: data,
          balanceHistoryLoading: false
        }));
      },
      onError: () => {
        setState((prev) => ({ ...prev, balanceHistoryLoading: false }));
      }
    });
  };

  return {
    fetchBalanceHistory
  };
};

export default useBalanceHistory;
