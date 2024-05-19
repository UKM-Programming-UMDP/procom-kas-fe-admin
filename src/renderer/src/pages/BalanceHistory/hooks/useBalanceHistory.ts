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
    const res = await balanceHistoryServices.get();
    if (!res || !res.status) {
      setState((prev) => ({ ...prev, balanceHistoryLoading: false }));
      return;
    }
    setState((prev) => ({
      ...prev,
      balanceHistory: res.data,
      balanceHistoryLoading: false
    }));
  };

  return {
    fetchBalanceHistory
  };
};

export default useBalanceHistory;
