import { FetchCallback } from "@types";
import APIInstance from "..";
import { BalanceHistoryModel, BalanceModel } from "./model";

export default class BalanceService {
  private api: APIInstance = new APIInstance();
  private basePath: string = "/v1/balance";

  async fetchBalance(callback: FetchCallback<BalanceModel>) {
    const res = await this.api.GET<BalanceModel>(this.basePath);
    if (!res?.status) {
      callback.onError(res.message);
    } else {
      if (res.data) callback.onSuccess(res.data);
    }
    callback.onFullfilled && callback.onFullfilled();
  }

  async fetchBalanceHistory(callback: FetchCallback<BalanceHistoryModel[]>) {
    const res = await this.api.GET<BalanceHistoryModel[]>(
      this.basePath + "/history"
    );
    if (!res?.status) {
      callback.onError(res?.message || "Failed to fetch balance history");
    } else {
      callback.onSuccess(res.data);
    }
    callback.onFullfilled && callback.onFullfilled();
  }
}
