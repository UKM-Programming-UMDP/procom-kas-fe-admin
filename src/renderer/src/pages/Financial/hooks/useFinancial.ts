import FinancialService from "@api/financial/service";
import { useFinancialContext } from "../context";
import CommonService from "@api/common/service";
import { snackbar } from "@utils/snackbar";
import { filterMapper } from "../List/utils/filterMapper";
import { FilterParams } from "@types";

interface HookReturn {
  fetchFinancial: (filterParams?: FilterParams) => void;
  fetchOptions: (stateKey: OptionsStateKey) => void;
}
const useFinancial = (): HookReturn => {
  const { state, setState } = useFinancialContext();
  const financialService = new FinancialService();
  const commonService = new CommonService();

  const fetchFinancial = async (
    filterParams: FilterParams = filterMapper(
      Object.assign(state.filters, state.pagination)
    )
  ) => {
    setState((prev) => ({
      ...prev,
      financialRequestLoading: true
    }));

    financialService.fetchFinancialRequest(filterParams, {
      onSuccess: (res) => {
        setState((prev) => ({
          ...prev,
          financialRequest: res.data,
          pagination: res.pagination,
          financialRequestLoading: false
        }));
      },
      onError: (errMessage) => {
        snackbar.error(errMessage);
        setState((prev) => ({
          ...prev,
          financialRequestLoading: false
        }));
      }
    });
  };

  const fetchOptions = async (stateKey: OptionsStateKey) => {
    setState((prev) => ({
      ...prev,
      [stateKey]: {
        ...prev[stateKey],
        loading: true
      }
    }));

    const serviceFunction =
      stateKey === "paymentType" ? "fetchPaymentType" : "fetchPaymentStatus";

    commonService[serviceFunction]({
      onSuccess: (data) => {
        setState((prev) => ({
          ...prev,
          [stateKey]: {
            ...prev[stateKey],
            loading: false,
            options: data
          }
        }));
      },
      onError: (errMessage) => {
        snackbar.error(errMessage);
        setState((prev) => ({
          ...prev,
          [stateKey]: {
            ...prev[stateKey],
            loading: false
          }
        }));
      }
    });
  };

  return {
    fetchFinancial,
    fetchOptions
  };
};

type OptionsStateKey = "paymentType" | "paymentStatus";

export default useFinancial;
