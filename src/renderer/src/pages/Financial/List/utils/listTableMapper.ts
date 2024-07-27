import { FinancialModel } from "@api/financial/model";

export type MappedTable = {
  requestID: string;
  amount: number;
  username: string;
  paymentStatusID: number;
  paymentStatus: string;
  note: string;
  createdAt: string;
};

export function listTableMapper(data: FinancialModel[]): MappedTable[] {
  return data.map((item) => ({
    requestID: item.request_id,
    amount: item.amount,
    username: item.user.name,
    paymentStatusID: item.payment.status.id,
    paymentStatus: item.payment.status.name,
    note: item.note,
    createdAt: item.created_at
  }));
}
