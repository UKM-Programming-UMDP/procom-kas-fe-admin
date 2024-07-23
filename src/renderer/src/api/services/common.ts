import { APIResponse } from "@types";
import APIInstance from "..";

type HealthCheckResponse = {
  balance: number;
  updated_at: string;
};

export default class CommonServices {
  private api: APIInstance = new APIInstance();

  // Because there is no route yet for health check, this is just a placeholder
  async healthCheck() {
    const res: APIResponse<HealthCheckResponse> =
      await this.api.GET("/v1/balance");
    return res;
  }
}
