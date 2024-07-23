import { FetchCallback } from "@types";
import APIInstance from "..";

export type BalanceModel = {
  balance: number;
  updated_at: string;
};

export default class BalanceServices {
  private api: APIInstance = new APIInstance();
  private basePath: string = "/v1/balance";

  async fetchBalance(callback: FetchCallback<BalanceModel>) {
    const res = await this.api.GET<BalanceModel>(this.basePath);
    if (!res || !res.status) {
      callback.onError(res?.message || "Failed to fetch balance");
    } else {
      if (res.data) callback.onSuccess(res.data);
    }
    callback.onFullfilled && callback.onFullfilled();
  }
}
