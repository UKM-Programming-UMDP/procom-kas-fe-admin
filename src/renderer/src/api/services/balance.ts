import { APIResponse } from "@types";
import APIInstance from "..";

export type GetBalance = {
  balance: number;
  updated_at: string;
};

export default class BalanceServices extends APIInstance {
  private basePath: string = "/v1/balance";

  async fetchBalance() {
    const targetPath = this.basePath;
    const res: APIResponse<GetBalance> = await this.GET(targetPath);
    return res;
  }
}
