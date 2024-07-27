import { FinancialModel } from "@api/financial/model";
import FinancialService from "@api/financial/service";
import { useFinancialContext } from "@pages/Financial/context";
import { snackbar } from "@utils/snackbar";

interface HookReturn {
  fetchFinancialDetails: (id: string) => void;
  handleClickRow: (id: string) => void;
  handleCloseDialog: () => void;
}
const useFinancialDetails = (): HookReturn => {
  const { setState, dialog } = useFinancialContext();
  const financialService = new FinancialService();

  const fetchFinancialDetails = (id: string) => {
    setState((prevState) => ({
      ...prevState,
      finreqDetailsLoading: true
    }));

    financialService.fetchFinancialRequestById(id, {
      onSuccess: (data) => {
        setState((prevState) => ({
          ...prevState,
          finreqDetails: data,
          finreqDetailsLoading: false
        }));
      },
      onError: (errMessage) => {
        snackbar.error(errMessage);
        setState((prevState) => ({
          ...prevState,
          finreqDetailsLoading: false
        }));
      }
    });
  };

  const handleClickRow = (id: string) => {
    fetchFinancialDetails(id);
    dialog.finreqDetails.onOpen();
  };

  const handleCloseDialog = () => {
    setState((prevState) => ({
      ...prevState,
      finreqDetails: {} as FinancialModel,
      isEditFinreqDetails: false,
      finreqDetailsLoading: false
    }));
    dialog.finreqDetails.onClose();
  };

  return {
    fetchFinancialDetails,
    handleClickRow,
    handleCloseDialog
  };
};

export default useFinancialDetails;
