import { Controller, useFormContext } from "react-hook-form";
import { BasicDropdown } from "@components/Dropdown";
import { useFinancialContext } from "../context";
import useFinancial from "../hooks/useFinancial";
import { useEffect } from "react";
import { paymentStatus } from "@utils/consts";
import Dropzone from "@components/Dropzone";
import { FinancialUpdateModel } from "@api/financial/model";
import useUpdateFinancial from "./hooks/useUpdateFinancial";

const FinancialUpdateForm = () => {
  const { state } = useFinancialContext();
  const { fetchOptions } = useFinancial();
  const { watch, control } = useFormContext<FinancialUpdateModel>();
  const { handleUploadImage } = useUpdateFinancial();

  useEffect(() => {
    fetchOptions("paymentStatus");
  }, []);

  const isPaymentStatusApproved = watch("status.id") === paymentStatus.APPROVED;

  return (
    <div>
      <div className="pt-3 mb-4 border-b border-gray-300/30" />
      <Controller
        name="status.id"
        control={control}
        render={({ field, fieldState }) => (
          <BasicDropdown
            {...field}
            label="Payment Status"
            disabled={state.updateFinreqLoading}
            isLoading={state.paymentStatus.loading}
            options={state.paymentStatus.options}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      {isPaymentStatusApproved ? (
        <Controller
          name="transfered_evidence"
          control={control}
          render={({ fieldState }) => (
            <Dropzone
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              onUpload={handleUploadImage}
            />
          )}
        />
      ) : null}
    </div>
  );
};

export default FinancialUpdateForm;
