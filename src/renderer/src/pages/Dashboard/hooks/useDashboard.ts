import BalanceService from "@api/balance/service";
import { useDashboardContext } from "../context";
import { snackbar } from "@utils/snackbar";

interface HookReturn {
  fetchBalance: () => void;
}
const useDashboard = (): HookReturn => {
  const { setState } = useDashboardContext();
  const balanceService = new BalanceService();

  const fetchBalance = async () => {
    setState((prev) => ({
      ...prev,
      balanceLoading: true
    }));

    balanceService.fetchBalance({
      onSuccess: (data) => {
        setState((prev) => ({
          ...prev,
          balance: data,
          balanceLoading: false
        }));
      },
      onError: (errMessage) => {
        snackbar.error(errMessage);
        setState((prev) => ({
          ...prev,
          balanceLoading: false
        }));
      }
    });
  };

  return {
    fetchBalance
  };
};

export default useDashboard;
