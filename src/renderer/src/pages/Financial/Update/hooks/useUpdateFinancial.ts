import FinancialService from "@api/financial/service";
import { useFinancialContext } from "@pages/Financial/context";
import { useFormContext } from "react-hook-form";
import { FinancialUpdateModel } from "@api/financial/model";
import useFinancial from "@pages/Financial/hooks/useFinancial";
import { snackbar } from "@utils/snackbar";
import FileService from "@api/file/service";

interface HookReturn {
  handleSubmitForm: (onClose: () => void) => void;
  handleUploadImage: (files: File[]) => void;
}
const useUpdateFinancial = (): HookReturn => {
  const { state, setState } = useFinancialContext();
  const { fetchFinancial } = useFinancial();
  const { handleSubmit, trigger } = useFormContext<FinancialUpdateModel>();
  const financialService = new FinancialService();
  const fileService = new FileService();

  // TODO: fix can't upload image
  // more explanation at service file
  const handleUploadImage = (files: File[]) => {
    fileService.uploadImages(files, {
      onSuccess: (data) => {
        console.log(data);
        trigger("transfered_evidence");
        // setState((prevState) => ({
        //   ...prevState,
        //   transferedEvidence: data
        // }));
      },
      onError: (errMessage) => {
        snackbar.error(errMessage);
      }
    });
  };

  const handleSubmitForm = (onClose: () => void) => {
    return handleSubmit((values) => {
      setState((prevState) => ({
        ...prevState,
        updateFinreqLoading: true
      }));

      const overrideValues = {
        transfered_evidence:
          values.transfered_evidence === "" ? "-" : values.transfered_evidence
      };

      financialService.updateFinancialRequest(
        state.finreqDetails.request_id,
        Object.assign(values, overrideValues),
        {
          onSuccess: () => {
            setState((prevState) => ({
              ...prevState,
              updateFinreqLoading: false
            }));
            snackbar.success("Financial request updated successfully");
            fetchFinancial();
            onClose();
          },
          onError: (errMessage) => {
            snackbar.error(errMessage);
            setState((prevState) => ({
              ...prevState,
              updateFinreqLoading: false
            }));
          }
        }
      );
    })();
  };

  return {
    handleSubmitForm,
    handleUploadImage
  };
};

export default useUpdateFinancial;
