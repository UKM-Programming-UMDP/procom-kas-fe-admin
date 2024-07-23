import { APIResponse } from "@types";
import APIInstance from "..";

export type GetPayedKas = {
  submission_id: string;
  user: {
    npm: string;
    name: string;
    email: string;
    kas_payed: number;
    month_start_pay: {
      id: number;
    };
  };
  payed_amount: number;
  status: string;
  note: string;
  evidence: string;
  submitted_at: string;
  updated_at: string;
};

export default class PayedKasService {
  basePath: string = "/v1/kas-submissions";
  private api: APIInstance = new APIInstance();

  async get() {
    const targetPath = this.basePath + "?sort=created_at&order_by=desc";
    const res: APIResponse<GetPayedKas[]> = await this.api.GET(targetPath);
    return res;
  }
}
