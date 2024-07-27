import ScreenCard from "@components/Card/ScreenCard";
import { useEffect } from "react";
import { useFinancialContext } from "./context";
import useFinancial from "./hooks/useFinancial";
import FinancialTable from "./List/FinancialTable";
import { LoadingDialog } from "@components/Dialog";
import FinancialDetailsDialog from "./Details/FinancialDetailsDialog";
import useFinancialDetails from "./Details/hooks/useFinancialDetails";
import useUpdateFinancialForm from "./Update/hooks/useUpdateFinancialForm";
import { FormProvider } from "react-hook-form";

const FinancialLayout = () => {
  const { state, dialog } = useFinancialContext();
  const { fetchFinancial } = useFinancial();
  const { handleCloseDialog } = useFinancialDetails();
  const { finreqForm } = useUpdateFinancialForm();

  const { finreqDetails } = dialog;

  useEffect(() => {
    fetchFinancial();
  }, []);

  return (
    <>
      <ScreenCard displayName="Financial Request">
        <div>
          <FinancialTable />
        </div>
      </ScreenCard>
      {state.finreqDetailsLoading ? (
        <LoadingDialog
          open={finreqDetails.isOpen}
          onClose={handleCloseDialog}
        />
      ) : finreqDetails.isOpen ? (
        <FormProvider {...finreqForm}>
          <FinancialDetailsDialog
            isOpen={finreqDetails.isOpen}
            onClose={handleCloseDialog}
          />
        </FormProvider>
      ) : null}
    </>
  );
};

export default FinancialLayout;
