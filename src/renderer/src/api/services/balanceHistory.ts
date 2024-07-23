import { FetchCallback } from "@types";
import APIInstance from "..";

export type BalanceHistoryModel = {
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

  async fetchBalanceHistory(callback: FetchCallback<BalanceHistoryModel[]>) {
    const res = await this.api.GET<BalanceHistoryModel[]>(this.basePath);
    if (!res || !res.status) {
      callback.onError(res?.message || "Failed to fetch balance history");
    } else {
      callback.onSuccess(res.data);
    }
    callback.onFullfilled && callback.onFullfilled();
  }
}
