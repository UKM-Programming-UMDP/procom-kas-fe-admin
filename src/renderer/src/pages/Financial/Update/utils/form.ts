import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FinancialModel, FinancialUpdateModel } from "@api/financial/model";
import { paymentStatus } from "@utils/consts";

export const finreqDefaultValues: FinancialUpdateModel = {
  status: {
    id: 0
  },
  transfered_evidence: ""
};

export const finreqValidations = yupResolver(
  yup.object().shape({
    status: yup.object().shape({
      id: yup
        .number()
        .typeError("Payment Status is required")
        .min(1, "Payment Status is required")
        .required("Payment Status is required")
    }),
    transfered_evidence: yup
      .string()
      .notRequired()
      .when("status.id", {
        is: (value: FinancialUpdateModel["status"]["id"]) =>
          value === paymentStatus.APPROVED,
        // TODO: change to required after upload image service is fixed
        then: (rule) => rule.notRequired()
        // then: (rule) => rule.required("Transfered evidence is required")
      })
  })
);

export const finreqDetailsFormatter = (
  data: FinancialModel
): FinancialUpdateModel => {
  return {
    status: {
      id: data?.payment?.status?.id
    },
    transfered_evidence: data?.transfered_evidence
  };
};
