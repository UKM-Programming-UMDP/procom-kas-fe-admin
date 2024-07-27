import { ActionButton } from "@components/Button";
import { BaseDialog, DialogContent, DialogFooter } from "@components/Dialog";
import { useFinancialContext } from "../context";
import { paymentStatus } from "@utils/consts";
import FinancialDetailsContent from "./FinancialDetailsContent";
import FinancialUpdateForm from "../Update/UpdateFinancialDialog";
import useFinancialList from "../List/hooks/useFinancialList";
import useUpdateFinancial from "../Update/hooks/useUpdateFinancial";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const FinancialDetailsDialog = (props: Props) => {
  const { isOpen, onClose } = props;
  const { state } = useFinancialContext();
  const { handleEditFinreqDetails } = useFinancialList();
  const { handleSubmitForm } = useUpdateFinancial();

  const isEditMode = state.isEditFinreqDetails;
  const isPaymentStatusPending =
    state.finreqDetails.payment.status.id === paymentStatus.PENDING;

  return (
    <BaseDialog
      open={isOpen}
      onClose={onClose}
      title="Financial Request Details"
    >
      <DialogContent>
        <FinancialDetailsContent currentFinreq={state.finreqDetails} />

        {isEditMode ? <FinancialUpdateForm /> : null}
      </DialogContent>
      <DialogFooter onCancel={onClose} cancelLabel="Close">
        {isEditMode ? (
          <ActionButton
            label="Submit"
            onClick={() => handleSubmitForm(onClose)}
          />
        ) : (
          isPaymentStatusPending && (
            <ActionButton label="Edit" onClick={handleEditFinreqDetails} />
          )
        )}
      </DialogFooter>
    </BaseDialog>
  );
};

export default FinancialDetailsDialog;
