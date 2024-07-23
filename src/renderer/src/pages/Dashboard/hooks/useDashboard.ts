import BalanceServices from "@services/balance";
import { useDashboardContext } from "../context";

interface HookReturn {
  fetchBalance: () => void;
}
const useDashboard = (): HookReturn => {
  const { setState } = useDashboardContext();
  const balanceServices = new BalanceServices();

  const fetchBalance = async () => {
    setState((prev) => ({
      ...prev,
      balanceLoading: true
    }));

    balanceServices.fetchBalance({
      onSuccess: (data) => {
        setState((prev) => ({
          ...prev,
          balance: data,
          balanceLoading: false
        }));
      },
      onError: (errMessage) => {
        console.log(errMessage);
        // handle error here
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
