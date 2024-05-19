/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIResponse } from "types/api";

export default class API {
  private api = window.api;

  async GET<T>(path: string): Promise<APIResponse<T>> {
    return await this.api.GET(path);
  }

  async POST<T>(path: string, data: any): Promise<APIResponse<T>> {
    return await this.api.POST(path, data);
  }

  async PUT<T>(path: string, data: any): Promise<APIResponse<T>> {
    return await this.api.PUT(path, data);
  }

  async DELETE<T>(path: string): Promise<APIResponse<T>> {
    return await this.api.DELETE(path);
  }
}
