import BalanceServices from "@services/balance";
import { useDashboardContext } from "../context";

interface HookReturn {
  fetchBalance: () => void;
}
const useDashboard = (): HookReturn => {
  const { setState } = useDashboardContext();
  const balanceServices = new BalanceServices();

  const fetchBalance = async () => {
    setState((prev) => ({ ...prev, balanceLoading: true }));
    const res = await balanceServices.get();
    if (!res || !res.status) {
      setState((prev) => ({ ...prev, balanceLoading: false }));
      return;
    }
    setState((prev) => ({
      ...prev,
      balance: res.data,
      balanceLoading: false
    }));
  };

  return {
    fetchBalance
  };
};

export default useDashboard;
