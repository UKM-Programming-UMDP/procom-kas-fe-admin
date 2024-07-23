import { FetchCallback } from "@types";
import APIInstance from "..";

type HealthCheckResponse = {
  balance: number;
  updated_at: string;
};

export default class CommonServices {
  private api: APIInstance = new APIInstance();

  // Because there is no route yet for health check, this is just a placeholder
  async healthCheck(callback: FetchCallback<HealthCheckResponse>) {
    const res = await this.api.GET<HealthCheckResponse>("/v1/balance");
    if (!res || !res.status) {
      callback.onError(res?.message || "Failed to fetch balance");
    } else {
      if (res.data) callback.onSuccess(res.data);
    }
    callback.onFullfilled && callback.onFullfilled();
  }
}
