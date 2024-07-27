import BalanceService from "@api/balance/service";
import { useBalanceHistoryContext } from "../context";

interface HookReturn {
  fetchBalanceHistory: () => void;
}
const useBalanceHistory = (): HookReturn => {
  const { setState } = useBalanceHistoryContext();
  const balanceService = new BalanceService();

  const fetchBalanceHistory = async () => {
    setState((prev) => ({ ...prev, balanceHistoryLoading: true }));
    balanceService.fetchBalanceHistory({
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
