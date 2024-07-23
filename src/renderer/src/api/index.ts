import { APIResponse } from "@types";

export default class APIInstance {
  private api = window.api;

  async GET<T>(path: string): Promise<APIResponse<T>> {
    return await this.api.GET(path);
  }

  async POST<T>(path: string, data: T): Promise<APIResponse<T>> {
    return await this.api.POST(path, data);
  }

  async PUT<T>(path: string, data: T): Promise<APIResponse<T>> {
    return await this.api.PUT(path, data);
  }

  async DELETE<T>(path: string): Promise<APIResponse<T>> {
    return await this.api.DELETE(path);
  }
}
