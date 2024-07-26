import { useFinancialContext } from "@pages/Financial/context";
import { Resolver, useForm, UseFormReturn } from "react-hook-form";
import { FinancialUpdateModel } from "@api/financial/model";
import {
  finreqDefaultValues,
  finreqDetailsFormatter,
  finreqValidations
} from "../utils/form";

interface HookReturn {
  finreqForm: UseFormReturn<FinancialUpdateModel>;
}
const useUpdateFinancialForm = (): HookReturn => {
  const { state } = useFinancialContext();

  const finreqForm: UseFormReturn<FinancialUpdateModel> =
    useForm<FinancialUpdateModel>({
      defaultValues: finreqDefaultValues,
      values: finreqDetailsFormatter(state.finreqDetails),
      resolver: finreqValidations as Resolver<FinancialUpdateModel>
    });

  return {
    finreqForm
  };
};

export default useUpdateFinancialForm;
