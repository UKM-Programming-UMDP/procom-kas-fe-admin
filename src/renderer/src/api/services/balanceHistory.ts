import { APIResponse } from "types/api";
import API from "..";

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
  private api: API = new API();
  private basePath = "/balance/history";

  async get() {
    const res: APIResponse<GetBalanceHistory[]> = await this.api.GET(
      this.basePath
    );
    return res;
  }
}
