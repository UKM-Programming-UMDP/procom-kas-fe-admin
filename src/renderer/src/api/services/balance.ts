import { APIResponse } from "types/api";
import API from "..";

export type GetBalance = {
  balance: number;
  updated_at: string;
};

export default class BalanceServices {
  private api: API = new API();
  private basePath: string = "/balance";

  async get() {
    const targetPath = this.basePath;
    const res: APIResponse<GetBalance> = await this.api.GET(targetPath);
    return res;
  }
}
