import { APIResponse } from "@types";
import APIInstance from "..";

export type GetBalanceHistory = {
  amount: number;
  activity: "Add" | "Substract";
  note: string;
  user: {
    npm: string;
    name: string;
  };
  created_at: string;
};

export default class BalanceHistoryServices {
  private api: APIInstance = new APIInstance();
  private basePath = "/v1/balance/history";

  async get() {
    const res: APIResponse<GetBalanceHistory[]> = await this.api.GET(
      this.basePath
    );
    return res;
  }
}
