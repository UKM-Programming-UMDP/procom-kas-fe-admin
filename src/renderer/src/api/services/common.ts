import { APIResponse } from "types/api";
import API from "..";

type HealthCheckResponse = {
  balance: number;
  updated_at: string;
};

export default class CommonServices {
  private api: API = new API();

  // Because there is no route yet for health check, this is just a placeholder
  async healthCheck() {
    const res: APIResponse<HealthCheckResponse> =
      await this.api.GET("/balance");
    return res;
  }
}
